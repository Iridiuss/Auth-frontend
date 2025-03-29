// pages/profile.tsx
"use client";
import { useEffect, useState } from 'react';

interface User {
  displayName: string;
  email?: string;
  googleId?: string;
  githubId?: string;
  twitterId?: string;
  linkedinId?: string;
  facebookId?: string;
}

export default function Profile() {
  const [user, setUser] = useState<User | null>(null);

  useEffect(() => {
    // Fetch user data when component mounts
    fetch('http://localhost:3001/auth/current-user', {
      credentials: 'include'
    })
      .then(res => res.json())
      .then(data => setUser(data.user))
      .catch(error => console.error('Error fetching user:', error));
  }, []);

  const handleLogout = () => {
    window.location.href = 'http://localhost:3001/auth/logout';
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-md mx-auto bg-white rounded-xl shadow-lg overflow-hidden">
        <div className="p-8">
          <div className="text-center">
            {/* Profile Avatar */}
            <div className="inline-block h-24 w-24 rounded-full bg-gray-200 ring-4 ring-white mb-4">
              <div className="flex h-full items-center justify-center">
                <svg className="h-12 w-12 text-gray-400" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 20.993V24H0v-2.996A14.977 14.977 0 0112.004 15c4.904 0 9.26 2.354 11.996 5.993zM16.002 8.999a4 4 0 11-8 0 4 4 0 018 0z" />
                </svg>
              </div>
            </div>

            {/* User Info */}
            <h2 className="text-2xl font-bold text-gray-900">
              {user ? user.displayName : 'Loading...'}
            </h2>

            {/* Email Display */}
            {user?.email ? (
              <p className="mt-1 text-sm text-gray-500">
                <span className="inline-flex items-center">
                  <svg className="w-4 h-4 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  {user.email}
                </span>
              </p>
            ) : (
              <p className="mt-1 text-sm text-gray-400 italic">No email provided</p>
            )}

            <p className="mt-2 text-sm text-gray-500">
              Authenticated User
            </p>

            {/* Account Type Badges */}
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              {user?.googleId && (
                <span className="px-3 py-1 text-xs font-medium bg-red-100 text-red-600 rounded-full">
                  Google Account
                </span>
              )}
              {user?.githubId && (
                <span className="px-3 py-1 text-xs font-medium bg-gray-100 text-gray-600 rounded-full">
                  GitHub Account
                </span>
              )}
              {user?.twitterId && (
                <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-600 rounded-full">
                  Twitter Account
                </span>
              )}
              {user?.facebookId && (
                <span className="px-3 py-1 text-xs font-medium bg-indigo-100 text-indigo-600 rounded-full">
                  Facebook Account
                </span>
              )}
              {user?.linkedinId && (
                <span className="px-3 py-1 text-xs font-medium bg-blue-100 text-blue-800 rounded-full">
                  LinkedIn Account
                </span>
              )}
            </div>

            {/* Divider */}
            <div className="mt-6 border-t border-gray-200"></div>

            {/* Logout Button */}
            <button
              onClick={handleLogout}
              className="mt-6 w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-red-600 hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
