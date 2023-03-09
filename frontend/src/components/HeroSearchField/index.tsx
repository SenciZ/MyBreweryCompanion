import { HeroSearchFieldContainer } from "./styles";
import { useState } from "react";
import { useNavigate } from "react-router";

interface IProps {
    classname?: string;
};

export const HeroSearchField: React.FC<IProps> = ({ classname = '' }) => {
    const [searchString, setSearchString ] = useState('');
    const navigate = useNavigate()

    const onSearchStringUpdate = (e: any) => {
        setSearchString(e.target.value);
    }

    const onSearchClick = async (e: any)=>{
        e.preventDefault();
        navigate(`/search?brewery=${searchString}`);
    }

    return (
        <HeroSearchFieldContainer>
            <label htmlFor='brewery-search' className='screen-reader-only'>Search for a Brewery Input</label>
            <input type='text' required placeholder='Search for a Brewery' id='brewery-search' onChange={ onSearchStringUpdate } value={ searchString } aria-labelledby=""/>
            <button type='submit' onClick={onSearchClick}>Search</button>
        </HeroSearchFieldContainer>
    )
}