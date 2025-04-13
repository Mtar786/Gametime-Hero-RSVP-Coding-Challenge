# Gametime Hero RSVP Manager

A simple RSVP manager module built in TypeScript, following clean architecture and best practices.

## Features

- Add/update a player's RSVP ("Yes", "No", or "Maybe")
- List confirmed attendees
- Get counts of total, confirmed, declined, and maybe responses

## Structure

- `src/interfaces/` — Type definitions
- `src/services/` — RsvpService class
- `src/utils/` — Console logger (for dependency injection)
- `src/index.ts` — Example usage

## To Run

```bash
npm install
npx tsc
node dist/index.js
