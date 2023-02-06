import React, { useContext } from 'react'
import { AppData } from '../../contexts/appData'

function TestG() {

  const { name } = useContext(AppData)
  return (
    <div>{name}</div>
  )
}

export default TestG