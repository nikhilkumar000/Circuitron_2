# TechXpo 2025 - Circuitron IoT Club Website

A modern, responsive website for TechXpo 2025, organized by Circuitron – IoT and Embedded System Club, RVSCET Jamshedpur. Built with React.js, Tailwind CSS, and Framer Motion for smooth animations and a futuristic design.

## 🚀 Features

- **Modern Design**: Futuristic theme inspired by the TechXpo poster with electric blue and neon accents
- **Responsive Layout**: Mobile-first design that works perfectly on all devices
- **Smooth Animations**: Framer Motion powered animations for engaging user experience
- **Interactive Components**: Hover effects, scroll animations, and interactive elements
- **Multi-page Navigation**: React Router DOM for seamless page transitions
- **Editable Content**: Easy-to-update data files for team members and events

## 🛠 Tech Stack

- **Framework**: React 18+
- **Styling**: Tailwind CSS
- **Animations**: Framer Motion
- **Routing**: React Router DOM
- **Build Tool**: Vite
- **Fonts**: Orbitron & Poppins

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Navbar.jsx      # Navigation bar with mobile menu
│   ├── Hero.jsx        # Hero section with animated robot
│   ├── AboutPreview.jsx # About section preview
│   ├── EventsPreview.jsx # Events section preview
│   ├── GalleryPreview.jsx # Gallery section preview
│   ├── Sponsors.jsx    # Sponsors and partners
│   ├── TeamPreview.jsx # Team section preview
│   ├── ContactPreview.jsx # Contact section preview
│   ├── Footer.jsx      # Footer with links and info
│   └── FloatingRegisterButton.jsx # Floating CTA button
├── pages/              # Individual pages
│   ├── Home.jsx        # Homepage
│   ├── About.jsx       # About page
│   ├── Events.jsx      # Events and competitions
│   ├── Team.jsx        # Team members
│   ├── Gallery.jsx     # Photo gallery with lightbox
│   ├── Schedule.jsx    # Event schedule
│   ├── Sponsors.jsx    # Sponsors page
│   └── Contact.jsx     # Contact form and info
├── data/               # Data files
│   ├── teamData.js     # Team member information
│   └── eventsData.js   # Event details
├── App.jsx             # Main app component
├── index.css           # Global styles and Tailwind
└── main.jsx            # App entry point
```

## 🎨 Design System

### Colors
- **Primary**: Electric Blue (#00BFFF)
- **Secondary**: Charcoal (#0B0B2B)
- **Accent**: Neon Cyan (#00FFFF)
- **Background**: Gradient with circuit pattern overlay

### Typography
- **Headings**: Orbitron (futuristic, tech-focused)
- **Body**: Poppins (clean, readable)

### Components
- **Buttons**: Rounded pill shape with neon hover effects
- **Cards**: Glassmorphism with subtle borders and hover animations
- **Animations**: Smooth transitions and scroll-triggered effects

## 🚀 Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd techxpo-2025
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173`

### Build for Production

```bash
npm run build
```

The built files will be in the `dist` directory.

## 📝 Customization

### Updating Team Members

Edit `src/data/teamData.js` to update team information:

```javascript
export const executiveTeam = [
  {
    name: "Your Name",
    position: "President",
    linkedin: "https://linkedin.com/in/yourprofile",
    img: "/assets/team/president.jpg",
    description: "Your description"
  }
  // ... add more members
];
```

### Updating Events

Edit `src/data/eventsData.js` to update event information:

```javascript
export const events = [
  {
    id: 1,
    title: "Your Event",
    tagline: "Event Tagline",
    description: "Event description...",
    duration: "2 Hours",
    participants: "50+ Teams",
    prize: "₹25,000",
    difficulty: "Intermediate",
    category: "Technical",
    requirements: "Laptop, Basic knowledge",
    registrationFee: "₹300 per team"
  }
  // ... add more events
];
```

### Adding Images

1. Create the following directories in `public/assets/`:
   - `team/` - Team member photos
   - `gallery/` - Gallery images
   - `sponsors/` - Sponsor logos

2. Update image paths in the data files accordingly.

### Customizing Colors

Edit `tailwind.config.js` to modify the color scheme:

```javascript
theme: {
  extend: {
    colors: {
      primary: '#00BFFF',    // Electric Blue
      secondary: '#0B0B2B',  // Charcoal
      accent: '#00FFFF',     // Neon Cyan
    }
  }
}
```

## 📱 Pages Overview

### Home Page (`/`)
- Hero section with animated robot mascot
- About preview
- Featured events
- Gallery preview
- Sponsors showcase
- Team preview
- Contact form

### About Page (`/about`)
- Club history and story
- Vision and mission
- Why TechXpo matters

### Events Page (`/events`)
- Event categories filter
- Detailed event cards
- Event modal with full details
- Registration information

### Team Page (`/team`)
- Executive team members
- Core team members
- Contact information
- Join team CTA

### Gallery Page (`/gallery`)
- Category-filtered gallery
- Lightbox image viewer
- Responsive grid layout

### Schedule Page (`/schedule`)
- Day-by-day event schedule
- Color-coded event types
- Important information

### Contact Page (`/contact`)
- Contact form
- Contact information
- Social media links
- FAQ section

## 🎯 Key Features

### Animations
- Scroll-triggered animations using Framer Motion
- Hover effects on interactive elements
- Smooth page transitions
- Floating elements and particle effects

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Touch-friendly interactions
- Optimized images and layouts

### Performance
- Lazy loading for images
- Optimized animations
- Minimal bundle size
- Fast page transitions

## 🔧 Development

### Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

### Code Structure

- **Components**: Reusable UI components with props
- **Pages**: Full-page components with routing
- **Data**: Centralized data management
- **Styles**: Tailwind CSS with custom utilities

## 📄 License

This project is created for TechXpo 2025 by Circuitron Club, RVSCET. All rights reserved.

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Make your changes
4. Test thoroughly
5. Submit a pull request

## 📞 Support

For support or questions, contact:
- Email: circuitron@rvscet.ac.in
- Phone: +91 9876543210
- Website: [TechXpo 2025](https://techxpo2025.rvscet.ac.in)

---

**Built with ❤️ by Circuitron Club, RVSCET Jamshedpur**








