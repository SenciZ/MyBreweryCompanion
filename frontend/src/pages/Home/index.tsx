import React from 'react'
import { Counter } from '../../components/Counter';
import { HomePageHero } from '../../components/HomePageHero';
import { IntroductionSection } from '../../components/IntroductionSection';
import { useAppData } from '../../contexts/appData';
import { HomePageContainer, HomePageInnerContainer } from './styles';

interface IProps {
  classname?: string;
}

export const Home: React.FC<IProps> = ({ classname = '' }) => {

  function withStyles(Component: any) {
    return (props: any) => {
      return <Component {...props}></Component>
    }
  }

  const Button = (props: any) => <button>{props.text}</button>
  const Text = () => <p>Hello World!</p>
 
const StyledButton = withStyles(Button)
const StyledText = withStyles(Text)
  const { windowWidth, isDesktop } = useAppData()
  return (
    <>
      <HomePageHero />
      <IntroductionSection />
    </>
  )
}



 

