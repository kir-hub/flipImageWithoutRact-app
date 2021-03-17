import React, {useState, useCallback} from 'react'

export default function Input(props) {
    const {funcOnclick} = props
    const [value, setValue] = useState('')
    const valueHandler = useCallback((e)=> setValue(e.target.value))
    const funcToValue = ()=> {
        console.log(value);
        setValue(value)
        funcOnclick(value)}

    return (
        <div>
            <input onChange={valueHandler} value={value}/>
            <button onClick={funcToValue}>Display</button>
        </div>
    )
}
