---
title: Pegasus Medical Supply Tracker
slug: pegasus-medical-supply-tracker
description: Hospital stock management for warehouses and first-aid kits, with movements, restock requests and role-based access per location.
technologies:
  - id: php
    label: PHP
  - id: mysql
    label: MySQL
  - id: docker
    label: Docker
  - id: javascript
    label: JavaScript
githubUrl: https://github.com/Piioni/pegasus-medical-stock
featured: true
order: 3
---

Web app built during an internship to centralize the tracking of medical supplies across several hospitals. It models the hospital hierarchy of hospitals, floors, warehouses and first-aid kits, and records every movement between them.

What it does:

- Stock per warehouse and per kit, with transfers, entries and returns that go through pending, completed and cancelled states
- Restock requests from a warehouse to a kit, confirmed or cancelled by a manager
- Four roles, where hospital and floor managers only see the locations assigned to them
- Plain PHP 8.2 with an MVC architecture and service and repository layers, running in Docker with MySQL
