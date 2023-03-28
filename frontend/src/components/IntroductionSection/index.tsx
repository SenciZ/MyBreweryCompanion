import React from 'react';
import { H1, H2, H3, H4 } from '../../styles/headings';
import { ImageContainer, IntroSectionContainer, IntroSectionInnerContainer, MobileImageContainer, TextContainer } from './styles';
import { useAppData } from '../../contexts/appData';

interface IProps {
  classname?: string;
}

export const IntroductionSection: React.FC<IProps> = () => {

  const {windowWidth} = useAppData();

  return (
    <IntroSectionContainer>
      <IntroSectionInnerContainer>
        <TextContainer>
          <H4>RESEARCH AND VIEW OVER 7,000+ BREWERIES</H4>
          { (windowWidth < 768) ? <MobileImageContainer /> : null }
          <H1>Discover Your Next Favorite Brewery</H1>
          <p>Welcome to Brewery Companion, the ultimate companion for all beer enthusiasts! Our vast database of over 7,000 breweries allows you to explore new and exciting breweries in your area and around the country. With our user profile feature, you can keep track of your favorite breweries and beers and connect with other beer lovers. Join our community today and explore the amazing world of beer!</p>
          <button>Create Account</button>
        </TextContainer>
        { (windowWidth > 768) ? <ImageContainer /> : null }
      </IntroSectionInnerContainer>
    </IntroSectionContainer>
  )
}