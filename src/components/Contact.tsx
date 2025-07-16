import React, { createContext, useContext, useState, ReactNode } from 'react';

interface DeveloperAuthContextType {
  isAuthenticated: boolean;
  toggleAuth: () => void;
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
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const toggleAuth = () => {
    setIsAuthenticated(prev => !prev);
  };

  return (
    <DeveloperAuthContext.Provider value={{ isAuthenticated, toggleAuth }}>
      {children}
    </DeveloperAuthContext.Provider>
  );
};