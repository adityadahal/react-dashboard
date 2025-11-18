

// API Configuration
export const API_CONFIG = {
  BASE_URL: 'https://jsonplaceholder.typicode.com',
  TIMEOUT: 10000,
} as const;

// Pagination
export const PAGINATION = {
  DEFAULT_PAGE: 1,
  DEFAULT_ITEMS_PER_PAGE: 10,
  ITEMS_PER_PAGE_OPTIONS: [5, 10, 25, 50, 100],
} as const;

// Routes
export const ROUTES = {
  HOME: '/',
  DATA: '/data',
} as const;


// Error Messages
export const ERROR_MESSAGES = {
  NETWORK_ERROR: 'Network error. Please check your internet connection.',
  SERVER_ERROR: 'Server error. Please try again later.',
  NOT_FOUND: 'Resource not found.',
  GENERIC_ERROR: 'An unexpected error occurred.',
} as const;

// App Metadata
export const APP_METADATA = {
  NAME: 'Dashboard App',
  WELCOME_MESSAGE: 'Welcome to the Dashboard App!',
  DESCRIPTION: ' A Dashboard to view user list fetched from a public API.',
} as const;
