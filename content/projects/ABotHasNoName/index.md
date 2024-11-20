---
title: 'ABotHasNoName'
date: 2024-11-20T04:44:01+05:30
author: "Sandesh Shahapur"
draft: false
cover:
    image: "ABotHasNoNameDbERD.svg"
    alt: "Database ERD for ABotHasNoName"
    hiddenInSingle: true
    relative: true
description: "ABotHasNoName is a multi-purpose Discord bot that provides advanced server management features such as role statistics, activity tracking, bump reminders, and more."
summary: "A comprehensive Discord bot designed to enhance server management and engagement with unique features like role statistics, activity tracking, and invite monitoring."
tags: ['Discord Bot', 'Python', 'PostgreSQL']
categories: ['Software Development', 'Discord Bots']
---

A Discord bot that serves as a general-purpose bot with various features aimed enhancing discord server management and engagement.

## Features

1. **Role Stats:** Provides graphical statistics for user-defined role categories (e.g. age, region, etc.).
2. **User activity:** Tracks messages sent by users and displays activity statistics.
3. **Bump Reminder:** Reminds users to bump the server, tracks bump counts, and supports leaderboard.
4. **Invite Tracking:** Tracks invites to the server and supports leaderboard.
5. **Server Lockdown and Backup Permissions:** Allows server lockdown for backing up permissions.
6. **Supports Custom Prefixes**

## Database ERD

{{< raw-html `
    <div style="width: 100%; height: 80vh; box-sizing: border-box; position: relative;">
        <iframe allowfullscreen frameborder="0" style="width: 100%; height: 75vh; box-sizing: border-box;" src="https://lucid.app/documents/embedded/6651024a-15fe-4167-9e2a-3166c7fe1683" id="YiQsFROheJwp">
        </iframe>
    </div>
`>}}

## Motivation

In my discord server, many new comers after interacting with few people would wrongly assume the demographics of the server. I wanted to be able to view distribution of users based on roles like age, region, etc to be able to clear this up when anyone would mention it. However, I couldn't find any bots that provided this feature. So, I decided to do it myself. Later, I noticed that there were other problems like bump reminders, invite tracking, etc. that either didn't exist, were not customizable or were a paid feature in other bots. So, I developed my bot further to include these features.

## Challenges

- **Database Design and Queries**: I required a database to support the features I wanted to implement. However, I had no prior experience with databases. I had to learn about databases, design the database schema with normalization and relationships, and write queries to support the features I wanted to implement.
- **Ethical Considerations**: When I was reaching out for help on my bot, I was told that some of the features while complied with Discord ToS, were concerned with user privacy and ethical considerations. I thought about making the bot transparent about what data it collects and how it uses it, like having the new users agree to a privacy policy to stay in the server. But it felt too much work and I left it there to be implemented later.

## Tech Stack

- PostgreSQL
- Python, Discord.py
