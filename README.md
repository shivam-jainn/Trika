# Trika

![Trika Banner](./assets/readme.png)

> An AI-powered communication and engagement platform designed to help organizations connect with millions of users through targeted campaigns, intelligent analytics, and automated communication workflows.

## Overview

Trika is a unified communications platform that combines campaign management, bulk messaging, email intelligence, analytics, and AI-powered data access into a single system.

Built with an event-driven architecture, Trika enables organizations to reach large user bases efficiently while providing actionable insights into user engagement and campaign performance.

The platform was developed as part of **MeitY × DMP India**, supporting large-scale outreach and feedback collection initiatives.

---

## Core Features

### 🤖 AI-Powered Natural Language Analytics

Query organizational data using natural language.

Trika leverages Large Language Models (LLMs) and Retrieval-Augmented Generation (RAG) to translate plain-English questions into executable SQL queries across multiple databases.

#### Example

```sql
Show users who enrolled in a course but did not complete it within 30 days.
```

Features:

* Natural Language → SQL generation
* Multi-database support
* Schema-aware query generation using RAG
* Secure query validation and execution
* Interactive analytics and reporting

---

### 📢 Campaign Management

Create, manage, and monitor communication campaigns at scale.

Features:

* Audience segmentation
* Campaign scheduling
* Bulk messaging
* Delivery tracking
* Engagement analytics
* User feedback collection

---

### ⚡ Event-Driven Processing

Trika uses Redis-backed queues to process high-volume workloads asynchronously.

Supported workloads include:

* Campaign dispatching
* Tracking event ingestion
* Analytics aggregation
* Email synchronization
* Webhook processing

This architecture ensures responsiveness while handling millions of events reliably.

---

### 📈 Engagement Tracking & Analytics

Gain visibility into campaign performance through real-time event tracking.

Features:

* Open tracking
* Click tracking
* User activity monitoring
* Campaign performance analytics
* Real-time dashboards

Events are collected through webhooks and processed asynchronously for scalability.

---

### 📬 Email Intelligence

Transform traditional email workflows into a modern conversational experience.

Features:

* IMAP-based email synchronization
* Automatic email ingestion
* Conversation threading
* Chat-style email interface
* Background processing pipelines

Emails are continuously fetched, parsed, and indexed for efficient retrieval and interaction.

---

### 🎨 Visual Email Builder

Design professional email templates without writing code.

Features:

* Drag-and-drop editor
* Responsive email templates
* Reusable content blocks
* Asset management
* Template versioning

Assets are stored in AWS S3, providing scalable and reliable storage.

---

## System Architecture

```text
┌───────────────────────────────────────────┐
│                 Trika                      │
└─────────────────────┬─────────────────────┘
                      │
                      ▼

         ┌─────────────────────────┐
         │      API Gateway        │
         └───────────┬─────────────┘
                     │

     ┌───────────────┼────────────────┐
     ▼               ▼                ▼

┌─────────┐   ┌─────────────┐   ┌──────────┐
│ AI/RAG  │   │ Campaigns   │   │ Email    │
│ Engine  │   │ Service     │   │ Service  │
└────┬────┘   └──────┬──────┘   └────┬─────┘
     │               │               │
     └───────────────┼───────────────┘
                     ▼

         ┌─────────────────────────┐
         │      Redis Queue         │
         └───────────┬─────────────┘
                     ▼

         ┌─────────────────────────┐
         │    Worker Processes      │
         └───────────┬─────────────┘

         ┌───────────┼─────────────┐
         ▼                         ▼

 ┌─────────────────┐     ┌─────────────────┐
 │ Tracking Engine │     │ Analytics Engine│
 └─────────────────┘     └─────────────────┘
```

---

## Technology Stack

### Frontend

* Next.js
* React
* TypeScript

### Backend

* Node.js
* Express.js

### AI & Data

* Large Language Models (LLMs)
* Retrieval-Augmented Generation (RAG)

### Infrastructure

* Redis
* AWS S3
* Webhooks

### Integrations

* IMAP
* SMTP
* SQL Databases

---

## Key Highlights

* AI-powered Natural Language → SQL querying
* Multi-database analytics support
* Redis-based asynchronous processing
* Large-scale campaign management
* Email-to-chat transformation pipeline
* Webhook-driven engagement tracking
* Real-time analytics and reporting
* Extensible service-oriented architecture

---

## Impact

Trika was built to simplify large-scale communication and user engagement for organizations managing millions of users.

By combining AI-driven analytics, event-driven infrastructure, and communication tooling, Trika enables teams to:

* Reach users effectively
* Measure engagement in real time
* Collect actionable feedback
* Automate communication workflows
* Make data-driven decisions at scale

---

## License

MIT License

```
Copyright (c) Shivam Jain
```
