# Noroff eCom Store

An e-commerce application built with React and TypeScript for the JavaScript Frameworks course assignment. The app uses the Noroff Online Shop API to display products, manage a shopping cart, and process checkouts.

Feel free to browse and test the full checkout flow - no account required!

**Live Demo:** [Coming soon]

## Features

- Product catalog with search and sort functionality
- Individual product pages with reviews and ratings
- Shopping cart with localStorage persistence
- Checkout flow with order confirmation
- Contact form with validation
- Responsive design for all devices

## Tech Stack

- React 19
- TypeScript
- Styled Components
- React Router
- React Hook Form
- React Hot Toast
- React Testing Library

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm

### Installation

Clone the repository:

```bash
git clone https://github.com/NoroffFEU/jsfw-2025-v1-ddyrnes-jsfw.git
cd jsfw-2025-v1-ddyrnes-jsfw
```

Install dependencies:

```bash
npm install --legacy-peer-deps
```

Start the development server:

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

## Testing

Run all tests:

```bash
npm test
```

Run tests without watch mode:

```bash
npm test -- --watchAll=false
```

Run a specific test file:

```bash
npm test CartContext.test.tsx
```

## Building for Production

Create a production build:

```bash
npm run build
```

The build folder will contain the optimized production files.

## Project Structure

```
src/
├── components/     # Reusable UI components
├── pages/          # Page components
├── context/        # React Context for state management
├── hooks/          # Custom React hooks
├── types/          # TypeScript type definitions
├── styles/         # Global styles and theme
└── utils/          # Helper functions and API calls
```

## API

This project uses the Noroff Online Shop API.

Base URL: `https://v2.api.noroff.dev/online-shop`

Documentation: [https://docs.noroff.dev/docs/v2/basic/online-shop](https://docs.noroff.dev/docs/v2/basic/online-shop)

## Assignment Requirements

This project fulfills all requirements for the JavaScript Frameworks Course Assignment:

- Homepage with product list and look-ahead search
- Individual product pages with dynamic routing
- Shopping cart with add/remove functionality
- Cart icon displaying item count
- Checkout page with total calculation
- Checkout success page with cart clearing
- Contact form with validation
- Layout component with Header and Footer
- React Router for navigation
- Responsive design
- Clean, well-formatted code
- No console errors

## License

This project is part of a school assignment for Noroff School of Technology and Digital Media.

---

Made by Daniel Dyrnes
