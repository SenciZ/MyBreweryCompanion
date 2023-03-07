import { HeroSearchFieldContainer } from "./styles";

interface IProps {
    classname?: string;
};

export const HeroSearchField: React.FC<IProps> = ({ classname = '' }) => {
    return (
        <HeroSearchFieldContainer>
            <label htmlFor='brewery-search' className='screen-reader-only'>Search for a Brewery Input</label>
            <input type='text' placeholder='Search for a Brewery' id='brewery-search' aria-labelledby=""/>
            <button type='button'>Search</button>
        </HeroSearchFieldContainer>
    )
}