import React from 'react';
import { Sidebar } from './Sidebar';
import { ConnectWallet } from './ConnectWallet';
import { useTheme } from '../context/ThemeContext';

interface LayoutProps {
  children: React.ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { theme } = useTheme();

  return (
    <div className={`min-h-screen transition-colors duration-200 ${
      theme === 'dark' 
        ? 'bg-gradient-to-br from-[#15202B] to-[#192734]' 
        : 'bg-gradient-to-br from-gray-50 to-gray-100'
    }`}>
      <Sidebar />
      
      {/* Connect Wallet Button */}
      <div className="fixed top-4 right-4 z-50">
        <ConnectWallet />
      </div>

      <main className="lg:ml-64 min-h-screen">
        {children}
      </main>
    </div>
  );
};