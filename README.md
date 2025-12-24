# Kasparro – Frontend Engineering Assignment (V1)

This repository contains my submission for the **Kasparro Frontend Engineering Assignment**.

The objective of this project is to represent a **complex, AI-native SEO & Brand Intelligence product** through a clear, scalable frontend system using mocked data.

The focus is on **frontend system design, component architecture, data modeling, and UX clarity**, rather than backend integration.

---

## 🧠 Product Context

Kasparro is an **AI-native SEO & Brand Intelligence platform** designed for the AI-first search era (ChatGPT, Gemini, Perplexity, etc.).

Instead of optimizing only for traditional search rankings, Kasparro analyzes how AI systems:
- Understand brand entities
- Attribute trust and authority
- Surface brands in AI-generated answers

This assignment focuses on how a frontend system can represent complex AI concepts
clearly through structure, data modeling, and UX — not visual polish alone.

## 🎯 Product Surfaces Implemented

The frontend represents **two main product surfaces**:

### 1. Public Website
- Marketing and product narrative
- Explains what Kasparro does and how it works

### 2. Product Dashboard (Mocked)
- Authenticated product shell (assumed logged-in user)
- Data-driven dashboard and audit views

---

## 🗂 Folder Structure

app/
├── app/
│   ├── dashboard/        # High-level brand snapshot
│   ├── audit/            # Core audit modules view
│   ├── architecture/     # System architecture representation
│
├── components/           # Reusable UI components
├── data/                 # Mocked JSON data
├── globals.css           # Global styles
└── layout.tsx            # Root layout

---

## 🧩 Routes Implemented

### Public Pages
- `/` – Home
- `/platform` – Product pipeline
- `/about` – Mission & philosophy

### Product Pages
- `/app/dashboard` – Brand snapshot
- `/app/audit` – Audit modules
- `/app/architecture` – System architecture

---

## 🔍 Architecture & Design Decisions

- **Next.js App Router** for clean route separation  
- **JSON-driven UI** (no hardcoded JSX)  
- **Modular audit system** (system thinking over pages)  
- **Simple React state** for clarity and predictability  

---

## 🎨 UX & UI Considerations

- Dark-first design with light/dark mode
- Skeleton loading states
- Subtle hover interactions
- Fully responsive layout

---

## ⚙️ Tech Stack

- Next.js (App Router)
- TypeScript
- Tailwind CSS
- Mocked JSON data

---

## 🧪 Assumptions & Tradeoffs
- Authentication is mocked
- No backend integration
- Charts avoided to maintain clarity

---

## 🔮 Future Improvements
- Real authentication & role-based access
- API-driven data layer
- Visualization layer for trend analysis
- Brand comparison across competitors

---


## 👤 Author
**Ananya GN**  
Frontend Engineering Assignment – Kasparro

## 🚀 Live Demo

👉 https://kasparro-frontend-ananya-gn.vercel.app/dashboard


## 🚀 Running the Project Locally

```bash
npm install
npm run dev
