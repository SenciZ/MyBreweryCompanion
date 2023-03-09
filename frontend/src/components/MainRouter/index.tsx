import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About } from '../../pages/About'
import { Home } from '../../pages/Home'
import { Search } from '../../pages/Search'
import { MainContentContainer } from './styles'

type IProps = {}

export const MainRouter: React.FC<IProps> = () => {
  return (
    <MainContentContainer>
        <Routes>
            <Route path='about' element={<About />} />
            <Route path='search' element={<Search />} />
            <Route path='*' element={<Home />} />
        </Routes>
    </MainContentContainer>
  )
}