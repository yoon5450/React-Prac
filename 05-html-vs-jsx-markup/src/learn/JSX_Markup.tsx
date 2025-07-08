import React from 'react'
import DataBinding from './DataBinding'
import * as learnData from '@/data/learn'
import { librarys, statusMessage } from '@/data/learn'
import ConditionRendering from './ConditionRendering'
import getRandom from '@/utils/getRandom'
import ConditionalDisplay from './ConditionalDisplay'
import RenderList from './RenderList'

function JSX_Markup() {
  let {isShowReactImage, reactLibrary, statusMessageWithId} = learnData

  return (
    <dl className='descriptionList'>
      <DataBinding status={statusMessage}/>
      <ConditionRendering imageType={librarys[getRandom(3)]}/>
      <ConditionalDisplay isShowReactImage={isShowReactImage}/>
      <RenderList reactLibrary={reactLibrary} items={statusMessageWithId}/>
    </dl>
  )
}

export default JSX_Markup

// dl : 용어에 대한 목록
// dt : 용어에 대한 
// dt : 용어에 대한 설명