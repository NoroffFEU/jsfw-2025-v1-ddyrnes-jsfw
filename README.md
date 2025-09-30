# Noroff eCom Store

A modern e-commerce application built with React, TypeScript, and Styled Components as part of the JavaScript Frameworks course assignment.

## 🚀 Features

- **Product Catalog** - Browse all products with images, pricing, and ratings
- **Search & Filter** - Look-ahead search to find products quickly
- **Sort Functionality** - Sort products by name or price
- **Product Details** - View detailed product information, reviews, and tags
- **Shopping Cart** - Add products, manage quantities, and view cart total
- **Persistent Cart** - Cart state saved to localStorage
- **Checkout Flow** - Complete checkout with success confirmation
- **Contact Form** - Validated contact form with react-hook-form
- **Toast Notifications** - Real-time user feedback
- **Responsive Design** - Works seamlessly on all devices
- **Fully Typed** - Built with TypeScript for type safety

## 🛠️ Tech Stack

- **React 19** - UI library
- **TypeScript** - Type-safe JavaScript
- **Styled Components** - CSS-in-JS styling with theming
- **React Router** - Client-side routing
- **React Hook Form** - Form validation
- **React Hot Toast** - Toast notifications
- **React Testing Library** - Component testing

## 📁 Project Structure

```
src/
├── components/       # Reusable UI components
├── pages/           # Page components
├── context/         # React Context (cart state)
├── hooks/           # Custom React hooks
├── types/           # TypeScript type definitions
├── styles/          # Global styles and theme
└── utils/           # Helper functions and API calls
```

## 🔗 API

This project uses the [Noroff Online Shop API](https://docs.noroff.dev/docs/v2/basic/online-shop)

**Base URL:** `https://v2.api.noroff.dev/online-shop`

## 🚦 Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

1. Clone the repository
```bash
git clone https://github.com/NoroffFEU/jsfw-2025-v1-ddyrnes-jsfw.git
cd jsfw-2025-v1-ddyrnes-jsfw
```

2. Install dependencies
```bash
npm install --legacy-peer-deps
```

3. Start the development server
```bash
npm start
```

4. Open [http://localhost:3000](http://localhost:3000) in your browser

## 🧪 Testing

Run tests with:
```bash
npm test
```

## 📦 Build

Create a production build:
```bash
npm run build
```

## 🌐 Deployment

This project is deployed on Netlify.

**Live Demo:** [Coming soon]

## 📝 Assignment Requirements

This project fulfills all requirements for the JavaScript Frameworks Course Assignment:

- ✅ Homepage with product list and look-ahead search
- ✅ Individual product pages with dynamic routing
- ✅ Shopping cart with add/remove functionality
- ✅ Cart icon displaying item count
- ✅ Checkout page with total calculation
- ✅ Checkout success page with cart clearing
- ✅ Contact form with validation
- ✅ Layout component with Header and Footer
- ✅ React Router for navigation
- ✅ Responsive design
- ✅ Clean, well-formatted code
- ✅ No console errors

## 👨‍💻 Development

### Git Workflow

- `main` - Production-ready code
- `dev` - Development branch
- `feature/*` - Feature branches

### Code Style

- Components in individual folders with `index.tsx`
- Styled components in separate `.styles.ts` files
- TypeScript interfaces prefixed with `I`
- Strict TypeScript mode enabled

## 📄 License

This project is part of a school assignment for Noroff.

## 🙏 Acknowledgments

- Noroff School of Technology and Digital Media
- [Noroff API Documentation](https://docs.noroff.dev/)