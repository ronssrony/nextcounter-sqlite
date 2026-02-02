# Nuxt 4 Counter App

A simple counter application built with **Nuxt 4**, **Tailwind CSS**, and **SQLite** (without any third-party ORM).

## Features

- ✨ Nuxt 4 with Vue 3
- 🎨 Tailwind CSS for styling
- 🗄️ SQLite database (using better-sqlite3)
- 🚀 No ORM - Direct SQL queries
- 💾 Persistent counter storage
- 📱 Responsive design

## Setup

Install dependencies:

```bash
npm install
```

## Development

Start the development server:

```bash
npm run dev
```

The app will be available at http://localhost:3000/

## How It Works

- The counter value is stored in a SQLite database (`data/counter.db`)
- Click the "Increment Counter" button to increase the count
- The count persists across server restarts
- API endpoints:
  - `GET /api/count` - Get current count
  - `POST /api/count` - Increment and get new count

## Production

Build for production:

```bash
npm run build
```

Start production server:

```bash
npm run start
```
