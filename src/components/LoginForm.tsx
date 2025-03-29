"use client";
import { useState } from 'react';

const LoginForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [error, setError] = useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Sending data:', formData);
    try {
      const response = await fetch('http://localhost:3001/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        credentials: 'include',
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      console.log('Response:', data);
      if (!response.ok) {
        throw new Error(data.error);
      }

      window.location.href = '/profile';
    } catch (err: any) {
      setError(err.message || 'Login failed');
    }
  };

  return (
    <div className="bg-white max-w-md w-full">
      <form onSubmit={handleLogin} className="space-y-4">
        {error && <div className="text-red-500 text-center text-sm">{error}</div>}

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Email
          </label>
          <input
            type="email"
            value={formData.email}
            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            className="w-full p-2.5 border border-gray-400 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg outline-none transition-colors"
            required
          />
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-medium mb-2">
            Password
          </label>
          <input
            type="password"
            value={formData.password}
            onChange={(e) => setFormData({ ...formData, password: e.target.value })}
            className="w-full p-2.5 border border-gray-400 text-gray-900 focus:border-blue-500 focus:ring-1 focus:ring-blue-500 rounded-lg outline-none transition-colors"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full py-2.5 bg-blue-600 text-white text-sm font-medium rounded-lg hover:bg-blue-700 transition-colors"
        >
          Log In
        </button>
      </form>
    </div>
  );
};

export default LoginForm;