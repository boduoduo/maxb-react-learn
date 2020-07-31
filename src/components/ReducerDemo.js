import React, { useReducer } from 'react'

export default function ReducerDemo() {
  const [count, dispatch] = useReducer((state, action) => {
    switch (action) {
      case 'add':
        return state+1
      case 'sub':
        return state-1
      default:
        return state
    }
  }, 0)
  return (
    <div>
        <h2>分数：{count}</h2>
        <button onClick={()=>{dispatch('add')}}>增加</button>
        <button onClick={()=>{dispatch('sub')}}>减少</button>
    </div>
  )
}
