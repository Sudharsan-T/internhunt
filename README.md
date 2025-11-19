# 🌐 **InternHunt — Smarter Internship Discovery Platform**

A modern, responsive internship discovery platform built using **React**, **Vite**, and **Tailwind CSS**. InternHunt provides a clean, neon-accent UI with multiple pages, smooth animations, and a scalable frontend architecture suitable for real-world full-stack expansion.

---

## 📸 **Screenshots**
<img width="1153" height="843" alt="{6CF20980-3FFC-42FD-A2FD-DF36268872A6}" src="https://github.com/user-attachments/assets/0895a752-b137-42f7-a89a-8e840a0d594c" />

**Dashboard**
<img width="1117" height="863" alt="{4E33EC14-EBE1-4FAC-A65C-01E037D44C67}" src="https://github.com/user-attachments/assets/70282658-d3a2-4553-91ab-05046d2a8231" />


**Internship Details**
<img width="1126" height="878" alt="{713041BA-3253-4EE1-841D-8EA2E31DE9C7}" src="https://github.com/user-attachments/assets/4c7c33aa-5e4f-4a8e-aa18-e39e7ef71192" />


---

# 🧾 **Table of Contents**

* Overview
* Features
* Tech Stack
* Folder Structure
* Architecture
* Local Setup
* Build & Deploy
* Future Enhancements
* Author
* License

---

# 🧩 **Overview**

InternHunt is designed for students and professionals looking for internships in a clean, modern UI. It features:

* Multi-page navigation
* Internship listing & detail pages
* Responsive layout
* Neon-black aesthetic
* Reusable component architecture
* Configurable constants for job data
* GitHub-linked open-source buttons

This project is ideal as part of a **full-stack portfolio**, with plans for backend expansion using Node.js, MongoDB, and JWT authentication.

---

# 🌟 **Features**

### 🎨 Modern UI/UX

* Green-neon glow theme
* Smooth animations using Framer Motion
* Clean typography (Instrument Serif + Inter)

### 📱 Fully Responsive

Works on all screen sizes using Tailwind’s responsive classes.

### 🔀 Multi-Page Routing

Powered by **React Router**:

* `/` — Landing page
* `/features` — Product features
* `/pricing` — Plans page
* `/process` — How it works
* `/dashboard` — User overview
* `/details/:id` — Internship details

### 🧱 Component-Driven

Reusable components such as:

* Navbar
* Buttons
* Cards
* Sections
* Icons

### 🗂 Configurable Mock Data

Internal job listings stored in `/constants` for easy API replacement later.

---

# 🛠️ **Tech Stack**

| Layer        | Technology       |
| ------------ | ---------------- |
| UI Framework | React.js         |
| Build Tool   | Vite             |
| Styling      | Tailwind CSS     |
| Routing      | React Router     |
| Icons        | Lucide React     |
| Animations   | Framer Motion    |
| Language     | JavaScript / JSX |

---

# 📂 **Folder Structure**

```
internhunt/
├── public/
│   └── assets/            
│
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   └── ui/
│   │       └── Button.jsx
│
│   ├── pages/
│   │   ├── Landing.jsx
│   │   ├── Features.jsx
│   │   ├── Pricing.jsx
│   │   ├── Process.jsx
│   │   ├── DashboardPage.jsx
│   │   └── DetailsPage.jsx
│
│   ├── constants/
│   │   └── index.js       
│
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
│
├── package.json
├── tailwind.config.js
├── postcss.config.js
└── README.md
```

---

# 🧱 **Frontend Architecture**

### 1. **Component Layer**

Located in `src/components/` and contains reusable UI components.

### 2. **Pages Layer**

Each major route corresponds to a page under `src/pages/`.

### 3. **Data Layer**

Mock data lives under `src/constants/index.js` for easy API replacement.

### 4. **Router Layer**

Handled inside `App.jsx` using React Router v6.

### 5. **Styles**

Tailwind config + global CSS live in:

* `tailwind.config.js`
* `index.css`

---

# 🧪 **Local Setup**

### 1. Clone the repository

```bash
git clone https://github.com/Sudharsan-T/internhunt.git
```

### 2. Navigate into the project

```bash
cd internhunt
```

### 3. Install dependencies

```bash
npm install
```

### 4. Run the development server

```bash
npm run dev
```

App starts at: `http://localhost:3000/`

---

# 📦 **Build & Deploy**

### Create production build

```bash
npm run build
```

### Deployment Options

* Netlify (recommended)
* Vercel
* Render Static Hosting

Upload the `/dist` folder to deploy.

---

# 🔮 **Future Enhancements (Backend Roadmap)**

### 🟢 Phase 1 — Authentication

* JWT auth
* Protected routes
* Login/Signup

### 🟡 Phase 2 — Internship API

* CRUD routes
* Search & filters
* Pagination

### 🟠 Phase 3 — User Dashboard

* Saved jobs
* Application tracking

### 🔵 Phase 4 — AI Tools

* Cover letter generator
* Resume analyzer
* Skill suggestions

### 🟣 Phase 5 — Admin Panel

* Manage internships
* Dashboard analytics

---

# 👨‍💻 **Author**

**Sudharsan T**
Full Stack Engineer | UI/UX Developer | Cloud & Data Engineering
GitHub: [https://github.com/Sudharsan-T](https://github.com/Sudharsan-T)
---

# 📜 **License**

This project is licensed under the **MIT License**.
