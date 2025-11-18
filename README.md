# Dashboard Application

A modern, responsive dashboard web application built with React, Redux, TypeScript, and Tailwind CSS. This project demonstrates best practices in frontend development, including state management, API integration, and comprehensive testing.

## Features

- **Responsive Layout**: Beautiful, mobile-first design using Tailwind CSS
- **Navigation**: Dynamic sidebar navigation with Home and Data pages
- **Data Management**: 
  - Fetch and display user data from JSONPlaceholder API
  - Advanced search and filtering capabilities
  - Sortable columns (click headers to sort)
  - Pagination with customizable items per page
- **State Management**: Robust Redux Toolkit implementation with TypeScript
- **Error Handling**: User-friendly error messages and error boundaries
- **Loading States**: Smooth loading indicators for better UX
- **Type Safety**: Full TypeScript implementation for better code quality

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm or yarn package manager


##  Running the Application

### Production Mode
Deployed on Vercel:  `https://react-dashboard-tau-wine.vercel.app/`

### Development Mode
```bash
npm run dev
```
The application will start on `http://localhost:5173` (default Vite port)


##  Testing

### Run Tests
```bash
npm test
```

### Run Tests with UI
```bash
npm run test:ui
```

### Run Tests with Coverage
```bash
npm run test:coverage
```



##  Features in Detail

### 1. Dashboard Layout
- Responsive sidebar with navigation
- Mobile-friendly hamburger menu

### 2. API Integration
- Uses JSONPlaceholder API (https://jsonplaceholder.typicode.com)
- Proper error handling with retry functionality
- Loading states during data fetch

### 3. User Data Table
- **Search**: Real-time search across name, email, username, and company
- **Sorting**: Click column headers to sort (toggle asc/desc)
- **Pagination**: Navigate through pages with customizable items per page
- **Filtering**: Dynamic filtering based on search criteria

### 4. State Management
- Redux Toolkit for predictable state management

### 5. Error Handling
- Error boundary for catching React errors
- User-friendly error messages
- Retry functionality for failed API calls

## 🔑 Key Components

### Redux Store
- **usersSlice**: Manages user data, loading states, search, pagination, and sorting

### Pages
- **Home**: Welcome page with feature highlights and stats
- **DataPage**: User data table with all interactive features

### Components
- **Layout**: Main layout wrapper with sidebar and header
- **UserTable**: Feature-rich data table component
- **ErrorBoundary**: Catches and displays React errors
- **Loading**: Reusable loading spinner


**Aditya Kishor Dahal**

