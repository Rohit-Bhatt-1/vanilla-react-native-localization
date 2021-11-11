import React from 'react'
import { Image, I18nManager } from 'react-native'

const MyImage = (props:any) => {
    return (
        <Image {...props} style={{...props.style , transform: [{scaleX: I18nManager.isRTL ? -1 : 1}]}}/>
    )
}

export default MyImage;
