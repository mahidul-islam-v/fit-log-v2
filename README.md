# FitLog

FitLog is a workout library and planning website. Browse exercises, view their
details, and organize workouts you want to complete or save for later.

## Features

- Browse a library of workouts.
- View workout details, including target muscle groups, equipment, difficulty,
  sets, reps, duration, calories, rating, and instructions.
- Add workouts to a daily plan or save them for later.
- View and manage planned or saved workouts from **My Plan**.
- Mark planned workouts as done or remove them from your plan.
- Navigate between the workout library, workout details, and your plan.

Workout information is retrieved from the FitLog API. Plan and saved-workout
data are held in app state and are not currently persisted across page reloads.

## Built with

- Next.js and React
- TypeScript
- Tailwind CSS and daisyUI

## Run locally

Install dependencies and start the development server:

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

## Deployment

Deploy this Next.js project to a platform that supports Next.js, such as Vercel.
The app uses root-relative internal links, so navigation works on the deployed
site's domain.
