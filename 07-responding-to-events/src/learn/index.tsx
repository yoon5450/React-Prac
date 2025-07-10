import React from 'react'
import NaviContents from './NaviContents'
import View from './View'
import ScrollDown from './ScrollDown'

function Learn() {
  return (
    <div className='Learn'>
      <NaviContents />
      <View.RespondingToEvents />
      <ScrollDown />
    </div>
  )
}

export default Learn