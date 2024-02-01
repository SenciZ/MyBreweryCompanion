import React from "react";
import { BrowserRouter } from "react-router-dom";
import { DefaultTheme, ThemeProvider } from "styled-components";
import { AppData } from "../../contexts/appData";
import { GlobalStyle } from "../../styles/global";
import { Header } from "../Header";
import { Hooks } from "../Hooks";
import { MainRouter } from "../MainRouter";
import { theme } from '../../styles/themes'
import { AppContainer } from "./styles";
import { Footer } from "../Footer";

interface IProps {
  classname?: string;
  theme?: DefaultTheme;
};

export const App: React.FC<IProps> = () => {

  return (
    <AppData>
      <ThemeProvider theme={theme}>
        <BrowserRouter>
          <AppContainer className={ 'mainContainer' }>
            <GlobalStyle />
            <Hooks />
            <Header />
            <MainRouter />
            <Footer />
          </AppContainer>
        </BrowserRouter>
      </ThemeProvider>
    </AppData>
  )
};