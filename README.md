# Dashboard Application

A modern, responsive dashboard web application built with React, Redux, TypeScript, and Tailwind CSS. This project demonstrates best practices in frontend development, including state management, API integration, and comprehensive testing.

## 🚀 Features

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
- **Testing**: Unit tests with Vitest and React Testing Library

## 🛠️ Tech Stack

- **Frontend Framework**: React 19.2.0
- **Language**: TypeScript 5.9
- **State Management**: Redux Toolkit
- **Routing**: React Router v7
- **Styling**: Tailwind CSS v4
- **HTTP Client**: Axios
- **Build Tool**: Vite
- **Testing**: Vitest + React Testing Library
- **Code Quality**: ESLint

## 📋 Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or higher)
- npm or yarn package manager

## 🔧 Installation

1. **Clone the repository**
   ```bash
   git clone <your-repository-url>
   cd dashboard-app
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

## 🎯 Running the Application

### Development Mode
```bash
npm run dev
```
The application will start on `http://localhost:5173` (default Vite port)

### Production Build
```bash
npm run build
```
The build artifacts will be stored in the `dist/` directory.

### Preview Production Build
```bash
npm run preview
```

## 🧪 Testing

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

## 📁 Project Structure

```
dashboard-app/
├── src/
│   ├── components/
│   │   ├── common/           # Reusable components
│   │   │   ├── ErrorBoundary.tsx
│   │   │   ├── ErrorMessage.tsx
│   │   │   └── Loading.tsx
│   │   └── layout/           # Layout components
│   │       ├── Header.tsx
│   │       ├── Layout.tsx
│   │       └── Sidebar.tsx
│   ├── features/
│   │   └── users/            # User-related features
│   │       ├── usersSlice.ts # Redux slice
│   │       └── UserTable.tsx # Data table component
│   ├── pages/
│   │   ├── Home.tsx          # Home page
│   │   └── DataPage.tsx      # Data page
│   ├── services/
│   │   └── api.ts            # API service layer
│   ├── store/
│   │   ├── index.ts          # Redux store configuration
│   │   └── hooks.ts          # Typed Redux hooks
│   ├── types/
│   │   └── index.ts          # TypeScript type definitions
│   ├── __tests__/            # Test files
│   │   ├── setup.ts
│   │   ├── usersSlice.test.ts
│   │   ├── Loading.test.tsx
│   │   └── ErrorMessage.test.tsx
│   ├── App.tsx
│   ├── main.tsx
│   └── index.css
├── public/
├── package.json
├── tsconfig.json
├── vite.config.ts
├── vitest.config.ts
├── tailwind.config.js
└── README.md
```

## 🎨 Features in Detail

### 1. Dashboard Layout
- Responsive sidebar with navigation
- Mobile-friendly hamburger menu
- Clean, modern UI with Tailwind CSS

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
- Typed actions and reducers
- Async thunks for API calls

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

## 🚢 Deployment

### Deploy to Netlify
```bash
npm run build
# Upload the dist/ folder to Netlify
```

### Deploy to Vercel
```bash
npm run build
# Use Vercel CLI or connect your GitHub repository
```

## 📝 Git Workflow

This project follows Git best practices:
- Feature branches for new features
- Meaningful commit messages
- Clean commit history
- Regular commits with logical changes

### Example Git Workflow
```bash
# Create a feature branch
git checkout -b feature/add-user-details

# Make changes and commit
git add .
git commit -m "feat: add user detail modal component"

# Push to remote
git push origin feature/add-user-details

# Create a pull request on GitHub
```

## 🤝 Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'feat: Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is created for educational purposes.

## 👤 Author

**Your Name**

## 🙏 Acknowledgments

- [JSONPlaceholder](https://jsonplaceholder.typicode.com/) for the free API
- [Tailwind CSS](https://tailwindcss.com/) for the styling framework
- [Redux Toolkit](https://redux-toolkit.js.org/) for state management
- [Vite](https://vitejs.dev/) for the build tool

---

Built with ❤️ using React, TypeScript, and Tailwind CSS
