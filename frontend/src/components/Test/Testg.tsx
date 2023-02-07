import React from 'react'
import { useAppData } from '../../contexts/appData'
import useWindowWidth from '../../hooks/useWindowWidth';

function TestG() {

  const {isDesktop, windowWidth} = useAppData()
  const width = useWindowWidth();

  // console.log(windowWidth)
  return (
    <div>This is TestG Component {windowWidth}
    {!isDesktop && <h1>Mobile View <span>{width}</span></h1>}
     </div>
  )
}

export default TestG