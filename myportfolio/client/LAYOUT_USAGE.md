# AppLayout Component Documentation

## Overview

The `AppLayout` component is a comprehensive master UI layout for your MERN application that provides a consistent structure across all pages. It includes a header with navigation, an optional hero section, a main content area, and a footer.

## Features

### ✅ Header Section
- **Logo**: Brand logo with gradient background
- **Navigation**: Desktop navigation using shadcn/ui NavigationMenu
- **Mobile Menu**: Responsive hamburger menu using shadcn/ui Sheet component
- **Active States**: Automatic highlighting of current page
- **Sticky Positioning**: Header stays at top when scrolling

### ✅ Hero Section (Optional)
- **Full-width Design**: Responsive hero with gradient background
- **Call-to-Action**: Primary and secondary buttons
- **Illustration Placeholder**: Decorative elements and emoji placeholder
- **Typography**: Large, bold headlines with proper hierarchy

### ✅ Main Section
- **Flexible Content Area**: Where your page content is rendered
- **Responsive Container**: Proper spacing and max-width constraints
- **Clean Layout**: Uses flexbox for proper content distribution

### ✅ Footer Section
- **Brand Information**: Logo, description, and social links
- **Quick Links**: Navigation links for easy access
- **Contact Information**: Email, phone, and location
- **Legal Links**: Privacy policy and terms of service
- **Responsive Grid**: Adapts to different screen sizes

## Usage

### Basic Usage

```jsx
import AppLayout from './components/AppLayout';
import YourPageContent from './pages/YourPage';

function App() {
  return (
    <AppLayout>
      <YourPageContent />
    </AppLayout>
  );
}
```

### With Hero Section

```jsx
import AppLayout from './components/AppLayout';
import HomePage from './pages/Home';

function App() {
  return (
    <AppLayout showHero={true}>
      <HomePage />
    </AppLayout>
  );
}
```

### In React Router

```jsx
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AppLayout from './components/AppLayout';
import Home from './pages/Home';
import Projects from './pages/Projects';
import Contact from './pages/Contact';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={
          <AppLayout showHero={true}>
            <Home />
          </AppLayout>
        } />
        <Route path="/projects" element={
          <AppLayout>
            <Projects />
          </AppLayout>
        } />
        <Route path="/contact" element={
          <AppLayout>
            <Contact />
          </AppLayout>
        } />
      </Routes>
    </Router>
  );
}
```

## Props

| Prop | Type | Default | Description |
|------|------|---------|-------------|
| `children` | ReactNode | - | The content to render in the main section |
| `showHero` | boolean | `false` | Whether to display the hero section |

## Customization

### Navigation Items

Edit the `navigationItems` array in the AppLayout component:

```jsx
const navigationItems = [
  { name: 'Home', path: '/' },
  { name: 'Projects', path: '/projects' },
  { name: 'Contact', path: '/contact' },
  { name: 'About', path: '/about' }, // Add new items
];
```

### Social Links

Update the `socialLinks` array:

```jsx
const socialLinks = [
  { name: 'GitHub', icon: Github, href: 'https://github.com/yourusername' },
  { name: 'LinkedIn', icon: Linkedin, href: 'https://linkedin.com/in/yourprofile' },
  { name: 'Twitter', icon: Twitter, href: 'https://twitter.com/yourhandle' },
];
```

### Contact Information

Modify the contact details in the footer:

```jsx
// Update these values in the footer section
<span>your.email@example.com</span>
<span>+1 (555) 123-4567</span>
<span>Your City, State</span>
```

### Brand Information

Update the logo and brand name:

```jsx
// In the header and footer sections
<span className="text-white font-bold text-sm">Y</span> // Change "D" to your initial
<span className="text-xl font-bold text-foreground">Your Name</span> // Change "Dawit"
```

## Styling

The layout uses TailwindCSS classes and follows a consistent design system:

### Color Scheme
- **Primary**: Blue gradient (`from-blue-500 to-purple-600`)
- **Background**: Light/dark mode compatible
- **Text**: Proper contrast ratios for accessibility

### Responsive Breakpoints
- **Mobile**: `< 768px` - Hamburger menu, stacked layouts
- **Tablet**: `768px - 1024px` - Side-by-side layouts
- **Desktop**: `> 1024px` - Full navigation, multi-column layouts

### Spacing
- **Container**: `max-w-6xl` with responsive padding
- **Sections**: `py-12` or `py-20` for major sections
- **Components**: Consistent gap spacing using Tailwind's spacing scale

## Dependencies

The AppLayout component requires these shadcn/ui components:

```bash
# Install required components
npx shadcn@latest add button
npx shadcn@latest add sheet
npx shadcn@latest add navigation-menu
npx shadcn@latest add card
npx shadcn@latest add badge
```

## Example Implementation

See `ExamplePage.jsx` for a complete example of how to use the AppLayout with content that demonstrates:

- Card layouts with shadcn/ui components
- Responsive grids
- Call-to-action sections
- Proper typography hierarchy
- Interactive elements

## Best Practices

1. **Consistent Usage**: Use AppLayout on all pages for consistency
2. **Hero Section**: Only use `showHero={true}` on the homepage
3. **Content Structure**: Keep page content within the main section
4. **Responsive Design**: Test on mobile, tablet, and desktop
5. **Accessibility**: All interactive elements have proper ARIA labels
6. **Performance**: The layout is optimized for fast rendering

## Troubleshooting

### Common Issues

1. **Missing Components**: Ensure all shadcn/ui components are installed
2. **Styling Issues**: Check that TailwindCSS is properly configured
3. **Navigation Not Working**: Verify React Router is set up correctly
4. **Mobile Menu Issues**: Ensure Sheet component is properly imported

### Performance Tips

1. **Lazy Loading**: Consider lazy loading page components
2. **Image Optimization**: Use optimized images for the hero section
3. **Bundle Size**: The layout is lightweight and optimized
4. **Caching**: The layout is static and can be cached effectively
