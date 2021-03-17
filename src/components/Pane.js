import "./styles.css"
import Sector from './Sector'
import React, { useState, useRef, useCallback } from 'react'

export default function Pane() {
    const [newUrl, setNewUrl] = useState('https://ath2.unileverservices.com/wp-content/uploads/sites/4/2020/02/IG-annvmariv-1024x1016.jpg')
    const newUrlCallback = useCallback((e) => setNewUrl(e.target.value))
    const displayPic = ()=>newUrlCallback
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
        <input onChange={newUrlCallback} value={newUrl}/>
        <button onClick={displayPic}>Display</button>
        </>
    )
}
