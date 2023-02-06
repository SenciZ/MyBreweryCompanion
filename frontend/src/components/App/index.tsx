import React, { useEffect, useContext } from "react";
import { AppData, AppDataProps } from "../../contexts/appData";

import { AppContainer } from "./styles";


interface IProps {
  classname?: string;
};

export const App: React.FC<IProps> = ({ classname = '' }) => {


  useEffect(() => {
    console.log('adsfas')

  }, [])

  return (
    <AppData>
      <AppContainer className={ classname }>
        <h1>This is app container {name} </h1>
        <h2>{}</h2>
      </AppContainer>
    </AppData>
  )
};