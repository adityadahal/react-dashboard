import React, { useMemo } from 'react';
import type { User } from '../../types';
import { useAppDispatch, useAppSelector } from '../../store/hooks';
import {
  setSearchTerm,
  setCurrentPage,
  setItemsPerPage,
  setSortField,
} from '../../features/users/usersSlice';

const UserTable: React.FC = () => {
  const dispatch = useAppDispatch();
  const {
    users,
    searchTerm,
    currentPage,
    itemsPerPage,
    sortField,
    sortOrder,
  } = useAppSelector((state) => state.users);


  const filteredUsers = useMemo(() => {
    if (!searchTerm) return users;

    const lowerSearch = searchTerm.toLowerCase();
    return users.filter(
      (user) =>
        user.name.toLowerCase().includes(lowerSearch) ||
        user.email.toLowerCase().includes(lowerSearch) ||
        user.username.toLowerCase().includes(lowerSearch) ||
        user.company.name.toLowerCase().includes(lowerSearch)
    );
  }, [users, searchTerm]);

  // Sort users
  const sortedUsers = useMemo(() => {
    if (!sortField) return filteredUsers;

    return [...filteredUsers].sort((a, b) => {
      let aValue: any = a[sortField];
      let bValue: any = b[sortField];

      // Handle nested properties
      if (sortField === 'company') {
        aValue = a.company.name;
        bValue = b.company.name;
      } else if (sortField === 'address') {
        aValue = a.address.city;
        bValue = b.address.city;
      }

      if (typeof aValue === 'string') {
        aValue = aValue.toLowerCase();
        bValue = bValue.toLowerCase();
      }

      if (aValue < bValue) return sortOrder === 'asc' ? -1 : 1;
      if (aValue > bValue) return sortOrder === 'asc' ? 1 : -1;
      return 0;
    });
  }, [filteredUsers, sortField, sortOrder]);

  // Pagination
  const totalPages = Math.ceil(sortedUsers.length / itemsPerPage);
  const paginatedUsers = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    return sortedUsers.slice(startIndex, startIndex + itemsPerPage);
  }, [sortedUsers, currentPage, itemsPerPage]);

  const handleSort = (field: keyof User) => {
    dispatch(setSortField(field));
  };

  const handlePageChange = (page: number) => {
    dispatch(setCurrentPage(page));
  };

  const handleItemsPerPageChange = (value: number) => {
    dispatch(setItemsPerPage(value));
  };

  const getSortIcon = (field: keyof User) => {
    if (sortField !== field) {
      return (
        <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M7 16V4m0 0L3 8m4-4l4 4m6 0v12m0 0l4-4m-4 4l-4-4" />
        </svg>
      );
    }
    return sortOrder === 'asc' ? (
      <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
      </svg>
    ) : (
      <svg className="w-4 h-4 text-primary-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
      </svg>
    );
  };

  const renderPaginationButtons = () => {
    const buttons = [];
    const maxVisible = 5;
    let startPage = Math.max(1, currentPage - Math.floor(maxVisible / 2));
    let endPage = Math.min(totalPages, startPage + maxVisible - 1);

    if (endPage - startPage + 1 < maxVisible) {
      startPage = Math.max(1, endPage - maxVisible + 1);
    }

    for (let i = startPage; i <= endPage; i++) {
      buttons.push(
        <button
          key={i}
          onClick={() => handlePageChange(i)}
          className={`px-3 py-2 rounded-md text-sm font-medium ${
            currentPage === i
              ? 'bg-primary-600 text-white'
              : 'bg-white text-gray-700 hover:bg-zinc-50 border border-gray-300'
          }`}
        >
          {i}
        </button>
      );
    }

    return buttons;
  };

  return (
    <div className="space-y-4">
      {/* Search and Filter Controls */}
      <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between">
        <div className="w-full sm:w-96">
          <input
            type="text"
            placeholder="Search by name, email, username, or company..."
            value={searchTerm}
            onChange={(e) => dispatch(setSearchTerm(e.target.value))}
            className="input-field"
          />
        </div>
        <div className="flex items-center space-x-2">
          <label className="text-sm text-gray-600">Show:</label>
          <select
            value={itemsPerPage}
            onChange={(e) => handleItemsPerPageChange(Number(e.target.value))}
            className="px-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-transparent outline-none"
          >
            <option value={5}>5</option>
            <option value={10}>10</option>
            <option value={25}>25</option>
          </select>
        </div>
      </div>

      {/* Results Info */}
      <div className="text-sm text-gray-600">
        Showing {paginatedUsers.length > 0 ? (currentPage - 1) * itemsPerPage + 1 : 0} to{' '}
        {Math.min(currentPage * itemsPerPage, sortedUsers.length)} of {sortedUsers.length} results
        {searchTerm && ` (filtered from ${users.length} total)`}
      </div>

      {/* Table */}
      <div className="bg-white rounded-lg shadow overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead className="bg-zinc-50 border-b border-gray-200">
              <tr>
                <th className="px-6 py-3 text-left">
                  <button
                    onClick={() => handleSort('id')}
                    className="flex items-center space-x-1 text-xs font-medium text-gray-700 uppercase tracking-wider hover:text-primary-600"
                  >
                    <span>ID</span>
                    {getSortIcon('id')}
                  </button>
                </th>
                <th className="px-6 py-3 text-left">
                  <button
                    onClick={() => handleSort('name')}
                    className="flex items-center space-x-1 text-xs font-medium text-gray-700 uppercase tracking-wider hover:text-primary-600"
                  >
                    <span>Name</span>
                    {getSortIcon('name')}
                  </button>
                </th>
                <th className="px-6 py-3 text-left">
                  <button
                    onClick={() => handleSort('username')}
                    className="flex items-center space-x-1 text-xs font-medium text-gray-700 uppercase tracking-wider hover:text-primary-600"
                  >
                    <span>Username</span>
                    {getSortIcon('username')}
                  </button>
                </th>
                <th className="px-6 py-3 text-left">
                  <button
                    onClick={() => handleSort('email')}
                    className="flex items-center space-x-1 text-xs font-medium text-gray-700 uppercase tracking-wider hover:text-primary-600"
                  >
                    <span>Email</span>
                    {getSortIcon('email')}
                  </button>
                </th>
                <th className="px-6 py-3 text-left">
                  <button
                    onClick={() => handleSort('phone')}
                    className="flex items-center space-x-1 text-xs font-medium text-gray-700 uppercase tracking-wider hover:text-primary-600"
                  >
                    <span>Phone</span>
                    {getSortIcon('phone')}
                  </button>
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-700 uppercase tracking-wider">
                  Company
                </th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {paginatedUsers.length > 0 ? (
                paginatedUsers.map((user) => (
                  <tr key={user.id} className="hover:bg-zinc-50 transition-colors">
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                      {user.id}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap">
                      <div className="text-sm font-medium text-gray-900">{user.name}</div>
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {user.username}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {user.email}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {user.phone}
                    </td>
                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-600">
                      {user.company.name}
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan={6} className="px-6 py-12 text-center text-gray-500">
                    No users found matching your search criteria
                  </td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>

      {/* Pagination */}
      {totalPages > 1 && (
        <div className="flex items-center justify-between">
          <button
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-zinc-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Previous
          </button>

          <div className="flex space-x-2">{renderPaginationButtons()}</div>

          <button
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
            className="px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-gray-300 rounded-md hover:bg-zinc-50 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default UserTable;
