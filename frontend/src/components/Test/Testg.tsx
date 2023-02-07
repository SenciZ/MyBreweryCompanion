import React from 'react'
import { useAppData } from '../../contexts/appData'

function TestG() {

  const {itemOne, setItemOne} = useAppData()

  console.log(itemOne)
  return (
    <div>This is TestG Component {itemOne} <button onClick={()=> setItemOne(prev => prev+1)}>Click</button></div>
  )
}

export default TestG