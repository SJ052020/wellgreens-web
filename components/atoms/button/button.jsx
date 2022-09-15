import React from 'react'
import style from './button.module.css'

const Button = ({ text, className, onClickHandler, type = 'button', children, disabled }) => {
  return (
    <button disabled={disabled} className={style.mainButton + ' ' + className} type={type} onClick={onClickHandler}>
      {text}
      {children}
    </button>
  )
}

export default Button