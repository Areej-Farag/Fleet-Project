import React, { createContext, useEffect, useState } from 'react';
import { lightColors, darkColors } from '../Components/Atoms/Colors';

export const ColorContext = createContext();

export const ColorProvider = ({ children }) => {
  const [colors, setColors] = useState(() => {
    const isDark = document.body.classList.contains('dark');
    return isDark ? darkColors : lightColors;
  });

  useEffect(() => {
    const observer = new MutationObserver(() => {
      const isDark = document.body.classList.contains('dark');
      setColors(isDark ? darkColors : lightColors);
    });

    observer.observe(document.body, { attributes: true, attributeFilter: ['class'] });

    return () => observer.disconnect();
  }, []);

  return (
    <ColorContext.Provider value={colors}>
      {children}
    </ColorContext.Provider>
  );
};
