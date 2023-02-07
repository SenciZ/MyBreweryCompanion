import {useState, useEffect, useCallback } from 'react'



function useWindowWidth(): number {
    const [width, setWidth] = useState<number>(window.innerWidth);

    const onWindowResize = useCallback(() =>{
        setWidth(window.innerWidth)
        console.log(width)
    },[width]);

    useEffect(()=>{
        window.removeEventListener('resize', onWindowResize);
        window.addEventListener('resize', onWindowResize)
        console.log(width)

        return () => window.removeEventListener('resize', onWindowResize)
    },[width, onWindowResize])

    return width;
}

export default useWindowWidth
