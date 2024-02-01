import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { increment, decrement } from "../../reducers/counterReducer";
import { change } from '../../reducers/helloWorldReducer'


interface IProps {
    classname?: string;
}

export const Counter: React.FC<IProps> = ({
    classname = '',
}) => {
    const count = useSelector((state: RootState) => state.counter.value);
    const hello = useSelector((state: RootState) => state.helloWorld.value);
    const dispatch = useDispatch();

    const incrementCounter = () => {
        dispatch(increment())
    }

    // const changeText = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     dispatch(change(e.currentTarget.value))
    // }

    return (
        <>
        <p className={ classname }>{ count }</p>
        <p className={ classname }>{ hello }</p>
        {/* <input type="text" onChange={changeText}/> */}
        <button onClick={incrementCounter}>Increment</button>
        </>
    )
}