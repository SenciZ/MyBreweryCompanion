import { HeroSearchFieldContainer } from "./styles";
import { useState } from "react";
import { useNavigate } from "react-router";

interface IProps {
    classname?: string;
};

export const HeroSearchField: React.FC<IProps> = ({ classname = '' }) => {
    const [searchString, setSearchString ] = useState('');
    const [missingSearchString, setMissingSearchString] = useState(false);
    const navigate = useNavigate()

    const onSearchStringUpdate = (e: any) => {
        setMissingSearchString(false);
        setSearchString(e.target.value);
    }

    const onSearchBlur = () => {
        if (!!searchString && !missingSearchString) {
            return;
        }
        setMissingSearchString(false);
    }

    const onSearchFocus = () => {
        if (!!searchString) return;
        if (!missingSearchString) {
            setMissingSearchString(false)
        }
    }

    const onSearchClick = async (e: any)=>{
        e.preventDefault();
        if (!searchString){ 
            setMissingSearchString(true);
            return;
        } 
        navigate(`/search?query=${searchString}`);
    }

    return (
        <HeroSearchFieldContainer>
            <label htmlFor='brewery-search' className='screen-reader-only'>Search for a Brewery Input</label>
            <input type='text' required placeholder='Search for a Brewery' id='brewery-search' onChange={ onSearchStringUpdate } onFocus={onSearchFocus } onBlur={onSearchBlur} value={ searchString } aria-labelledby=""/>
            <button type='submit' onClick={onSearchClick}>Search</button>
            <p className="error-message">{!!missingSearchString ? 'Please provide a keyword' : null}</p>
        </HeroSearchFieldContainer>
    )
}