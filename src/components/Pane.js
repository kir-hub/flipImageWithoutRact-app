import "./styles.css"
import Sector from './Sector'
import React, { useState, useRef, useCallback, useEffect } from 'react'
import Input from "./Input"

export default function Pane() {
    const defaultValue ={
        url: 'https://ath2.unileverservices.com/wp-content/uploads/sites/4/2020/02/IG-annvmariv-1024x1016.jpg'
    }
    const [newUrl, setNewUrl] = useState('')
    const newUrlCallback = useCallback((e) => setNewUrl(e.target.value) )

    const displayPic = (value)=> {
        console.log(value);
        setNewUrl(value)}
    
   
    return (
        <>
        <div className='upper'> 
            <span><Sector newUrl={newUrl}/> </span>
            <span><Sector newUrl={newUrl}/> </span>
        </div >
        <div className='upper'> 
            <span><Sector newUrl={newUrl}/> </span>
            <span><Sector newUrl={newUrl}/> </span>
        </div>
        <Input funcOnclick={displayPic}/>
        
        {/* <input onChange={newUrlCallback} value={newUrl}/>
        <button onClick={displayPic}>Display</button> */}
        </>
    )
}
