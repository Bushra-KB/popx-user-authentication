
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Button from '../common/Button';

const LandingPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-end min-h-screen bg-white p-6 sm:p-8">
      <div className="w-full max-w-xs mx-auto">
        <div className="mb-10"> {/* Spacer to push content to bottom */}
        </div>
        <h1 className="text-2xl font-bold text-popx-dark-text mb-2">Welcome to PopX</h1>
        <p className="text-sm text-popx-gray-text mb-8">Lorem ipsum dolor sit amet, consectetur adipiscing elit,</p>
        <div className="space-y-3">
          <Button onClick={() => navigate('/register')} fullWidth variant="primary">
            Create Account
          </Button>
          <Button onClick={() => navigate('/login')} fullWidth variant="secondary">
            Already Registered? Login
          </Button>
        </div>
      </div>
    </div>
  );
};

export default LandingPage;
