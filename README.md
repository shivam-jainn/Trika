# Meity-iGOT-KarmaYogi
#Communications Console

## About
SPV and MDO be able to reach out to their 30M userbase for targeted marketing and feedback mechanism.

## Feature Value
SPV/MDO will be able to connect with users, understand their issues, nudge them to enroll, complete course consumption. With the data insights, SPV/MDO be able to take decisions how to promote learning on iGOT.

## Feature Vision

- SPV/MDO be able to create user buckets based on certain criteria. E.g. users who have enrolled in at least 1 course etc.
- SPV/MDO be able to query and create user buckets by querying in natural language (NLP and LLM). e.g., A SPV may say, “Create a list of users who have been active for at least 5 hours in past 24 hours”.
- Upload SMS, WhatsApp Messages formats and email pre-defined templates.
- SPV/MDO be able to enable feedback mechanism and enabling analytics and AI driven insights from the responses.

## Goals & Mid-Point Milestone
- Develop a Communications Console integrated with iGOT Platform, enabling SPVs and MDOs to engage with a user base of 30 million through SMS, WhatsApp, and Email channels.
- Facilitate targeted marketing campaigns and feedback mechanisms to enhance user enrollment and course completion rates.
- Provide data insights to SPVs and MDOs for informed decision-making on promoting learning initiatives on iGOT.

## Setup/Installation

### Quick start (local, safe)

1. Install dependencies (use pnpm or bun):
   - pnpm: `pnpm install` in each project folder (preferred)
   - bun: `bun install` is supported for local work but CI uses pnpm

2. Start everything (apps only):
   - `docker compose up --build`

3. Start with databases (optional):
   - `docker compose --profile db up --build` (this will start Postgres/Mongo/Redis)

4. Frontend builds:
   - `buildmail`: `pnpm run build` (output `dist`)
   - `karmayogi`: `pnpm run build` (Next.js)

---

### Dependabot

Dependabot is enabled and will open weekly patch/minor PRs for the project. CI checks run on PRs and will surface issues before merge.

### Vercel

- `karmayogi` (Next.js) should be configured in Vercel with Node 20 and build command `pnpm run build-vercel`.
- `buildmail` (Vite) should use build command `pnpm run build` with output directory `dist` (see `buildmail/vercel.json`).

### Notes

- This update only contains non-breaking changes: Dependabot configuration, Dockerfile hardening (Node 20, non-root user, HEALTHCHECK), `docker-compose.yml`, `vercel.json` files and README improvements.
- For package updates we enable Dependabot to create patch/minor update PRs automatically; no direct dependency bumps were applied in this commit.



## Expected Outcome
- Improved user engagement and communication channels between SPVs, MDOs, and the iGOT user base.
- Increased user enrollment and course consumption through targeted marketing campaigns and personalized communication.
- Enhanced data analytics capabilities to derive actionable insights from user feedback and interactions.

## Acceptance Criteria
- Communications Console successfully integrated with iGOT Platform, allowing SPVs and MDOs to access SMS, WhatsApp, and Email channels.
- Ability to create user buckets based on specific criteria such as course enrollment status, activity level, etc.
- Natural language query capability implemented using NLP and LLM for creating user buckets.
- Upload functionality for SMS, WhatsApp messages formats, and email pre-defined templates.
- Feedback mechanism enabled with analytics and AI-driven insights derived from user responses.
- User feedback indicating satisfaction with communication effectiveness and responsiveness.

## Implementation Details
  


## Mockups/Wireframes
- 

## Product Name
Karmayogi

## Organisation Name
MeitY

## Domain
⁠Learning & Development

## Tech Skills Needed
Other

## Mentor(s)
@mbcse

## Category
Fullstack