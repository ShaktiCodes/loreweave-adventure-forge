# 🧙‍♂️ LoreWeaver AI

LoreWeaver AI is an advanced, AI-powered dungeon game builder and storytelling platform. Create, play, and share immersive text-based adventures or D&D-style campaigns with the help of Google Gemini API. Let your imagination run wild while the AI weaves rich stories, characters, quests, and branching narratives for you.

---

## 🎮 Features

### 🛠️ Game Creator
- 🎭 Select from themes like fantasy, sci-fi, horror, and more.
- 🧑‍🎤 Define characters, NPCs, and world settings.
- 🗺️ Map and world building.
- ✍️ Use the Gemini API to generate quests, world lore, and dialogue.
- 📋 Character Sheet Editor with Redux form state.

### 🎲 Live Gameplay
- 📜 AI-powered interactive storytelling engine.
- 🧠 Dynamic storyline continuation using Gemini.
- 🔘 Branching choices with persistent player decisions.
- 💬 Typing animations and immersive reading experience.

### 🔄 Campaign Management
- 💾 Save, edit, publish, and replay your games.
- 📱 Optimized for mobile and desktop gameplay.
- 🌗 Dark Mode toggle for better UX.
- 🏹 Player stats, inventory system, and character leveling.

---

## 🧪 Tech Stack

| Technology         | Description                                 |
|--------------------|---------------------------------------------|
| React          | UI framework using functional components and Hooks |
| Redux Toolkit  | Global state management for game data, players, and sessions |
| React Router   | Client-side routing for `/create`, `/play/:id`, `/campaigns` |
| shadcn/ui      | Clean, accessible, and modern UI components |
| Tailwind CSS   | Responsive and utility-first styling        |
| Framer Motion  | Smooth animations, typing effects, transitions |
| Gemini API     | AI storytelling, quest generation, and dialogue |
| Vite           | Lightning-fast dev server & build system    |

---

## 🧑‍💻 Getting Started

### 1. Clone the Repository
```bash
https://github.com/ShaktiCodes/LoreWeaver.git
cd LoreWeaver

2. Install Dependencies
bash
Copy
Edit
npm install
3. Configure Environment Variables
Create a .env file and add your Gemini API key:

env
Copy
Edit
VITE_GEMINI_API_KEY=your_gemini_api_key_here
4. Start the Development Server
bash
Copy
Edit
npm run dev
