import React from "../../lib/react.js";


export function AvatarList({lang, children}){
  return (
    <ul lang='en' className='avatarList'>
      {children}
    </ul>
  )
}