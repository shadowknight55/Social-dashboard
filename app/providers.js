'use client';

import { SessionProvider } from 'next-auth/react';
import { ThemeProvider } from './context/ThemeContext';

export default function Providers({ children }) {
  return (
    <SessionProvider>
      <ThemeProvider>
        {children}
      </ThemeProvider>
    </SessionProvider>
  );
} 