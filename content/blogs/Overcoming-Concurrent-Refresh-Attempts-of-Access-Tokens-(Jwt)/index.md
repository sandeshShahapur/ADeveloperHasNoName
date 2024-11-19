---
title: "Overcoming Concurrent Refresh Attempts of Access Tokens (JWT)"
date: 2024-10-09T10:04:58+05:30
author: "Sandesh Shahapur"
draft: false
tags: ["JWT", "OAuth", "Concurrency", "Redis", "Access Tokens", "React"]
categories: ["Web Development", "Web Security", "Tutorials"]
summary: "A deep dive into handling concurrent refresh attempts of access tokens in a single-page application using JWT, OAuth, and Redis-based locking mechanisms to enhance token management security."
---

## Background

I was tasked with extending an e-sports FIFA tournament service (SAFA) that had been operating primarily on {{< glossary term="Discord" >}} through a Discord bot, to the web. Since the {{< glossary term="database" >}} for users was modeled around their Discord account ID, the aim was to develop a {{< glossary term="ui" displayTerm="web interface" >}} by integrating it with Discord. Thus I implemented login functionality using Discord {{< glossary term="OAuth" >}}.

## Session Management Workflow

Initially, the user is logged out. When the user logs in with their discord account, an {{< glossary term="access-token" >}} and {{< glossary term="refresh-token" >}} is created, both stored as {{< glossary term="JWT" displayTerm="JWTs" >}} in {{< glossary term="cookie" displayTerm="cookies" >}}. The access token is sent with all {{< glossary term="request" displayTerm="requests" >}} via the bearer authorization header for {{< glossary term="authentication" >}} and {{< glossary term="authorization" >}} purposes, while the refresh token is only sent to a specific refresh endpoint (`/refresh`). The {{< glossary term="backend" >}} verifies these tokens (JWT verification) whenever {{< glossary term="frontend" >}} ({{< glossary term="website" >}}) makes a request to it.

If verification fails for reasons other than token expiration (missing token, invalid token signature), the user is logged out. If the token has expired, the frontend silently attempts to refresh it by sending an additional request to backend at `/refresh`. If the refresh is successful, new access and refresh tokens are issued, and the original request is retried. If any error occurs during this process, including token expiry, the user is logged out.

## The Problem

This process works well when only one request is sent at a time. However, since the website uses {{< glossary term="client-side-rendering" displayTerm="client-side-rendering" >}} and is a {{< glossary term="single-page-application" >}} built with React, the web app often sends multiple {{< glossary term="ajax-request" displayTerm="ajax-requests" >}} simultaneously. This can lead to unintended session termination due to {{< glossary term="concurrency" displayTerm="concurrent" >}} refresh attempts which logs the user out.

### Why does this happen?

When the access token has expired, the first request to the backend triggers a refresh and retrieves new tokens. However, before these new tokens are updated in the frontend, other requests are sent with the old tokens. If those requests also try to refresh the tokens, Discord returns an error (403) because the refresh token has already been used. This causes the system to terminate the user's session thereby logging them out.

## Solution Options

1. **Extend token expiration time**: This reduces the frequency of refreshes and unintended session terminations, but it introduces security risks and is not a proper solution.
2. **Queue requests**: We queue all the requests, or we queue requests until the refresh is completed when frontend detects (before making a request) that the token is expired. This can slow down the app, especially when expiration times are short.
3. **Locking mechanism of Refresh Token**: The backend uses locks on Refresh Tokens, ensuring that only one refresh attempt for a Refresh Token is processed at a time.

## The Chosen Solution: Redis-based Locking Mechanism

I chose to implement a locking mechanism using {{< glossary term="Redis" >}}, a fast in-memory data store with built-in key expiry.

We allow the first request to refresh the token while the others wait for the result of the first request.
Here’s how it works:

1. The backend returns Token expiration error for the first request and the frontend then sends a refresh request to the backend at `/refresh`.
2. Two Redis keys are used:
    - `refresh_token_lock:<Refresh Token>`: Indicates whether the refresh token is being processed.
    - `refresh_token_res:<Refresh Token>`: Holds the result status of the refresh attempt for the Token.
3. At `/refresh`, backend first checks if a `refresh_token_res:<Refresh Token>` key exists in Redis. If it does, the system returns the corresponding result status.
4. If the key does not exist, we check for the `refresh_token_lock:<Refresh Token>` key to see if another request has acquired the lock and is already processing the refresh token. If the lock is held, the request waits for it to be released and repeats previous step.
5. If no lock is present, the request acquires the lock, performs the refresh, and sets the appropriate status key in Redis. The lock is then released, and the status is returned.

{{< figure src="concurrentRefreshAttemptsRedisSolution.svg" alt="Solution flowchart diagram" caption="Solution flowchart diagram" loading="lazy" >}}

This ensures that only the first request refreshes the token, while other requests wait for the result.

## Conclusion

The Redis-based locking mechanism effectively handles and prevents concurrent refresh attempts, and ensures that only one request is allowed to refresh tokens at a time. This solution enhances the overall reliability and security of token management in the system.
