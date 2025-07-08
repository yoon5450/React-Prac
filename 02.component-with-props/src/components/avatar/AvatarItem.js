import React, { createElement as h } from "../../lib/react.js";


  // <ul class="avatarList">
  //   <li class="avatar">
  //     <figure>
  //       <div class="cover">
  //         <img src="/avata/맹구.png" alt="" srcset="" />
  //       </div>
  //       <figcaption>
  //         <img src="/icons/status-online.svg" alt="" srcset="" />
  //       </figcaption>
  //     </figure>
  //   </li>
  // </ul>


export function AvatarItem({name, status = 'offline', size = 64}){

  let iconPath = '';
  let statusMessage = '';


  switch (status){
    case'offline':
      iconPath = '/icons/status-offline.svg';
      statusMessage = '오프라인'
      break;
    case'online':
      iconPath = '/icons/status-online.svg';
      statusMessage = '온라인'
      break;
    case'dont-disturb':
      iconPath = '/icons/status-dont-disturb.svg';
      statusMessage = '방해금지'
      break;
    case'away':
      iconPath = '/icons/status-away.svg';
      statusMessage = '자리비움'
      break;
  }

  const label = `${name} (${statusMessage})`

  return h('li', {className:'avatar'}, 
    h('figure', {'aria-label':'', title:label},
      h('div', {className:'cover'}, 
        h('img', {src:`/avata/${name}.png`, alt:"프로필사진"})
      ),
      h('figcaption', null, 
        h('img', {src:`${iconPath}`})
      )
    )
  )
}