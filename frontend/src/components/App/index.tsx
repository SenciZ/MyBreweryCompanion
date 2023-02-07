import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppData } from "../../contexts/appData";
import { NavBar } from "../Header";
import { Hooks } from "../Hooks";
import { MainRouter } from "../MainRouter";

import { AppContainer } from "./styles";


interface IProps {
  classname?: string;
};

export const App: React.FC<IProps> = ({ classname = '' }) => {

  return (
      <AppData>
        <BrowserRouter>
          <Hooks />
          <NavBar />
          <MainRouter/>
        </BrowserRouter>
      </AppData>
  )
};