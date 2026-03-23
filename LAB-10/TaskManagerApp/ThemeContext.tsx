import React, { createContext, useState, useContext, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const lightColors = {
  background: '#f8fafc',
  card: '#ffffff',
  text: '#0f172a',
  textSecondary: '#64748b',
  border: '#e2e8f0',
  tint: '#3b82f6',
  surface: '#f1f5f9',
  danger: '#ef4444',
  success: '#10b981',
  warning: '#f59e0b',
  purple: '#8b5cf6',
  white: '#ffffff'
};

export const darkColors = {
  background: '#0f172a',
  card: '#1e293b',
  text: '#ffffff',
  textSecondary: '#94a3b8',
  border: '#334155',
  tint: '#3b82f6',
  surface: '#334155',
  danger: '#ef4444',
  success: '#10b981',
  warning: '#f59e0b',
  purple: '#8b5cf6',
  white: '#ffffff'
};

export const ThemeContext = createContext({
  isDarkMode: true,
  toggleTheme: () => {},
  colors: darkColors,
});

export const ThemeProvider = ({ children }: any) => {
  const [isDarkMode, setIsDarkMode] = useState(true);

  useEffect(() => {
    AsyncStorage.getItem('@theme').then(saved => {
      if (saved === 'light') setIsDarkMode(false);
    });
  }, []);

  const toggleTheme = () => {
    const newTheme = !isDarkMode;
    setIsDarkMode(newTheme);
    AsyncStorage.setItem('@theme', newTheme ? 'dark' : 'light');
  };

  return (
    <ThemeContext.Provider value={{
      isDarkMode,
      toggleTheme,
      colors: isDarkMode ? darkColors : lightColors
    }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
