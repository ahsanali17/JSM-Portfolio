import React, { createContext, useContext, useState } from 'react';
import { GlobalStyle } from '../components/GlobalStyle/GlobalStyle';

type Theme = 'day' | 'night';
interface ThemeContextType {
 theme: Theme;
 toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
 const context = useContext(ThemeContext);
 if (!context) {
  throw new Error('useTheme must be used within a ThemeProvider');
 }
 return context;
};

export const ThemeProvider: React.FC = ({ children }) => {
 const [theme, setTheme] = useState<Theme>('night');

 const toggleTheme = () => {
  setTheme(prevTheme => (prevTheme === 'day' ? 'night' : 'day'));
 };

 return (
  <>
   <GlobalStyle theme={theme} />
   <ThemeContext.Provider value={{ theme, toggleTheme }}>
    {children}
   </ThemeContext.Provider>
  </>
 );
};