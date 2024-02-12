import React, { ReactNode, createContext, useContext, useState } from 'react';
import { GlobalStyle } from '../components/GlobalStyle/GlobalStyle';

type Theme = 'day' | 'night';
interface ThemeContextType {
 theme: Theme;
 toggleTheme: () => void;
}

interface ThemeProviderProps {
 children: ReactNode; // This tells TypeScript that children can be any valid React node
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export const useTheme = () => {
 const context = useContext(ThemeContext);
 if (!context) {
  throw new Error('useTheme must be used within a ThemeProvider');
 }
 return context;
};

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children }) => {
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