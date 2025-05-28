
import React, { useState, useCallback } from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { User } from './types';
import LandingPage from './components/pages/LandingPage';
import LoginPage from './components/pages/LoginPage';
import RegistrationPage from './components/pages/RegistrationPage';
import AccountSettingsPage from './components/pages/AccountSettingsPage';

const App: React.FC = () => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);
  const navigate = useNavigate();

  const handleLogin = useCallback((user: User) => {
    const mockUser: User = {
      ...user,
      fullName: user.fullName || "Marry Doe", // Fill in if not provided by login form
      phoneNumber: user.phoneNumber || "123-456-7890",
      profilePictureUrl: 'https://picsum.photos/seed/marrydoe/100/100',
      isAgency: user.isAgency !== undefined ? user.isAgency : false, // Default if not provided
    };
    setCurrentUser(mockUser);
    navigate('/account');
  }, [navigate]);

  const handleRegistration = useCallback((user: User) => {
    const mockUser: User = {
      ...user,
      profilePictureUrl: 'https://picsum.photos/seed/newuser/100/100'
    };
    setCurrentUser(mockUser);
    navigate('/account');
  }, [navigate]);

  return (
    <div className="min-h-screen font-sans bg-white">
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route 
          path="/login" 
          element={currentUser ? <Navigate to="/account" /> : <LoginPage onLogin={handleLogin} />} 
        />
        <Route 
          path="/register" 
          element={currentUser ? <Navigate to="/account" /> : <RegistrationPage onRegister={handleRegistration} />} 
        />
        <Route 
          path="/account" 
          element={currentUser ? <AccountSettingsPage user={currentUser} /> : <Navigate to="/login" />} 
        />
        <Route path="*" element={<Navigate to="/" />} /> {/* Fallback route */}
      </Routes>
    </div>
  );
};

export default App;
