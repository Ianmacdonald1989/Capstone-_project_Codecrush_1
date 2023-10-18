import React from 'react';
import { UserAuth } from '../context/AuthContext';

export const SignOut = () => {
  const { logOut } = UserAuth();

  const handleSignOut = async () => {
    try {
      await logOut();
      window.location.href = '/login';
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <button className="inline-flex items-center px-4 py-2 text-sm font-medium text-center text-white bg-blue-500 rounded-lg hover:bg-blue-600 focus:ring-focus:outline-none focus:ring-blue-dark:bg-blue-dark:hover:bg-blue-dark:focus:ring-blue shadow-sm" onClick={handleSignOut}>
        Sign Out
      </button>
    </>
  );
};
