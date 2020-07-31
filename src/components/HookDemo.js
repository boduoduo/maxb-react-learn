import React, {useState, useEffect, createContext, useContext} from 'react'

const AgeContext = createContext()

function AgeSon() {
  const age = useContext(AgeContext)
  return (
    <h2>{age}岁</h2>
  )
}

export default function HookDemo() {
  const [age, setAge] = useState(18)
  const [height] = useState(180)

  useEffect(() => {
    // componentDidMount和componentDidUpdate
    console.log(`I am ${age} years old`)
    return () => {
      console.log('componentWillUnmount')
    }
    // 当age变化时，解绑 componentWillUnmount
  }, [age])

  return (
    <div>
      <p>Maxb,今年{age}</p>
      <p>身高{height}cm</p>
      <button onClick={()=>{setAge(age+1)}}>Add Age</button>
      <AgeContext.Provider value={age}>
        <AgeSon/>
      </AgeContext.Provider>
    </div>
  )
}
