import React, { createContext, useState, useEffect, useContext} from 'react'

type AppDataContextType = {
  isDesktop: boolean;
  lastWindowWidth: number;
  windowWidth: number;
  windowVisualViewportHeight: number;
}

export const AppDataContext = createContext<null | AppDataContextType>(null);

export const useAppData = () => useContext(AppDataContext);

interface Props {
  children: React.ReactNode;
}

export const AppData = ({ children }: Props) => {
  const [_appContext, setAppContext] = useState({
    isDesktop: window.innerWidth > 991,
    windowWidth: window.innerWidth,
    lastWindowWidth: window.innerWidth,
    windowVisualViewportHeight: window.visualViewport.height,
  });

  const onWindowResize = () => {
    if (_appContext.windowWidth !== window.innerWidth) {
      const lastWindowWidth = _appContext.windowWidth;
      setAppContext({
        lastWindowWidth,
        isDesktop: window.innerWidth > 991,
        windowWidth: window.innerWidth,
        windowVisualViewportHeight: window.visualViewport.height,
      });
    }
  };

  useEffect(() => {
    window.removeEventListener('resize', onWindowResize);
    window.addEventListener('resize', onWindowResize);

    return () => window.removeEventListener('resize', onWindowResize);
  }, []);  return (
    <AppDataContext.Provider value={_appContext}>
        {children}
    </AppDataContext.Provider>
  )
}

