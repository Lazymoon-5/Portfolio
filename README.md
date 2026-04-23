# 🚀 Shaikh Suher — Portfolio Website

Ultra-modern personal portfolio for Shaikh Suher, Computer Engineering student and Founder of Lazymoon Digitech.

## 🛠 Tech Stack

| Layer      | Technology                          |
|------------|-------------------------------------|
| Frontend   | React 18 + Vite                     |
| Styling    | Tailwind CSS                        |
| Animations | Framer Motion                       |
| Backend    | Node.js + Express                   |
| Fonts      | Clash Display + DM Sans + JetBrains Mono |

## 📁 Folder Structure

```
portfolio/
├── client/                 ← React Frontend
│   ├── src/
│   │   ├── components/    ← All UI components
│   │   ├── hooks/         ← Custom React hooks
│   │   ├── styles/        ← Global CSS
│   │   └── App.jsx        ← Root component
│   ├── index.html
│   ├── vite.config.js
│   ├── tailwind.config.js
│   └── package.json
│
├── server/                 ← Express Backend
│   ├── routes/
│   │   └── contact.js
│   ├── controllers/
│   │   └── contactController.js
│   ├── index.js
│   └── package.json
│
├── package.json            ← Root scripts
└── README.md
```

## ⚡ Quick Start

### 1. Install dependencies

```bash
# In the root portfolio/ directory
npm run install:all
```

Or install manually:
```bash
cd client && npm install
cd ../server && npm install
```

### 2. Add your images

Place your images in `client/public/assets/`:
- `profile.jpg` — Your profile photo
- `project1.jpg` — Project 1 screenshot
- `project2.jpg` — Project 2 screenshot
- `project3.jpg` — Project 3 screenshot
- `project4.jpg` — Project 4 screenshot

### 3. Run the development servers

**Option A — Run both together (recommended):**
```bash
# In root directory, first install concurrently:
npm install
npm run dev
```

**Option B — Run separately:**
```bash
# Terminal 1 — Backend
cd server && npm run dev

# Terminal 2 — Frontend
cd client && npm run dev
```

### 4. Open in browser

- Frontend: [http://localhost:5173](http://localhost:5173)
- Backend API: [http://localhost:5000](http://localhost:5000)

## 🎨 Customization

### Colors (client/tailwind.config.js)
```js
colors: {
  bg: '#0B0F19',       // Dark navy background
  purple: '#6C63FF',   // Primary accent
  green: '#00F5A0',    // Secondary accent
  muted: '#A0AEC0',    // Muted text
}
```

### Sections to update
- `Hero.jsx` — Name, tagline, typing text
- `About.jsx` — Bio text and info
- `Skills.jsx` — Skill names and percentages
- `Experience.jsx` — Work history and internship
- `Projects.jsx` — Project cards
- `Education.jsx` — Academic details
- `Contact.jsx` — Phone, email, social links
- `Footer.jsx` — Social media links

## 📦 Build for Production

```bash
cd client && npm run build
```

The built files will be in `client/dist/`.

## 📬 Contact Form

The contact form sends data to `POST /api/contact` on the Express backend. Messages are logged to the console. To persist messages, add a database (MongoDB/SQLite) in `server/controllers/contactController.js`.

---

**Built with ❤️ by Shaikh Suher | Lazymoon Digitech**
