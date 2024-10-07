import React from 'react'
import style from './style.module.scss'

const Button = ({text}) => {
  return (
    <button className={style.button}>
        {text}
    </button>
  )
}

export default Button
