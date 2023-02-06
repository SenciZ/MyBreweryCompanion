import React, { createContext, useState, useEffect} from 'react'


interface AppContextProps {
    name: string,
}

const AppDataContext = createContext<AppContextProps>({name: ''});

export interface AppDataProps {
    children: React.ReactNode,
}

export const AppData = (props: AppDataProps) => {
    const [name, setName] = useState('Timmy')
  return (
    <AppDataContext.Provider value={{
        name,
    }}>
        {props.children}
    </AppDataContext.Provider>
  )
}

