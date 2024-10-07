import React from 'react'
import style from  './style.module.scss'
const Title = ({text, type}) => {
    return React.createElement(type, null, text);
}

export default Title
