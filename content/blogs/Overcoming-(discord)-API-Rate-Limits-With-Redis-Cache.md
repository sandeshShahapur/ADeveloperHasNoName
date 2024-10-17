---
title: "Overcoming (discord) API Rate Limits With Redis Cache"
date: 2024-10-08
author: "Sandy"
draft: true
tags: ["API", "Redis", "Discord", "Web Development", "Caching", "Rate Limit"]
categories: ["Web Development", "Tutorials"]
summary: "How to handle (Discord) API rate limits using a Redis-based caching mechanism in a web application."
---

## Background

I was tasked with developing a web interface for an e-sports FIFA tournament service (SAFA) that had been operating primarily on {{< glossary "Discord" >}} through a Discord Bot. They wanted to extend their services to a website, and I was responsible for making it happen.

After a new user joins their Discord server, before they could interact further (e.g., searching/joining teams), they were required to update their profile using a form. After which, they were given the role "updated-profile" and "free-agent" (not present in any team). A player, if present in a team, has the role "player".

## The Problem: {{< glossary "API" >}} {{< glossary "Rate-Limit" "Rate-Limits">}}

Whenever a user registers or logs into the website using Discord [OAuth]( {{< ref "What_Is_OAuth_(2.0)_Definition,_Use_Cases,_and_How_it_Works" >}} ), the dashboard view presented to them is based on their roles within the Discord server. The roles dictate what actions the user can take:

1. Is the user part of the Discord server? (If not, prompt them to join)
2. Has the user updated their profile? (If not, show the form)
3. Is the user a "free-agent"? (If yes, provide options to join/create a team)
4. Is the user a "team manager"? (If yes, provide team management options)

These role details are fetched from the Discord API. However, the API has strict rate limits: 5 requests per minute, with a soft reset allowing 1 request per minute after. The rate limit applies to a specific Access Token for a Discord server.

Since user roles can change based on interactions through their existing Discord Bot (e.g., joining a team), we needed to re-fetch roles each time the browser tab was re-focused or reloaded. In a [React]( {{< ref "" >}} ) development environment with StrictMode enabled, each component renders twice, which doubled the number of API requests, often resulting in the API being rate-limited.

## The Solution Options

There were two main approaches to handle this issue:

1. **Build a Discord Bot and Maintain Internal User Data:**
   This option would involve using WebSockets to track user role changes in real-time and storing this data in a [database]( {{< ref "" >}} ). While this would ensure up-to-date information, it introduces significant complexity and resource overhead.

2. **Cache Fetched Data from the Discord API:**
   This simpler solution involves [caching]( {{< ref "" >}} ) user roles from the Discord API in a memory store (like [Redis]( {{< ref "" >}} )) to avoid hitting the rate limit. The trade-off is a delay in real-time data (maximum of 1 minute), but this was acceptable for our use case.

We opted for the caching approach using Redis, as it provides both time efficiency and native data expiry.

## The Solution: Fetch with Cache Fallback

We implemented a fetch-with-cache fallback mechanism. Here’s how it works:

### 1. Check for Rate-Limit Key:

Before making a request, we check if we’ve been rate-limited by looking for a Redis key of the pattern `discord_roles_<ServerID>_<AccessToken>_retry-after`. This key is created when a previous request was rate-limited.

### 2. Handle Rate-Limited Requests:

If this key exists, we don’t attempt to make a new API call. Instead, we return the cached data stored in Redis with the key of pattern `discord_roles_<ServerID>_<UserID>`, ensuring the user doesn’t see outdated information.

### 3. Make API Request:

If the rate-limit key isn’t found, we proceed to fetch the user’s roles from the Discord API.

- If the request is successful, we cache the returned data with a key of the pattern `discord_roles_<ServerID>_<UserID>` and return it.
- If the request hits a rate-limit error, we create the key `discord_roles_<ServerID>_<AccessToken>_retry-after` with an expiry set to the rate-limit reset time (plus 1 second). After this, we return the previously cached data.

This approach minimized unnecessary API calls while ensuring that users received role-based data quickly, even during rate-limited periods.

## What I Learned and Future Considerations

While this solution worked well for our use case, I realized that using Redis opened up more possibilities for handling similar challenges elsewhere in the project. For instance, I later used Redis to solve another issue related to [concurrent refresh attempts of access tokens]( {{< ref "" >}} ).

### In retrospect, there is an improvement we could consider for future versions:

**Partial WebSocket Implementation:**
Given the requirement for very specific role updates, partial WebSocket integration could help fetch only critical updates in real-time without introducing unnecessary overhead.

## Conclusion

A simple fetch-with-cache fallback system using Redis allowed us to deliver a smooth user experience while adhering to Discord’s API constraints. The combination of simplicity and effectiveness made Redis a good fit for this project.
