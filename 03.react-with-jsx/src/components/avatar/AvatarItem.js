import React from "../../lib/react.js";

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

  return (
    <li className='avatar'>
      <figure aria-label='' title={label}>
        <div className='cover'>
          <img src={`/avata/${name}.png`} alt="프로필사진" />
        </div>
        <figcaption>
          <img src={`${iconPath}`} />
        </figcaption>
      </figure>
    </li>
  )
}