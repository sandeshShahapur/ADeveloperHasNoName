---
title: 'SAFA'
date: 2024-11-20T11:35:30+05:30
author: "Sandesh Shahapur"
draft: false
summary: "SAFA is a web platform for FIFA eSports tournaments, transitioning from a Discord bot to a full-fledged web interface with features like team management, stats tracking, and user authentication through Discord."
tags: ['eSports', 'FIFA', 'web interface', 'Discord integration', 'team management', 'Redis', 'OAuth2']
categories: ['Web Development', 'eSports', 'Full-stack']
---

SAFA is a {{< glossary term="web" >}} {{< glossary term="UI" displayTerm="interface" >}} for an eSports FIFA tournament service that was operating in {{< glossary term="Discord" >}} through a Discord bot. The goal was to expand the service to the web. The service hosts FIFA tournaments where users can register as players, create teams, and participate in tournaments. It is integrated with Discord for user {{< glossary term="authentication" >}} and provides features such as team creation and joining, player/team/league profiles with detailed stats and role-based views through public searching, and team management for managers.

## Features

1. **User Authentication**: Users can login with their Discord account to access the service.
2. **Team Creation and Joining**: Users can create teams and join teams.
3. **Player/Team/League Profiles**: Detailed profiles with stats and role-based views.
4. **Team Management**: Managers can manage teams and players.
5. **Search**: Public searching for players, teams, and leagues.

[Gallery](https://imgur.com/a/safa-JpSDADI)

## Implementation

- **Authentication**: Discord {{< glossary term="OAuth" >}} for user authentication using {{< glossary term="JWT" >}} and {{< glossary term="cookie" displayTerm="cookies" >}}.
- **Backend**: Three layered architecture (controller, service, DAO) with Express and Sequelize. {{< glossary term="Redis" >}} for {{< glossary term="cache" displayTerm="caching" >}} and session management.

## Challenges

- **Rate Limiting**: Discord API has strict {{< glossary term="rate-limit" displayTerm="rate-limits" >}} for some endpoints. I [used fetching with cache fallback]( {{% ref "Overcoming-(discord)-API-Rate-Limits-With-Redis-Cache" %}} ) using Redis to handle this.
- **Concurrent Refresh Requests**: In session management, multiple {{< glossary term="request" displayTerm="requests" >}} to refresh the {{< glossary term="access-token" >}} was causing issues. I handled this [by using Redis as a mutex lock manager]( {{% ref "Overcoming-Concurrent-Refresh-Attempts-of-Access-Tokens-(Jwt)" %}} ).

## Mistakes and Learnings

- **Development environment flexibility**: When testing features, at {{< glossary term="frontend" >}} I often needed to change my configurations like player ID, team ID, isManager, etc. which I initially hardcoded in the frontend code instead of conditionally using environment variables based on the environment (development/production). This made it difficult to test and debug.
- **Backend software architecture**: I initially started developing the {{< glossary term="backend" >}} with a monolithic architecture which made it difficult to extend and maintain. I later refactored it to a three-layered architecture which made it easier to manage and extend.
- **Testing**: I didn't write tests for the frontend and backend. This made it difficult to refactor and add new features which taught me the importance of testing.

## Tech Stack

- **Frontend**: React, Tailwind CSS
- **Backend**: Node.js, Express, Redis, Sequelize
