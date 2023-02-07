import {useState, useEffect } from 'react'



function useWindowWidth(): number {
    const [width, setWidth] = useState<number>(window.innerWidth);

    const onWindowResize = () =>{
        setWidth(window.innerWidth)
    }

    useEffect(()=>{
        window.removeEventListener('resize', onWindowResize);

        window.addEventListener('resize', onWindowResize)
        
        return () => window.removeEventListener('resize', onWindowResize)
    },[])

    return width;
}

export default useWindowWidth
