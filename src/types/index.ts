export interface User {
  id: number;
  name: string;
  username: string;
  email: string;
  phone: string;
  website: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
  };
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

export interface Post {
  userId: number;
  id: number;
  title: string;
  body: string;
}

export interface UsersState {
  users: User[];
  loading: boolean;
  error: string | null;
  searchTerm: string;
  currentPage: number;
  itemsPerPage: number;
  sortField: keyof User | null;
  sortOrder: 'asc' | 'desc';
}

export interface ApiError {
  message: string;
  code?: string;
}
