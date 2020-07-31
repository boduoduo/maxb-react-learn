import React from 'react'
import ShowArea from './ShowArea'
import Buttons from './Buttons'
import { Color } from './Color'

export default function HookRedux() {
  return (
    <div>
      <Color>
        <ShowArea/>
        <Buttons/>
      </Color>
    </div>
  )
}
