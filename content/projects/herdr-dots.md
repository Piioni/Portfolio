---
title: Herdr Dots
slug: herdr-dots
description: Mission control for AI agent harnesses, built on Herdr with custom mods for pull requests, Linear tasks, worktrees and background tasks.
technologies:
  - id: javascript
    label: JavaScript
  - id: ai-agents
    label: Agent workflows
  - id: git
    label: Git
  - id: github
    label: GitHub
githubUrl: https://github.com/Piioni/herdr-dots
featured: true
order: 2
---

My setup for running several AI agent harnesses in parallel. Herdr is a terminal multiplexer for agents, and its interface is made of files, so I built the layout and the mods that turn it into a control panel.

What it does:

- Custom mods for GitHub pull requests, Linear tickets, worktree management, and repo scripts that run as background tasks launched as subagents
- Each agent works in its own worktree, with everyone's state visible in one place and alerts when one needs attention
- Each mod ships with its own README and tests
