# Notes MVP

A minimal React + TypeScript notes app that stores notes **in memory only** for the current session.

## Features
- Add a note via a text input and **Add** button.
- Notes are kept in an in-app store (React Context + reducer).
- List shows each note using the first **32** characters as its title.
- Empty/whitespace-only input is ignored.
- After adding, the input is cleared and focused for fast entry.

## Getting started
```bash
# from the project root (or ./notes-app if created there)
npm install
npm run dev
```
