import React from 'react'

export function NaviContents() {
  // 이건 작동하지 않음 ( 사이드 이펙트 )
  // 컴포넌트 안에서 대상을 찾거나 수정하는 행위는 x
  // const firtstLink = document.querySelector('[href="#jsx-markup"]') as HTMLAnchorElement;
  // firtstLink.dataset.element = 'jsx-markup'

  const handleClickFirstLink = (e:React.MouseEvent<HTMLAnchorElement>) => { 
    e.preventDefault();
    console.log('first clicked!');
    e.currentTarget.dataset.element = 'jsx-markup'

    // 이벤트 핸들러 안에서 사이드 이펙트를 핸들링하기 좋음
   }

   const handleClickSecondLink = (e:React.MouseEvent<HTMLAnchorElement>) => { 
    e.preventDefault()
    e.currentTarget.dataset.element = 'responding-to-events'
   }

  return (
    <nav className='NavContents' aria-label='학습 주제 탐색'>
      <a href='#jsx-markup' onClick={handleClickFirstLink}>JSX 마크업</a>
      <a href='#responding-to-events' onClick={handleClickSecondLink}>이벤트 응답</a>
    </nav>
  )
}

export default NaviContents