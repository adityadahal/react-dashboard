import React, { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '../store/hooks';
import { fetchUsersAsync } from '../features/users/usersSlice';
import UserTable from '../features/users/UserTable';
import Loading from '../components/common/Loading';
import ErrorMessage from '../components/common/ErrorMessage';

const DataPage: React.FC = () => {
  const dispatch = useAppDispatch();
  const { loading, error, users } = useAppSelector((state) => state.users);

  useEffect(() => {
    if (users.length === 0) {
      dispatch(fetchUsersAsync());
    }
  }, [dispatch, users.length]);

  const handleRetry = () => {
    dispatch(fetchUsersAsync());
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">User Data</h1>
          <p className="text-gray-600 mt-1">
            Browse and search through user information from JSONPlaceholder API
          </p>
        </div>
      </div>

      {error && <ErrorMessage message={error} onRetry={handleRetry} />}

      {loading && users.length === 0 ? (
        <div className="bg-white rounded-lg shadow-md p-12">
          <Loading />
          <p className="text-center text-gray-600 mt-4">Loading user data...</p>
        </div>
      ) : users.length > 0 ? (
        <UserTable />
      ) : (
        !loading && !error && (
          <div className="bg-white rounded-lg shadow-md p-12 text-center">
            <svg className="w-16 h-16 text-gray-400 mx-auto mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 13V6a2 2 0 00-2-2H6a2 2 0 00-2 2v7m16 0v5a2 2 0 01-2 2H6a2 2 0 01-2-2v-5m16 0h-2.586a1 1 0 00-.707.293l-2.414 2.414a1 1 0 01-.707.293h-3.172a1 1 0 01-.707-.293l-2.414-2.414A1 1 0 006.586 13H4" />
            </svg>
            <h3 className="text-lg font-medium text-gray-900 mb-2">No Data Available</h3>
            <p className="text-gray-600 mb-4">Please make sure that data is available!</p>
          </div>
        )
      )}
    </div>
  );
};

export default DataPage;
