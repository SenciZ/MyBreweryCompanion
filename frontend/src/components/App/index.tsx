import React from "react";
import { BrowserRouter } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { AppData } from "../../contexts/appData";
import { GlobalStyle } from "../../styles/global";
import { NavBar } from "../Header";
import { Hooks } from "../Hooks";
import { MainRouter } from "../MainRouter";
import { theme } from '../../styles/themes'


interface IProps {
  classname?: string;
};

export const App: React.FC<IProps> = () => {

  return (
      <AppData>
        <ThemeProvider theme={ theme }>
          <BrowserRouter>
            <GlobalStyle/>
            <Hooks />
            <NavBar />
            <MainRouter/>
          </BrowserRouter>
        </ThemeProvider>
      </AppData>
  )
};