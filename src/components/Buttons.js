import React, { useContext, useRef } from 'react'
import { ColorContext, UPDATE_COLOR } from './Color'

export default function Buttons() {
  const { dispatch } = useContext(ColorContext)
  const inputEl = useRef(null)

  const btnClicked = () => {
    inputEl.current.value = 'I am Maxb'
    console.log(inputEl)
  }

  return (
    <div>
      <button onClick={()=>{dispatch({type: UPDATE_COLOR, color: 'red'})}}>红色</button>
      <button onClick={()=>{dispatch({type: UPDATE_COLOR, color: 'yellow'})}}>黄色</button>
      <br/>
      <br/>
      <input ref={inputEl} type="text"></input>
      <button onClick={btnClicked}>input上设置文字</button>
    </div>
  )
}
