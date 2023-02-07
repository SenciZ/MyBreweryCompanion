import {useState, useEffect } from 'react'



function useWindowWidth(): number {
    const [width, setWidth] = useState<number>(window.innerWidth);

    const windowResize = () =>{
        setWidth(window.innerWidth)
    }

    useEffect(()=>{
        window.addEventListener('resize', windowResize)
        
        return () => window.removeEventListener('resize', windowResize)
    },[])

    return width;
}

export default useWindowWidth
