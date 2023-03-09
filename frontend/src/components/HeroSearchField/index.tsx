import { HeroSearchFieldContainer } from "./styles";
import { useState } from "react";
import { change, changeLoading } from "../../reducers/helloWorldReducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

interface IProps {
    classname?: string;
};

export const HeroSearchField: React.FC<IProps> = ({ classname = '' }) => {
    const [searchString, setSearchString ] = useState('');
    const [errorMessage, setErrorMessage] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const onSearchStringUpdate = (e: any) => {
        setSearchString(e.target.value);
    }

    const onSearchClick = async (e: any)=>{
        e.preventDefault();
        dispatch(change([]));
        dispatch(changeLoading(true));
        setIsLoading(true);
        fetch(`/brewery-search?name=${searchString}`)
            .then( res => res.json())
            .then( data => {
                if (!!data.message) {
                    setIsLoading(false);
                    setErrorMessage(data.message);
                    return;
                }
                setSearchString('');
                dispatch(change(data));
                setIsLoading(false);
                navigate('/about');
                console.log(data)
            }).catch(error => console.log(error.message, '/////'));
    }

    return (
        <HeroSearchFieldContainer>
            <label htmlFor='brewery-search' className='screen-reader-only'>Search for a Brewery Input</label>
            <input type='text' required placeholder='Search for a Brewery' id='brewery-search' onChange={ onSearchStringUpdate } value={ searchString } aria-labelledby=""/>
            <button type='submit' onClick={onSearchClick}>{ !!isLoading ? 'Loading' : "Search"}</button>
            { !!errorMessage ? <p className="error-message">{errorMessage}</p> : null }
        </HeroSearchFieldContainer>
    )
}