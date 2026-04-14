<div align="center">
<img width="1200" height="475" alt="GHBanner" src="https://github.com/user-attachments/assets/0aa67016-6eaf-458a-adb2-6e31a0763ed6" />
</div>

# Elite Portfolio & Academic Hub

A modern, open-source personal portfolio website featuring an AI-powered chat assistant, interactive visualizations, and academic performance showcase. Built with React, TypeScript, Three.js, and Google Gemini AI.

**✨ Features:**
- Beautiful, responsive portfolio design
- AI-powered chat assistant (powered by Google Gemini)
- Interactive 3D model viewer
- Academic performance metrics & visualizations
- Certification showcase
- Skills and competencies display
- Mobile-friendly interface

## 🚀 Run Locally (Completely Free!)

**Prerequisites:** Node.js (v16+)

1. Clone this repository:
   ```bash
   git clone https://github.com/yourusername/elite-portfolio.git
   cd elite-portfolio
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. **(Optional) Set up Google Gemini API for the AI chat:**
   - Create `backend/.env` (copy from `backend/.env.example`)
   - Get a **free** Gemini API key from [Google AI Studio](https://aistudio.google.com/app/apikey)
   - Add your key: `GEMINI_API_KEY=your_key_here`
   
   **Note:** The site runs perfectly fine without the API key—the chat feature will gracefully handle the missing key.

4. Run the app:
   ```bash
   npm run dev
   ```

The app will start on:
- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:8080` (health check: `/api/health`)

## 📦 Build for Production

```bash
npm run build
npm start
```

### Ports

- Frontend: `http://localhost:3000`
- Backend API: `http://localhost:8080` (health: `/api/health`)

## 📄 License

This project is **completely free and open source**. Feel free to fork, modify, and use it for your own portfolio!

## 💡 Technologies Used

- **Frontend:** React, TypeScript, Vite, Tailwind CSS, Three.js
- **Backend:** Node.js, Express, Google Gemini AI
- **Deployment:** Can be deployed to Vercel, Netlify, GitHub Pages, or any static host
