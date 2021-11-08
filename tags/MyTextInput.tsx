import React, { useState } from 'react'
import { TextInput } from 'react-native'
import { myDirection,isRTL } from '../vanillaLocalization';

const MyTextInput = (props:any) => {
    
const [input, setInput] = useState("")

    const inputHandler = async(text) => {
        let check = await isRTL();

        if(check)
            text = text.substring(text.length-1,text.length) + text.substring(0,text.length-1);
        
            setInput(text);
    }

    return (
        <TextInput value = {input} onChangeText={inputHandler} {...props} style = {{...props.style, textAlign: myDirection().start}} >
            {props.children}
        </TextInput>
    )
}

export default MyTextInput;
