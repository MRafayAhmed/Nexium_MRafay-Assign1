# Nexium_MRafay-Assign1

# 🚀 Assignment 1: Motivational Quote Generator Web App

A simple and elegant motivational quote generator built using **Next.js**, **Tailwind CSS**, and **ShadCN UI components**. Users can enter a topic (optional) and display 3 random motivational quotes from a local list.

---

##  Tech Stack

- **Framework:** Next.js (App Router)
- **Styling:** Tailwind CSS
- **UI Components:** ShadCN UI (Input, Button, Card)
- **Language:** TypeScript
- **State Management:** useState hook

---

##  Features

- Input form to enter a topic (just for UX)
- Button to fetch 3 random motivational quotes
- Quotes displayed using clean Card layout
- Responsive design with modern UI

---

##  Folder Structure

```

assignment-1/
│
├── app/
│   └── page.tsx          # Main page logic and UI
│
├── components/
│   └── ui/               # ShadCN-based components
│       ├── input.tsx
│       ├── button.tsx
│       └── card.tsx
│
├── data/
│   └── quotes.js         # Local array of motivational quotes
│
├── lib/
│   └── utils.ts          # Utility for class name management
│
├── styles/
│   └── globals.css       # Tailwind base styles
│
├── tsconfig.json
├── tailwind.config.js
├── postcss.config.js
└── package.json

````

---

##  How to Run Locally

> You **do NOT** need GitHub to run locally.

### 1.  Open in VS Code

- Extract the project zip
- Open the `assignment-1` folder in VS Code

### 2.  Install Dependencies

Open terminal and run:

```bash
npm install
````

### 3.  Start Development Server

```bash
npm run dev
```

Visit: [http://localhost:3000](http://localhost:3000)

---

##  Optional: Deploy to Vercel

1. Go to [https://vercel.com](https://vercel.com)
2. Sign in with GitHub
3. Click **"New Project"**
4. Import your GitHub repo (if you have one) or upload manually
5. Click **"Deploy"**

---

##  Example Quotes Displayed

* "Believe in yourself and all that you are."
* "Push yourself, because no one else is going to do it for you."
* "Success is not final, failure is not fatal."

Quotes are randomly selected from a local list on each click.

---

##  Credits

* Built by: \[M Rafay Ahmed]
* UI: [ShadCN UI](https://ui.shadcn.com/)
* Styling: [Tailwind CSS](https://tailwindcss.com/)
* Framework: [Next.js](https://nextjs.org/)

---

##  License

This project is for educational/demo purposes only.


