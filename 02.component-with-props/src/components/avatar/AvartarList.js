import { Children } from "../../lib/react.js";
import React, { createElement as h } from "../../lib/react.js";


export function AvatarList({lang, children}){
  return h(
    'ul', {lang:'en', className:'avatarList'},
    children
  )
}