
import React, { useState } from 'react';
import { User } from '../../types';
import Input from '../common/Input';
import Button from '../common/Button';

interface LoginPageProps {
  onLogin: (user: User) => void;
}

const LoginPage: React.FC<LoginPageProps> = ({ onLogin }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Basic validation can be added here
    if (!email || !password) {
        alert("Please fill in all fields.");
        return;
    }
    onLogin({ email, password } as User); // Cast as User, other fields will be mocked in App.tsx
  };

  return (
    <div className="flex flex-col justify-start min-h-screen bg-white p-6 sm:p-8 pt-12 sm:pt-16">
      <div className="w-full max-w-xs mx-auto">
        <h1 className="text-2xl font-bold text-popx-dark-text mb-2">Signin to your PopX account</h1>
        <p className="text-sm text-popx-gray-text mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        <form onSubmit={handleSubmit}>
          <Input
            label="Email Address"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter email address"
            required
          />
          <Input
            label="Password"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter password"
            required
          />
          <Button type="submit" fullWidth className="mt-6 bg-gray-300 hover:bg-gray-400 text-white"> 
            {/* Mockup shows disabled-like button, actual primary should be popx-purple */}
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};
// Note: The login button in the mockup looks disabled (gray). 
// For a functional app, it should be active (e.g., bg-popx-purple). 
// I've used gray as per mockup visuals, but this can be changed to `variant="primary"` for an active button.
// Changed to gray button for mockup accuracy. For a real app, use:
// <Button type="submit" fullWidth variant="primary" className="mt-6">Login</Button>

export default LoginPage;
