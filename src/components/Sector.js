import React, {useState, useEffect, useCallback} from 'react'
import "./styles.css"

export default function Sector(props) {

    const [position, setPosition] = useState('up')
    const [url, setUrl] = useState('https://www.amateurphotographer.co.uk/wp-content/uploads/2017/11/Bliss_Copyright_preview-e1511540750271.jpeg')

    const upBtn =()=>{
        setPosition('up')
    }
    const downBtn =()=>{
        setPosition('down')
    }
    const leftBtn =()=>{
        setPosition('left')
    }
    const rightBtn =()=>{
        setPosition('right')
    }

    const findImage = useCallback((e)=>setUrl(e.target.value))

   useEffect(()=> {
       setUrl(props.newUrl)
   },[props.newUrl]) 
    
   const response =  fetch(url, {mode: 'no-cors'})

   const sendRequest = ()=>{
           if (response){
        return (
            <>
            <div className='matrix'>
                <img src={url} alt='not found' className={position}/>
            </div>
            <button onClick={upBtn}> /\ </button>
            <button onClick={downBtn}> \/</button>
            <button onClick={leftBtn}> -= </button>
            <button onClick={rightBtn}> =- </button>
            <input onChange={findImage} value={url}/>
            </>  
        )
    } else if (!response) {
           return <div>
                <h1> error </h1>
            </div>
       }
   }
    return (
        <>
        {sendRequest()}
        </>  
    )
}
