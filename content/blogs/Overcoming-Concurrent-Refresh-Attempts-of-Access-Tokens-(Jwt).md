---
title: 'Overcoming Concurrent Refresh Attempts of Access Tokens (JWT)'
date: 2024-10-09T10:04:58+05:30
author: "Sandesh Shahapur"
draft: true
tags: ['JWT', 'OAuth', 'Concurrency', 'Redis', 'Access Tokens', 'React']
categories: ['Web Development', 'Web Security', 'Tutorials']
summary: 'A deep dive into handling concurrent refresh attempts of access tokens in a single-page application using JWT, OAuth, and Redis-based locking mechanisms to enhance token management security.'
---

## Background:
I was tasked with extending an e-sports FIFA tournament service (SAFA) that had been operating primarily on Discord through a Discord bot, to the web. The aim was to develop a web interface by integrating it with Discord,  which provides [OAuth]( {{< ref "" >}} ) authentication. Since the database for users was modeled around their Discord account ID, [I implemented login functionality using Discord OAuth]( {{< ref "" >}} ) and [JWT]( {{< ref "" >}} ) tokens.

## Authorization Workflow:
Initially, the user is logged out. Upon login, an access token and refresh token are created, both stored as JWTs in [cookies]( {{< ref "" >}} ). The access token is sent with all requests (via the bearer authorization header), while the refresh token is only sent to a specific refresh endpoint (`/refresh`). The backend verifies these tokens (JWT verification) whenever frontend makes a request to it.

If verification fails for reasons other than expiration, the user is logged out. If the token has expired, the frontend silently attempts to refresh it by sending a request to backend at `/refresh`. If the refresh is successful, new access and refresh tokens are issued, and the original request is retried. If any error occurs during this process, including token expiry, the user is logged out.

## The Problem:
This process works well when only one request is sent at a time. However, since the website uses [client-side rendering (CSR)]( {{< ref "" >}} ) and is a [single-page application (SPA)]( {{< ref "" >}} ) built with React, users often send multiple [AJAX]( {{< ref "" >}} ) requests simultaneously. This can lead to unintended session termination due to concurrent refresh attempts which logs the user out.

### Why does this happen?
When the access token has expired, the first request to the backend triggers a refresh and retrieves new tokens. However, before these new tokens are updated to the frontend, other requests are sent with the old tokens. If those requests also try to refresh the tokens, Discord returns an error (403) because the refresh token has already been used. This causes the system to terminate the user's session thereby logging them out.

## Solution Options:
1. **Extend token expiration periods**: This reduces the frequency of refreshes and unintended session terminations, but it introduces security risks and is not a proper solution.
2. **Queue requests**: When the frontend detects an expired token, it queues the requests until the refresh is completed. This can slow down the app, especially when expiration times are short.
3. **Locking mechanism of Refresh Token**: The backend uses locks on Refresh Tokens, ensuring that only one refresh attempt for a Refresh Token is processed at a time.

## The Chosen Solution: Redis-based Locking Mechanism
I chose to implement a locking mechanism using [Redis]( {{< ref "" >}} ), a fast in-memory data store with built-in key expiry.

We allow the first request to refresh the token while the others wait for the result of the first request.
Here’s how it works:

1. The backend returns Token expiration error, the frontend then sends a refresh request to the backend at `/refresh`.
2. Two Redis keys are used:
   - `refresh_token_lock:<Refresh Token>`: Indicates whether the refresh token is being processed.
   - `refresh_token:<Refresh Token>`: Holds the result status of the refresh attempt for the Token.
3. At `/refresh` backend first checks if a `refresh_token:<Refresh Token>` key exists in Redis. If it does, the system returns the corresponding status.
4. If the key does not exist, we check for the `refresh_token_lock:<Refresh Token>` key to see if another request has acquired the lock. If the lock is held, the request waits for it to be released and then checks the status key again.
5. If no lock is present, the request acquires the lock, performs the refresh, and sets the appropriate status key in Redis. The lock is then released, and the status is returned.

This ensures that only the first request refreshes the token, while other requests wait for the result.

## Conclusion:
The Redis-based locking mechanism effectively handles and prevents concurrent refresh attempts and ensures that only one request is allowed to refresh tokens at a time. This solution enhances the overall reliability and security of token management in the system.

tags: [OAuth, JWT, Redis, Security, Web Development]
