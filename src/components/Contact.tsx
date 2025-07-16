import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DeveloperAuthContextType {
  isAuthenticated: boolean;
  login: (password: string) => boolean;
  logout: () => void;
}

const DeveloperAuthContext = createContext<DeveloperAuthContextType | undefined>(undefined);

export const useDeveloperAuth = () => {
  const context = useContext(DeveloperAuthContext);
  if (context === undefined) {
    throw new Error('useDeveloperAuth must be used within a DeveloperAuthProvider');
  }
  return context;
};

interface DeveloperAuthProviderProps {
  children: ReactNode;
}

export const DeveloperAuthProvider: React.FC<DeveloperAuthProviderProps> = ({ children }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(() => {
    // Check if user was previously authenticated
    return localStorage.getItem('developerAuth') === 'true';
  });

  const login = (password: string): boolean => {
    // Hardcoded password for demonstration purposes
    const correctPassword = 'harshit2005';
    
    if (password === correctPassword) {
      setIsAuthenticated(true);
      localStorage.setItem('developerAuth', 'true');
      return true;
    }
    return false;
  };

  const logout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem('developerAuth');
  };

  const value = {
    isAuthenticated,
    login,
    logout
  };

  return (
    <DeveloperAuthContext.Provider value={value}>
      {children}
    </DeveloperAuthContext.Provider>
  );
};