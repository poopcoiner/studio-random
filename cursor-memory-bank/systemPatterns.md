# System Patterns

## UI Patterns

### Navigation
- Numeric section labels: `00 Work  01 Services  02 About  03 Contact`
- Hover: Accent color underline
- Mono font treatment
- Section headers follow same pattern: `01 Services` in h1/h2 style

### Typography
- Display font: Plus Jakarta Sans Variable (headings)
- Mono font: Söhne Mono (navigation, code, ASCII)
- Default font: Inter (body text, fallback)
- Sizes:
  - h1: clamp(2.75rem, 6vw, 4.5rem) - UPPERCASE
  - h2: clamp(2.25rem, 5vw, 3rem) - Used for section labels
  - body: 1.125rem

### Color System
- Page background: `#0F0F0F` (ink)
- Primary text: `#F5F5F5` (base)
- Accent: `#35FFBE` (default accent)
- Soft accent: `#5CFFC8` (soft variant)
- Accent shadow: 0 4px 12px rgba(53,255,190,0.25)

### Motion System
- Page transitions: Fade/slide-up (0.4s)
- Hero text: Clip-reveal (0.8s)
- Card hover: Tilt with accent shadow
- Reduced motion support for accessibility

## Component Patterns

### AsciiCurtain
- Full screen fixed position overlay
- Mono font with accent color
- Animation: Initial opacity 1, fade to 0 after 0.8s delay
- Disabled for users with reduced motion preference

### ViewToggle
- Pill button UI with "Grid / List" options
- Controls display mode of portfolio items
- State passed to PortfolioGrid component

### PortfolioGrid
- Default: Image grid layout
- List mode: Two-column (three on desktop) mono font list
- List items: Project titles with accent hover underline

### Page Layout
- Clean, minimal structure
- Consistent section numbering
- Performance optimized (see targets in project brief)

## Code Patterns

### Component Structure
```tsx
// Standard component structure
import { motion, useReducedMotion } from 'framer-motion';

const ComponentName = ({ prop1, prop2 }) => {
  // Reduced motion check
  const reduce = useReducedMotion();
  
  // Component logic
  
  return (
    <div className="[tailwind-classes]">
      {/* Component JSX */}
    </div>
  );
};

export default ComponentName;
```

### Animation Pattern
```tsx
// Animation with reduced motion support
const AnimatedElement = () => {
  const reduce = useReducedMotion();
  
  const animationProps = reduce ? {
    // Reduced or no animation
  } : {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.4, ease: 'easeOut' }
  };
  
  return <motion.div {...animationProps}>{/* content */}</motion.div>;
};
```

### Responsive Design Pattern
- Mobile-first approach
- Tailwind breakpoints:
  - sm: 640px
  - md: 768px
  - lg: 1024px
  - xl: 1280px 