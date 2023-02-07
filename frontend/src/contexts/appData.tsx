import React, { createContext, useState, useEffect, useContext} from 'react'

type AppDataContextType = {
  itemOne: string;
  setItemOne: React.Dispatch<React.SetStateAction<string>>;
}

export const AppDataContext = createContext<null | AppDataContextType>(null);

export const useAppData = () => useContext(AppDataContext);

interface Props {
  children: React.ReactNode;
}

export const AppData = ({ children }: Props) => {
    const [itemOne, setItemOne] = useState('')
  return (
    <AppDataContext.Provider value={{itemOne, setItemOne}}>
        {children}
    </AppDataContext.Provider>
  )
}

