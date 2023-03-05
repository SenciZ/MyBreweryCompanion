import { H1 } from "../../styles/headings";
import { HeroSectionContainer, HeroSectionInner } from "./styles";

interface IProps {
    classname?: string;
}

export const HomePageHero: React.FC<IProps> = () => {
    return (
       <HeroSectionContainer className='homepage-hero-section'>
        <HeroSectionInner>
            <H1>Hero Section</H1>
        </HeroSectionInner>
       </HeroSectionContainer>   
    )
}