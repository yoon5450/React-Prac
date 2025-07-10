import React from 'react'
import type { Note } from '../api/getNote'
import { convertSlug } from '@/utils/conversSlug'
import './NoteList.css'

type noteData = {
  id: number,
  title: string
}

type Props = {
  list:Note[]
}

function NoteList({list}:Props) {

  return (
    <div className='NoteList'>
      <h2>노트 필기 목록</h2>
      <ul>
        {list.map(({id, title}:noteData) => {
          const slug = `#${convertSlug(title)}`
          return (<li key={id}><a href={slug}>{title}</a></li>)
          })
          }
      </ul>
    </div>
  )
}

export default NoteList