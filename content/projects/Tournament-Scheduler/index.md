---
title: 'Tournament Scheduler'
date: 2024-11-20T03:14:55+05:30
author: "Sandesh Shahapur"
draft: false
cover:
    image: "sampleTournamentSchedulerOutput.webp"
    alt: "Screenshot of website with sample input/output"
    hiddenInSingle: true
    relative: true
summary: "A web application to create customizable round-robin sports tournament schedules with user-defined parameters and constraints."
tags: ['sports', 'scheduling', 'algorithm', 'backtracking', 'tournament']
categories: ['Web Development', 'Algorithms']
---

A {{< glossary term="WebApp" >}} to schedule customizable round-robin sports tournaments. It's a tool where users can input the playing teams and customize various parameters and constraints to generate and view [round-robin](https://en.wikipedia.org/wiki/Round-robin_tournament) tournament schedules.
[Check it out!](https://sandeshshahapur.github.io/sportsScheduler/)

## Supported parameters

- number of teams
- number of matches each team plays against each other
- number of matches played on each day
- minimum gap of days (>= 0) between consecutive matches for any team
- minimum gap of matches (>= 0) between consecutive matches for any team
- starting date of tournament
- whether the schedule can allow days without any matches (we might want this to avoid deadlocks and obtain at least one schedule)
- whether schedule can allow consecutive matches involving the same two teams (we might want this to avoid deadlocks and obtain at least one schedule)
- number of permutations of schedules to output

Produces [permutations](https://en.wikipedia.org/wiki/Permutation) of schedules that is relative to each match while accounting for [combinations](https://en.wikipedia.org/wiki/Combination) of team pair ups within an individual match. For instance, it ensures that a match between `Team A` and `Team B` is not considered different from a match between `Team B` and `Team A`.

## Sample

{{< figure src="sampleTournamentSchedulerOutput.webp" alt="Screenshot of website with sample input/output" loading="lazy" >}}

## Motivation

When the IPL season began, my dad challenged me to create an algorithm to generate schedules similar to those of the IPL, with customizable parameters such as the number of teams, matches each team plays against each other, and more.

So, I got to work, using backtracking as the approach of which I had prior familiarity. It took me 2 days to develop and overcome challenges faced.

## Challenges

- **Combination nature**: Initially I was considering the schedules as permutations of matches including the team pair ups within a match. However, I realized that the schedules are actually permutations of combinations of team pair ups within a match. This increased the complexity of the algorithm. For instance, a match between `Team A` and `Team B` is not considered different from a match between `Team B` and `Team A`.

- **Deadlocks**: With some parameter configurations especially when the number of teams is small, it was not possible to produce schedules without leaving days without any matches or having consecutive matches involving the same two teams. I had to add parameters to allow these scenarios and handle them in the algorithm to avoid deadlocks and the algorithm running indefinitely.

- **Time complexity**: The algorithm has a time complexity of `O(n!)` where `n` is the number of teams. This is because the algorithm generates all permutations of schedules and then filters out invalid schedules. This means that the algorithm is not scalable for large number of teams and the systems I tested on had a limit of 8 teams it could handle. However, as my goal was to generate all possible schedules, I was okay with this limitation.

## Tech Stack

- **Frontend**: React, Bootstrap
- **Backend**: Spring Boot
- **Deployment**: GitHub Pages for {{< glossary term="frontend," >}} Render for {{< glossary term="backend" >}} with Docker
