
# FieldLog 🎙️📊

> **"Making Research Data Collection Accessible for Everyone."**

FieldLog is a modern, responsive, glassmorphic web application built for researchers, university students, lecturers, NGOs, and field organizations. It streamlines the entire research lifecycle—from creating research projects and building rich questionnaires to collecting text/voice field responses, visualizing analytics, and sharing executive summary reports with stakeholders.

---

## ✨ Features

- 🎨 **Glassmorphism UI/UX**: Sleek, modern interface inspired by Linear, Notion, Vercel, and Stripe with frosted cards, soft blurs, and full Light/Dark mode support.
- 📋 **Drag-and-Drop Questionnaire Builder**: Easily build forms with short text, paragraph, multiple choice, numeric, yes/no, and voice recording question types.
- 🎤 **Voice & Text Field Collection**: Field-optimized interface allowing participants or researchers to record raw audio clips or submit text entries seamlessly.
- 📈 **Real-Time Analytics Dashboard**: Clean charts and performance metrics including total responses, completion rates, and project distributions.
- 📤 **Data Export & Summary Sharing**: Export collected raw datasets or generate public, shareable executive summary reports (with integrated direct audio playback).

---

## 🛠️ Tech Stack

- **Framework**: [Next.js 14+ (App Router)](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/) with custom backdrop blur utilities
- **Icons**: [Lucide React](https://lucide.dev/)
- **Database ORM**: [Prisma](https://www.prisma.io/) with PostgreSQL
- **Audio Storage**: Amazon S3 / Cloudflare R2
- **Language**: TypeScript

---

## 📂 Project Directory Structure

```text
fieldlog/
├── public/                  # Static assets and favicon
├── prisma/                  # Prisma schema & migrations
│   └── schema.prisma
├── src/
│   ├── app/                 # Next.js App Router (Pages & API)
│   │   ├── (auth)/          # Authentication pages (Login, Register, Reset)
│   │   ├── (dashboard)/     # Authenticated app shell & routes
│   │   │   ├── dashboard/   # Researcher overview & statistics
│   │   │   ├── projects/    # Project list & creation forms
│   │   │   ├── builder/     # Form & questionnaire builder
│   │   │   ├── responses/   # Response tables & modal details
│   │   │   ├── analytics/   # Analytics charts & performance
│   │   │   ├── reports/     # Report summary generator
│   │   │   ├── export/      # CSV / Excel export screen
│   │   │   ├── profile/     # User profile settings
│   │   │   └── settings/    # Platform configuration
│   │   ├── collect/         # Public field collection mode ([projectId])
│   │   ├── share/           # Public shared summary reports ([accessCode])
│   │   ├── api/             # Backend API Route Handlers
│   │   ├── globals.css      # Glassmorphism utilities & global styles
│   │   ├── layout.tsx       # App root layout & providers
│   │   └── page.tsx         # Product landing page
│   │
│   ├── components/          # Reusable design system
│   │   ├── ui/              # Base UI (GlassCard, Button, Table, Modal)
│   │   ├── navigation/      # Sidebar & Topbar components
│   │   ├── builder/         # Form builder question canvas elements
│   │   └── reports/         # Executive report widgets
│   │
│   ├── hooks/               # Custom React hooks (Audio recorder, theme)
│   ├── lib/                 # Utility functions, Prisma client, S3 client
│   └── types/               # TypeScript type declarations
│
├── tailwind.config.ts       # Glass effects, gradients & color palette
├── tsconfig.json            # TypeScript configuration
└── package.json
```
