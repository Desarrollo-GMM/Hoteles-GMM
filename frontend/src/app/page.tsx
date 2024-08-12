import React from 'react';
import LoginForm from './pages/login';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-6">
      <LoginForm />
    </main>
  );
}
