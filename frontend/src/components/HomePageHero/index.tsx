import { H1 } from "../../styles/headings";
import { HeroSectionContainer, HeroSectionInfo, HeroSectionInner } from "./styles";

interface IProps {
    classname?: string;
}

export const HomePageHero: React.FC<IProps> = () => {
    return (
       <HeroSectionContainer className='homepage-hero-section'>
        <HeroSectionInner>
            <HeroSectionInfo>
                <H1 className="hero-section-title">Your one stop brewery guide, tracker and search tool...</H1>
            </HeroSectionInfo>
        </HeroSectionInner>
       </HeroSectionContainer>   
    )
}