import { H1 } from "../../styles/headings";
import { HeroSearchField } from "../HeroSearchField";
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
                <p>search breweries nation wide below.</p>
                <HeroSearchField />
            </HeroSectionInfo>
        </HeroSectionInner>
       </HeroSectionContainer>   
    )
}