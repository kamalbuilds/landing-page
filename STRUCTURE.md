# ChainCrafters Landing Page

A modern, responsive landing page for ChainCrafters blockchain development agency built with Next.js, TypeScript, Tailwind CSS, and Framer Motion.

## 🏗️ Project Structure

```
├── app/
│   ├── page.tsx                 # Main page component (now clean and minimal)
│   ├── layout.tsx              # Root layout
│   └── globals.css             # Global styles
├── components/
│   ├── sections/               # All page sections
│   │   ├── index.ts           # Clean exports
│   │   ├── animations.ts      # Shared animation variants
│   │   ├── data.ts           # Static data (team, services, projects)
│   │   ├── HeroSection.tsx   # Hero section with stats and CTA
│   │   ├── AboutSection.tsx  # About company section
│   │   ├── ServicesSection.tsx # Services grid
│   │   ├── TeamSection.tsx   # Team members showcase
│   │   ├── ProjectsSection.tsx # Projects portfolio
│   │   ├── ContactSection.tsx # Contact form
│   │   └── Footer.tsx         # Footer with links
│   └── ui/                    # Reusable UI components
└── public/                    # Static assets
```

## 🎨 Design Features

- **Dark Theme**: Consistent dark background with purple/blue gradients
- **Glassmorphism**: Semi-transparent cards with backdrop blur effects
- **Animations**: Smooth Framer Motion animations throughout
- **Responsive**: Mobile-first design with Tailwind CSS
- **Typography**: Space Grotesk for headings, Inter for body text
- **Interactive Elements**: Hover effects, scale transforms, and smooth transitions

## 🚀 Key Components

### HeroSection
- Background image with gradient overlays
- Floating particles animation
- Trust badge and company stats
- Technology tags
- Call-to-action buttons

### ServicesSection
- Grid of service cards with glassmorphism
- Hover animations and effects
- Consistent theming

### TeamSection
- Team member profiles with social links
- Image hover effects
- Responsive grid layout

### ProjectsSection
- Project showcase with technology tags
- Gradient backgrounds for each project
- External links to project repositories

### ContactSection
- Contact form with glassmorphism styling
- Form validation ready
- Consistent input styling

## 🛠️ Technologies Used

- **Next.js 14** - React framework
- **TypeScript** - Type safety
- **Tailwind CSS** - Utility-first CSS
- **Framer Motion** - Animation library
- **Lucide React** - Icon library

## 📱 Responsive Design

The landing page is fully responsive with:
- Mobile-first approach
- Flexible grid layouts
- Responsive typography
- Touch-friendly interactions

## 🎯 Benefits of This Structure

1. **Maintainability**: Each section is in its own file
2. **Reusability**: Components can be easily reused
3. **Scalability**: Easy to add new sections or modify existing ones
4. **Performance**: Better code splitting and lazy loading
5. **Developer Experience**: Clean imports and organized code
6. **Testing**: Each component can be tested independently

## 🔧 Development

To run the development server:

```bash
npm run dev
# or
yarn dev
# or
pnpm dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
