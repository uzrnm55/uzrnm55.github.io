# Panhandle Pirates Water Polo Club Website

A modern, responsive website for the Panhandle Pirates Water Polo Club built with React, TypeScript, and Tailwind CSS.

## Features

- **Modern Design**: Clean, professional design with Panhandle Pirates branding
- **Responsive**: Works perfectly on all devices (mobile, tablet, desktop)
- **Fast Performance**: Optimized with Vite for quick loading
- **Accessible**: Built with accessibility best practices
- **SEO Friendly**: Proper meta tags and semantic HTML

## Pages/Sections

1. **Hero Section**: Eye-catching landing with Panhandle Pirates logo and call-to-action buttons
2. **About**: Club information, mission, and statistics
3. **Schedule**: Weekly practice schedule and upcoming events
4. **Contact**: Contact information and contact form

## Technology Stack

- **React 18** with TypeScript
- **Tailwind CSS** for styling
- **Vite** for build tooling
- **Lucide React** for icons

## Getting Started

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start development server:
   ```bash
   npm run dev
   ```

3. Build for production:
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/     # Reusable UI components
│   ├── Header.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Schedule.tsx
│   ├── Contact.tsx
│   └── Footer.tsx
├── App.tsx         # Main application component
├── main.tsx        # Application entry point
└── index.css       # Global styles
```

## Customization

- Update club information in the respective component files
- Modify colors in `tailwind.config.js` to match your logo colors
- Add new sections by creating new components
- Update contact information and schedule as needed

## Logo Integration

The website uses the `centeredLogo.jpg` file for branding. Make sure this file is placed in the public directory for proper display.

## Deployment

The website can be deployed to any static hosting service:
- Vercel
- Netlify
- GitHub Pages
- AWS S3

## License

This project is open source and available under the MIT License.
