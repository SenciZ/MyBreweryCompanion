import React, {useCallback, useEffect} from 'react'
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { AboutPageContainer } from './styles'

type Props = {}

interface IBreweryType {
  name: string;
}

export const About = (props: Props) => {
  const hello = useSelector((state: RootState) => state.helloWorld.value);
  console.log(hello)



  // const renderSearchResults = useCallback((): any => {
  //   if (hello.length === 0) return null;
  //   hello.map((item: IBreweryType) => {
  //     return (
  //       <h1>{item.name}</h1>
  //     )
  //   })
  // }, [hello])

  // useEffect(()=>{
  //   renderSearchResults();
  // }, [hello, renderSearchResults])

  return (
    <AboutPageContainer>
      { hello.map((item: IBreweryType) => {
      return (
        <h1>{item.name}</h1>
      )
    })}
    </AboutPageContainer>
  )
}

