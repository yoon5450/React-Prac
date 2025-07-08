import {AvatarList} from '../components/avatar/AvartarList.js';
import {AvatarItem} from '../components/avatar/AvatarItem.js'
import React, { createElement as h } from "../lib/react.js";
import { profileData } from '../data/data.js';



export function AvartarPage(){
  console.log(profileData.items.map(({id, title}) => h(AvatarItem, {key:id, id, title})))
  return h(AvatarList, {lang:'en', 
       children: profileData.items.map(({name, status})=> h(AvatarItem,{ key:name, name, status }))
  })
}