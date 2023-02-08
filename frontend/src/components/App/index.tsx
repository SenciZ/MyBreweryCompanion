import React from "react";
import { BrowserRouter } from "react-router-dom";
import { AppData } from "../../contexts/appData";
import { GlobalStyle } from "../../styles/global";
import { NavBar } from "../Header";
import { Hooks } from "../Hooks";
import { MainRouter } from "../MainRouter";



interface IProps {
  classname?: string;
};

export const App: React.FC<IProps> = ({ classname = '' }) => {

  return (
      <AppData>
            <BrowserRouter>
              <GlobalStyle/>
              <Hooks />
              <NavBar />
              <MainRouter/>
            </BrowserRouter>
      </AppData>
  )
};