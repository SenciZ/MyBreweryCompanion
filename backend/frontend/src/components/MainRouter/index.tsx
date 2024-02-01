import React from 'react'
import { Route, Routes } from 'react-router-dom'
import { About } from '../../pages/About'
import { Home } from '../../pages/Home'
import { Browse } from '../../pages/Browse'
import { MainContentContainer } from './styles'
import { Search } from '../../pages/Search'

type IProps = {}

export const MainRouter: React.FC<IProps> = () => {
  return (
    <MainContentContainer>
      <Routes>
        <Route path='about' element={<About />} />
        <Route path='search' element={<Search />} />
        <Route path='browse' element={<Browse />} />
        <Route path='*' element={<Home />} />
      </Routes>
    </MainContentContainer>
  )
}