import React, {useCallback, useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { AboutPageContainer } from './styles'
import { changeLoading } from "../../reducers/helloWorldReducer";
import { useLocation } from 'react-router';


type Props = {}

interface IBreweryType {
  name: string;
}

export const About = (props: Props) => {
  const hello = useSelector((state: RootState) => state.helloWorld.value);
  const isLoading = useSelector((state: RootState) => state.helloWorld.isLoading);
  const dispatch = useDispatch();
  console.log(hello)
  const queryParams = new URLSearchParams(useLocation().search);

  useEffect(()=>{
    if(queryParams.get('search')) {
      console.log('//////// search query')
      console.log(queryParams.get('search'));
    }
  }, [queryParams])

  const renderSearchResults = useCallback((): any => {
    if (hello.length === 0) return null;
    const content: JSX.Element[] = hello.map((item: IBreweryType) => {
      return (
        <h1>{item.name}</h1>
      )
    });
    dispatch(changeLoading(false));
    return content;
  }, [hello]);

console.log(renderSearchResults())
  return (
    <AboutPageContainer>
      { !!isLoading ? <h1>Loading</h1> : renderSearchResults() }
    </AboutPageContainer>
  )
}

