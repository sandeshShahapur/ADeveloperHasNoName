---
title: 'Ball Box'
date: 2025-01-26T23:22:53+05:30
author: "Sandesh Shahapur"
draft: true
summary: "Explore Ball Box, a minimal-dependency 2D interactive game that introduces players to survival mechanics while building the fundamentals of game development using TypeScript and the Canvas API."
tags: ["game development", "typescript", "canvas api", "2d games", "interactive"]
categories: ["Game Development", "Projects"]
---

Ball Box is an interactive game where you control a ball, inside a box, duh. The objective is to avoid touching the box boundary and evade weapon projections to survive.

Live Demo: [Ball Box](https://sandeshshahapur.github.io/ball-box/)

## Features

- **User Controls:**
  - Arrow keys or 'wsad' keys for desktop.
  - JoyStick controls for mobile or tablet devices.
- **Gameplay Mechanics:**
  - Avoid touching the box boundaries.
  - Evade weapon projections (shaped as characters) that increase ball size upon collision.
  - Smaller projections cause larger size increments.
- **Difficulty Adjustment:**
  - Adjustable difficulty levels via a slider.

## Motivation

As far as my memory goes, I have always been into games. I remember playing the default games on my dad's Windows XP PC. However, I never got into game development until now.

Lately, I haven't been playing much due to having a potato laptop with a dead GPU and not being into any mobile games and since I'm doing Comp Sci and have picked up some programming skills, I thought why not try game development.

I started thinking about what game I could make. I don't think of myself as a creative person, but I kept returning to the idea of simple 2D box games. Then I thought of Ball Box which seemed like a good place to start. I started working on it and here we are.

## Challenges Faced

Being my first game, I deliberately avoided using game engines or high-level tools that would abstract away the underlying mechanics. I wanted to understand the basics of game development and how things work under the hood. This made me to use TypeScript and the HTML5 Canvas API to build the game from scratch.

This meant I had to figure out all the required mechanics:

- Game loop
- Collision detection (Canvas API for bounding box of text is not friendly)
- Joystick controls for mobile devices
- And more...

## Future Plans

I had a lot of fun building Ball Box and got to learn a lot in the process. While I don't plan on extending Ball Box much, I plan to step up by working on more complex games and sticking to minimal-dependency development.

The above has to wait because I only realize now while writing this, that using Canvas API abstracts away a lot of the underlying mechanics and is not true to the minimal-dependency approach I wanted to take. So, I have to backtrack and start lower like with rendering.

## Tech Stack

- **Languages:**
  - TypeScript/HTML/CSS

- **Tools:**
  - Webpack
