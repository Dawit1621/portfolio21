# MERN Project Setup Guide

## Overview

This guide documents the complete setup of a MERN (MongoDB, Express, React, Node.js) application with React, TailwindCSS, and shadcn/ui components.

## ✅ Completed Setup

### 1. **TailwindCSS Setup**
- ✅ TailwindCSS, PostCSS, and Autoprefixer installed
- ✅ `tailwind.config.js` configured with proper content paths
- ✅ Tailwind base styles added to `src/index.css`
- ✅ CSS variables configured for theming

### 2. **shadcn/ui Setup**
- ✅ `components.json` configuration file created
- ✅ Base components installed:
  - Button (`src/components/ui/button.jsx`)
  - Navigation Menu (`src/components/ui/navigation-menu.jsx`)
  - Sheet (`src/components/ui/sheet.jsx`)
  - Card (`src/components/ui/card.jsx`)
  - Badge (`src/components/ui/badge.jsx`)

### 3. **Project Structure**
- ✅ `src/components/ui/` folder for shadcn components
- ✅ `src/layout/` folder with `AppLayout.jsx`
- ✅ Fully responsive layout with:
  - **Header**: Logo, navigation links, mobile hamburger menu
  - **Hero Section**: Headline, subtext, CTA buttons, placeholder illustration
  - **Main Section**: Renders children components
  - **Footer**: Links, social icons, copyright

### 4. **Dependencies**
- ✅ `lucide-react` for icons
- ✅ `react-router-dom` for routing
- ✅ All required shadcn/ui dependencies

### 5. **Final Implementation**
- ✅ `App.jsx` renders `<AppLayout>` as master layout
- ✅ Test page with placeholder `<h2>` element
- ✅ Hero section shows only on home page (`showHero={true}`)

## Project Structure

```
myportfolio/client/
├── components.json              # shadcn/ui configuration
├── tailwind.config.js          # TailwindCSS configuration
├── src/
│   ├── index.css               # TailwindCSS base styles
│   ├── App.jsx                 # Main app with routing
│   ├── layout/
│   │   └── AppLayout.jsx       # Master layout component
│   ├── components/
│   │   └── ui/                 # shadcn/ui components
│   │       ├── button.jsx
│   │       ├── card.jsx
│   │       ├── badge.jsx
│   │       ├── navigation-menu.jsx
│   │       └── sheet.jsx
│   ├── pages/                  # Page components
│   │   ├── Home.jsx
│   │   ├── Projects.jsx
│   │   ├── Contact.jsx
│   │   ├── TestPage.jsx
│   │   ├── AdminLogin.jsx
│   │   └── AdminDashboard.jsx
│   └── lib/
│       └── utils.js            # Utility functions
```

## Key Features

### **AppLayout Component**
- **Props**: 
  - `children`: Content to render in main section
  - `showHero`: Boolean to show/hide hero section (default: false)
- **Responsive Design**: Mobile-first approach with breakpoints
- **Navigation**: Active state highlighting, mobile hamburger menu
- **Accessibility**: Proper ARIA labels, semantic HTML

### **Routing Structure**
```jsx
<Router>
  <Routes>
    <Route path="/" element={
      <AppLayout showHero={true}>
        <Home />
      </AppLayout>
    } />
    <Route path="/test" element={
      <AppLayout>
        <TestPage />
      </AppLayout>
    } />
    {/* Other routes... */}
  </Routes>
</Router>
```

## Usage Examples

### Basic Page with Layout
```jsx
import AppLayout from './layout/AppLayout';

function MyPage() {
  return (
    <AppLayout>
      <div className="py-12 px-4">
        <h1>My Page Content</h1>
      </div>
    </AppLayout>
  );
}
```

### Home Page with Hero Section
```jsx
function HomePage() {
  return (
    <AppLayout showHero={true}>
      <div className="py-12 px-4">
        <h1>Additional Home Content</h1>
      </div>
    </AppLayout>
  );
}
```

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Lint code
npm run lint
```

## Testing the Setup

1. **Start the development server**:
   ```bash
   cd myportfolio/client
   npm run dev
   ```

2. **Visit the application**:
   - Home page: `http://localhost:5174/` (with hero section)
   - Test page: `http://localhost:5174/test` (without hero section)
   - Other pages: `/projects`, `/contact`, etc.

3. **Verify responsive design**:
   - Test on mobile, tablet, and desktop
   - Check mobile hamburger menu
   - Verify navigation active states

## Customization

### **Branding**
Update in `AppLayout.jsx`:
```jsx
// Logo and brand name
<span className="text-white font-bold text-sm">D</span> // Change "D"
<span className="text-xl font-bold text-foreground">Dawit</span> // Change "Dawit"
```

### **Navigation Items**
```jsx
const navigationItems = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
  // Add more items...
];
```

### **Social Links**
```jsx
const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/yourusername' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/yourprofile' },
  // Add more social links...
];
```

### **Contact Information**
Update in the footer section:
```jsx
<span>your.email@example.com</span>
<span>+1 (555) 123-4567</span>
<span>Your City, State</span>
```

## Troubleshooting

### **Common Issues**

1. **Missing Components**: Ensure all shadcn/ui components are installed
2. **Styling Issues**: Check TailwindCSS configuration
3. **Navigation Not Working**: Verify React Router setup
4. **Mobile Menu Issues**: Check Sheet component imports

### **Performance Tips**

1. **Lazy Loading**: Consider lazy loading page components
2. **Image Optimization**: Use optimized images for hero section
3. **Bundle Size**: Layout is lightweight and optimized
4. **Caching**: Static layout can be cached effectively

## Next Steps

1. **Add Content**: Replace placeholder content with actual project content
2. **Connect Backend**: Integrate with Express.js server
3. **Database**: Connect to MongoDB
4. **Authentication**: Add user authentication
5. **Deployment**: Deploy to production environment

## Dependencies Summary

```json
{
  "dependencies": {
    "@radix-ui/react-dialog": "^1.1.15",
    "@radix-ui/react-navigation-menu": "^1.2.14",
    "@radix-ui/react-slot": "^1.2.3",
    "class-variance-authority": "^0.7.1",
    "clsx": "^2.1.1",
    "lucide-react": "^0.539.0",
    "react": "^19.1.1",
    "react-dom": "^19.1.1",
    "react-router-dom": "^7.8.0",
    "tailwind-merge": "^3.3.1"
  },
  "devDependencies": {
    "tailwindcss": "^4.1.12",
    "tailwindcss-animate": "^1.0.7"
  }
}
```

The setup is now complete and ready for development! 🚀
