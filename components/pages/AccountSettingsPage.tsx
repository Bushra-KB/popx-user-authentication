
import React from 'react';
import { User } from '../../types';

interface AccountSettingsPageProps {
  user: User;
}

const AccountSettingsPage: React.FC<AccountSettingsPageProps> = ({ user }) => {
  const profilePicUrl = user.profilePictureUrl || 'https://picsum.photos/100/100';

  return (
    <div className="flex flex-col justify-start min-h-screen bg-gray-100">
      {/* Header bar */}
      <div className="bg-white shadow-sm p-4 sticky top-0 z-10">
        <h1 className="text-lg font-semibold text-popx-dark-text">Account Settings</h1>
      </div>

      <div className="p-4 sm:p-6 flex-grow">
        <div className="bg-white p-0 rounded-lg max-w-md mx-auto"> {/* Removed shadow from here, main container for content */}
          <div className="flex items-start space-x-4 p-4 border-b border-gray-200">
            <div className="relative flex-shrink-0">
              <img
                src={profilePicUrl}
                alt="Profile"
                className="h-20 w-20 rounded-full object-cover"
              />
              <span className="absolute bottom-0 right-0 block h-5 w-5 bg-blue-500 rounded-full border-2 border-white">
                 {/* This is a placeholder for the blue checkmark badge */}
              </span>
            </div>
            <div>
              <h2 className="text-md font-semibold text-popx-dark-text">{user.fullName}</h2>
              <p className="text-xs text-popx-gray-text">{user.email}</p>
            </div>
          </div>
          
          <div className="p-4">
            <p className="text-sm text-popx-dark-text leading-relaxed">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
          </div>
        </div>
      </div>
      
      {/* Dotted line placeholder at the bottom */}
      <div className="flex-shrink-0 p-4 mt-auto">
        <div className="border-t-2 border-dashed border-gray-300 max-w-md mx-auto"></div>
      </div>
    </div>
  );
};

export default AccountSettingsPage;
