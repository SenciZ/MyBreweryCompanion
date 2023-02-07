import React, { useEffect, useContext } from "react";
import { AppData } from "../../contexts/appData";
import TestG from "../Test/Testg";

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
        <h1>This is app container </h1>
        <TestG />
      </AppContainer>
    </AppData>
  )
};