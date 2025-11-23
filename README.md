# Personal Website

A modern, beautiful personal website with a tabbed interface built with React and React Router.

## Features

- 🎨 Modern, responsive design with smooth animations
- 📱 Mobile-friendly interface
- 🚀 Fast performance with Vite
- 🎯 Tabbed navigation with React Router
- ✨ Smooth transitions and hover effects
- 🌈 Beautiful gradient backgrounds

## Tabs

1. **About** - Personal introduction and information
2. **Credentials** - Links to GitHub, LinkedIn, and Handshake profiles
3. **Projects** - Showcase of your projects and work

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

The website will be available at `http://localhost:5173`

### Build

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## Customization

### Update Your Information

1. **About Section** (`src/components/About.jsx`):
   - Replace `[Your Name]` with your actual name
   - Update the education, experience, and goals sections
   - Add your profile image (replace the placeholder)

2. **Credentials Section** (`src/components/Credentials.jsx`):
   - Update the GitHub, LinkedIn, and Handshake URLs
   - Replace `yourusername` with your actual usernames

3. **Projects Section** (`src/components/Projects.jsx`):
   - Add your actual projects
   - Update descriptions, technologies, and links
   - Modify project statuses as needed

### Styling

- Main app styles: `src/App.css`
- Component styles: `src/components/TabContent.css`
- Global styles: `src/index.css`

## Technologies

- React 18
- React Router DOM 6
- Vite
- CSS3 with modern features

## Project Structure

```
personalwebsite/
├── src/
│   ├── components/
│   │   ├── About.jsx
│   │   ├── Credentials.jsx
│   │   ├── Projects.jsx
│   │   └── TabContent.css
│   ├── App.jsx
│   ├── App.css
│   ├── main.jsx
│   └── index.css
├── index.html
├── package.json
├── vite.config.js
└── README.md
```
