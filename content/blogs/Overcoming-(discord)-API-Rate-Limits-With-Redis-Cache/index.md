---
title: "Overcoming (discord) API Rate Limits With Redis Cache"
date: 2024-10-08
author: "Sandesh Shahapur"
draft: false
tags: ["API", "Redis", "Discord", "Web Development", "Caching", "Rate Limit"]
categories: ["Web Development", "Tutorials"]
summary: "How to handle (Discord) API rate limits using a Redis-based caching mechanism in a web application."
todo: ["Add discord API links", "Add diagrams" ]
---

## Background

I was tasked with developing a web {{< glossary term="ui" displayTerm="interface" >}} for an e-sports FIFA tournament service (SAFA) that had been operating primarily on {{< glossary term="Discord" >}} through a Discord Bot. They wanted to extend their services to a {{< glossary term="website" >}}, and I was responsible for making it happen.

After a new user joins their Discord server, before they can interact further (e.g., searching/joining teams), they are required to update their profile using a form. After which, they were given the roles "updated-profile" and "free-agent" (indicates not being present in any team). A player if present in a team has the role "player".

## The Problem: API Rate-Limits

Whenever a user registers or logs into the website using Discord {{< glossary term="OAuth" >}}, the dashboard view presented to them is based on their roles within the Discord server. The roles dictate what actions the user can take:

1. Is the user part of the Discord server? (If not, prompt them to join)
2. Has the user updated their profile? (If not, show the form)
3. Is the user a "free-agent"? (If yes, provide options to join/create a team)
4. Is the user a "team manager"? (If yes, provide team management options)

These role details are fetched from the Discord {{< glossary term="API" >}}. However, the API has strict {{< glossary term="rate-limit" displayTerm="rate-limits" >}}: 5 {{< glossary term="request" displayTerm="requests" >}} per minute, with a soft reset allowing 1 request per minute after. The rate limit applies to a specific {{< glossary term="Access-Token" >}} for a Discord server.

Since user roles can change based on user interactions through their existing Discord Bot (e.g., joining the server, updating profile, joining a team), we needed to re-fetch roles each time the browser tab was re-focused or reloaded. Additionally, in a React development environment with StrictMode enabled, each component renders twice which doubled the number of API requests. This often led to rate-limiting issues.

## The Solution Options

There were two main approaches to handle this issue:

1. **Maintain Internal User Data:**
   This option would involve using {{< glossary term="WebSocket" displayTerm="WebSockets" >}} with the bot to track user role changes in real-time and storing this data in a {{< glossary term="database" >}}. While this would ensure up-to-date information, it introduces significant complexity and resource overhead.

2. **Cache Fetched Data from the Discord API:**
   This simpler solution involves {{< glossary term="cache" displayTerm="caching" >}} user roles from the Discord API where we use the cached data if the API is rate-limited. The trade-off is a delay in real-time data (maximum of 1 minute), but this was acceptable for our use case.

We opted for the caching approach using {{< glossary term="Redis" >}}, as it provides both efficiency and native data expiry.

## The Solution: Fetch with Cache Fallback

We implemented a fetch-with-cache fallback mechanism. Here’s how it works:

### 1. Check for Rate-Limit Key

Before making an API call, we check if we’ve been currently rate-limited by looking for a Redis key of the pattern `discord_roles_<ServerID>_<AccessToken>_retry-after`. This key is created when a previous request was rate-limited.

### 2. Handle Rate-Limited Requests

If this rate-limit key exists, we don’t attempt to make a new API call. Instead, we return the cached data stored in Redis with the key of pattern `discord_roles_<ServerID>_<UserID>`.

### 3. Make API Request

If the rate-limit key isn’t found, we proceed to fetch the user’s roles from the Discord API.

- If the request is successful, we cache the data with a key of the pattern `discord_roles_<ServerID>_<UserID>` and return it.
- If the request receives a rate-limit error, we create the key `discord_roles_<ServerID>_<AccessToken>_retry-after` with an expiry set to the rate-limit reset time (plus 1 second). After this, we return the previously cached data.

{{< figure src="discordRateLimitRedisCacheSolution.svg" data-src-light="discordRateLimitRedisCacheSolution.svg" data-src-dark="discordRateLimitRedisCacheSolution-dark.svg" width="720px" height="240.99px" alt="Solution flowchart diagram" caption="Solution flowchart diagram" loading="lazy" >}}

## What I Learned and Future Considerations

While this solution worked well for our use case, I realized that using Redis opened up more possibilities for handling similar challenges elsewhere in the project. For instance, I later used Redis to solve another issue related to [concurrent refresh attempts of access tokens]( {{% ref "Overcoming-Concurrent-Refresh-Attempts-of-Access-Tokens-(Jwt)" %}} ).

In retrospect, there is another approach we could consider for future versions. **Partial WebSocket Implementation:** Given the requirement for very specific role updates, partial WebSocket integration in the website with Discord Gateway API could help fetch only critical updates in real-time without introducing unnecessary overhead.

## Conclusion

A simple fetch-with-cache fallback system using Redis allowed us to deliver a smooth user experience while adhering to Discord’s API constraints. The combination of simplicity and effectiveness made Redis a good fit for this project.
