---
title: 'Overcoming Concurrent Refresh Attempts of Access Tokens (Jwt)'
date: 2024-10-09T10:04:58+05:30
author: "Sandesh Shahapur"
draft: true
---

## Background:
I was tasked with developing a web interface for an e-sports FIFA tournament service (SAFA) that had been operating primarily on Discord. They wanted to extend their services to a website, and I was responsible for making it happen.
Because the database for users was modeled around their discord account ID, the website required integrating with Discord. As Discord provides an OAuth service ([OAuth explained](/content/blogs/overcoming-(discord)-api-rate-limits-with-redis-cache.md)), by using JWT (learn what JWT is here) I implemented login feature through Discord OAuth (learn how to do it yourself here).

Authorization Workflow
Initially, the user is logged out. When they log in, an access token and refresh token is created and the access token (AT) is stored in a cookie and thereafter sent in with all requests (bearer authorization header) while RT is stored in httpOnly cookies and that is only sent to the refresh path request.
With every request, the backend verifies the signature. If signature mismatches, the user or any other issue (other than expiry), the user is logged out. If the token is expired, the frontend will make a request to refresh silently and will issue new AT & RT (point: the RT used to refresh is now exhausted) and the frontend retries the original request (if this time any token-related issue including expiry will log or logout the user).

## Problem

The workflow works well when the frontend sends only one request around the same time period. However, say when a user returns to their session and (hopefully) a page reloads or navigates to new UI often the screen is refreshed, or multiple hosts of the website could be making requests (example - page fetching user details say for navbar or whole page, multiple hosts of webpage making AJAX requests, etc.), the user ends up being logged out.


Why does this happen? All these let us consider the original/first request: it goes through our workflow and stores new AT/RT while succeeding with its request. However, by the time it stores the new AT/RT, other requests would have carried with it the old AT (which isn’t the problem) AND the old RT and when they attempt to refresh the AT, discord returns error 403 because we have already made use of that RT. As the request attempt of this request failed, it then logs out the user. Thus, the issue is concurrent attempts of refreshing access tokens.

Approach to solution What are our options?

1. We extend expiry periods such that logging out occurs unfrequently but is infrequent.
This is not really a solution and it is a security issue.


2. We limit the number of refresh requests after a time period.
This can be implemented but it makes our app slow and it does not scale.


3. We check for expiry before making a request if possible and then allow only one request at a time. This will make the site slow. Although, can be implemented with global locking.


4. Locking mechanism at backend.
We borrow the idea of using locks from processor idea to have it in place at the backend. To use what speed, a memcache such as Redis is optimal. It is reliable and widely provides best efficiency.




---

Solution Workflow of distributed locking mechanism using Redis:

1. The frontend mechanism is unchanged.


2. When a refresh attempt is made to refresh, we first check if there is an entry in Redis for the RT of the request. If there is not, I acquire a lock on it by inserting an entry of that key/refresh token in Redis with the value being “processing”. After either succeeding or failing with the refresh attempt, I update the status of my entry lock such as expiry of the lock and return the appropriate status for the request.



However, if the lock exists, I will not try to refresh the token. Instead, I will wait until the status of the lock is not “processing”. After which, depending on the result of the original request, I return the status as indicated by the lock. This ensures that only the first original request attempts to refresh while the others wait to find out if the original was a success or a failure.
