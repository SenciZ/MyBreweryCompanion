import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { About } from '../../pages/About'
import { Home } from '../../pages/Home'

type Props = {}

export const MainRouter = (props: Props) => {
  return (
        <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
        </Routes>
  )
}