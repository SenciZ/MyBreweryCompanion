import { HeroSearchFieldContainer } from "./styles";
import { useState } from "react";
import { change } from "../../reducers/helloWorldReducer";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

interface IProps {
    classname?: string;
};

export const HeroSearchField: React.FC<IProps> = ({ classname = '' }) => {
    const [searchString, setSearchString ] = useState('');
    const dispatch = useDispatch();
    const navigate = useNavigate()

    const onSearchStringUpdate = (e: any) => {
        setSearchString(e.target.value);
    }

    const onSearchClick = async ()=>{
        fetch(`/brewery-search?name=${searchString}`)
            .then( res => res.json())
            .then( data => {
                setSearchString('');
                dispatch(change(data));
                console.log(data)
                navigate('/about');
            });
    }

    return (
        <HeroSearchFieldContainer>
            <label htmlFor='brewery-search' className='screen-reader-only'>Search for a Brewery Input</label>
            <input type='text' placeholder='Search for a Brewery' id='brewery-search' onChange={ onSearchStringUpdate } value={ searchString } aria-labelledby=""/>
            <button type='button' onClick={onSearchClick}>Search</button>
        </HeroSearchFieldContainer>
    )
}