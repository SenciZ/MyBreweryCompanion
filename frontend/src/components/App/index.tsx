import React from "react";
import { AppData } from "../../contexts/appData";
import useWindowWidth from "../../hooks/useWindowWidth";
import { NavBar } from "../Header";

import { AppContainer } from "./styles";


interface IProps {
  classname?: string;
};

export const App: React.FC<IProps> = ({ classname = '' }) => {
  const width = useWindowWidth();

  return (
    <AppData>
      <AppContainer className={ classname }>
        <h1>This is app container <span>{width}</span></h1>
        <NavBar />
      </AppContainer>
    </AppData>
  )
};