import { describe, it, expect } from 'vitest';
import { configureStore } from '@reduxjs/toolkit';
import usersReducer, {
  setSearchTerm,
  setCurrentPage,
  setItemsPerPage,
  setSortField,
  clearError,
} from '../features/users/usersSlice';
import type { UsersState } from '../types';

const createTestStore = (initialState?: Partial<UsersState>) => {
  return configureStore({
    reducer: {
      users: usersReducer,
    },
    preloadedState: initialState ? {
      users: {
        users: [],
        loading: false,
        error: null,
        searchTerm: '',
        currentPage: 1,
        itemsPerPage: 5,
        sortField: null,
        sortOrder: 'asc' as const,
        ...initialState,
      },
    } : undefined,
  });
};

describe('usersSlice', () => {
  it('should handle initial state', () => {
    const store = createTestStore();
    const state = store.getState().users;
    
    expect(state.users).toEqual([]);
    expect(state.loading).toBe(false);
    expect(state.error).toBe(null);
    expect(state.searchTerm).toBe('');
    expect(state.currentPage).toBe(1);
    expect(state.itemsPerPage).toBe(5);
  });

  it('should handle setSearchTerm', () => {
    const store = createTestStore();
    store.dispatch(setSearchTerm('test'));
    
    const state = store.getState().users;
    expect(state.searchTerm).toBe('test');
    expect(state.currentPage).toBe(1); // Should reset to page 1
  });

  it('should handle setCurrentPage', () => {
    const store = createTestStore();
    store.dispatch(setCurrentPage(3));
    
    const state = store.getState().users;
    expect(state.currentPage).toBe(3);
  });

  it('should handle setItemsPerPage', () => {
    const store = createTestStore({ currentPage: 5 });
    store.dispatch(setItemsPerPage(25));
    
    const state = store.getState().users;
    expect(state.itemsPerPage).toBe(25);
    expect(state.currentPage).toBe(1); // Should reset to page 1
  });

  it('should handle setSortField', () => {
    const store = createTestStore();
    store.dispatch(setSortField('name'));
    
    let state = store.getState().users;
    expect(state.sortField).toBe('name');
    expect(state.sortOrder).toBe('asc');

    // Toggle sort order on same field
    store.dispatch(setSortField('name'));
    state = store.getState().users;
    expect(state.sortOrder).toBe('desc');
  });

  it('should handle clearError', () => {
    const store = createTestStore({ error: 'Some error' });
    store.dispatch(clearError());
    
    const state = store.getState().users;
    expect(state.error).toBe(null);
  });
});
