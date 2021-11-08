import React from "react"
import { Text } from "react-native"

const MyText = (props:any) => {
    return (
        <Text  {...props} style = {{...props.style, textAlign: "left"}} >
            {props.children}
        </Text>
    )
}


export default MyText;
