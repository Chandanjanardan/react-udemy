import React, { useEffect, useState } from 'react'

function useTimer() {
    const [timer,setTimer]=useState(0)
    useEffect(()=>{
        let id = setInterval(()=>{
            setTimer(prev=>prev+1)
            // console.log(timer)
        },1000)
        return ()=>clearInterval(id)
    })
return timer
}

export default useTimer