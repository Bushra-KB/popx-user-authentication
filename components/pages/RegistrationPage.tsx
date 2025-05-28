
import React, { useState } from 'react';
import { User } from '../../types';
import Input from '../common/Input';
import Button from '../common/Button';
import RadioGroup from '../common/RadioGroup';

interface RegistrationPageProps {
  onRegister: (user: User) => void;
}

const RegistrationPage: React.FC<RegistrationPageProps> = ({ onRegister }) => {
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [companyName, setCompanyName] = useState('');
  const [isAgency, setIsAgency] = useState('no'); // 'yes' or 'no'

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !phoneNumber || !email || !password) {
        alert("Please fill in all required* fields.");
        return;
    }
    onRegister({
      fullName,
      phoneNumber,
      email,
      password,
      companyName,
      isAgency: isAgency === 'yes',
    });
  };

  const agencyOptions = [
    { label: 'Yes', value: 'yes' },
    { label: 'No', value: 'no' },
  ];

  return (
    <div className="flex flex-col justify-start min-h-screen bg-white p-6 sm:p-8 pt-12 sm:pt-16">
      <div className="w-full max-w-xs mx-auto">
        <h1 className="text-2xl font-bold text-popx-dark-text mb-6">Create your PopX account</h1>
        <form onSubmit={handleSubmit}>
          <Input
            label="Full Name*"
            id="fullName"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            placeholder="Marry Doe"
            required
          />
          <Input
            label="Phone number*"
            id="phoneNumber"
            type="tel"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            placeholder="Marry Doe" // Mockup says Marry Doe, should be e.g. 9876543210
            required
          />
          <Input
            label="Email address*"
            id="email"
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Marry Doe" // Mockup says Marry Doe, should be e.g. marry@example.com
            required
          />
          <Input
            label="Password*"
            id="password"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Marry Doe" // Mockup says Marry Doe, should be e.g. *********
            required
          />
          <Input
            label="Company name" // Optional, so no asterisk
            id="companyName"
            value={companyName}
            onChange={(e) => setCompanyName(e.target.value)}
            placeholder="Marry Doe" // Mockup says Marry Doe, should be e.g. PopX Ltd.
          />
          <RadioGroup
            label="Are you an Agency?*"
            name="isAgency"
            options={agencyOptions}
            selectedValue={isAgency}
            onChange={(e) => setIsAgency(e.target.value)}
          />
          <Button type="submit" fullWidth variant="primary" className="mt-6">
            Create Account
          </Button>
        </form>
      </div>
    </div>
  );
};

export default RegistrationPage;
