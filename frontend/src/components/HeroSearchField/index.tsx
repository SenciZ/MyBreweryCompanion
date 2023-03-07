import { HeroSearchFieldContainer } from "./styles";
import { useState } from "react";

interface IProps {
    classname?: string;
};

export const HeroSearchField: React.FC<IProps> = ({ classname = '' }) => {
    const [searchString, setSearchString ] = useState('');

    const onSearchStringUpdate = (e: any) => {
        setSearchString(e.target.value);
    }

    const onSearchClick = async ()=>{
        fetch(`/brewery-search?name=${searchString}`)
            .then( res => res.json())
            .then( data => console.log(data));
    }

    console.log(searchString);
    return (
        <HeroSearchFieldContainer>
            <label htmlFor='brewery-search' className='screen-reader-only'>Search for a Brewery Input</label>
            <input type='text' placeholder='Search for a Brewery' id='brewery-search' onChange={ onSearchStringUpdate } value={ searchString } aria-labelledby=""/>
            <button type='button' onClick={onSearchClick}>Search</button>
        </HeroSearchFieldContainer>
    )
}