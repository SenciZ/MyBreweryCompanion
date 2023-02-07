import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { AppData } from "../../contexts/appData";
import useWindowWidth from "../../hooks/useWindowWidth";
import { Home } from "../../pages/Home";
import { NavBar } from "../Header";
import { Hooks } from "../Hooks";
import { MainRouter } from "../MainRouter";

import { AppContainer } from "./styles";


interface IProps {
  classname?: string;
};

export const App: React.FC<IProps> = ({ classname = '' }) => {

  return (
      <BrowserRouter>
      <AppData>
        <NavBar />
        <MainRouter/>
      </AppData>
      </BrowserRouter>
  )
};