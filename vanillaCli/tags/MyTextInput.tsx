import React from 'react'
import { TextInput, I18nManager } from 'react-native'


const MyTextInput = (props:any) => {
    

    return (
        <TextInput  {...props} style = {{...props.style, textAlign: I18nManager.isRTL?"right":"left"}} >
            {props.children}
        </TextInput>
    )
}

export default MyTextInput;
