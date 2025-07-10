import React from 'react'

interface Props {
  onClick:(e:React.MouseEvent<HTMLDivElement>) => void;
  style: React.CSSProperties & {'--color'? : string}  // 스타일을 받아옴
  children?: React.ReactNode
  title?:string
}


function LayoutBox({onClick, children, ...restProp} : Props) {
  return (
    <div className='box' onClick={onClick} {...restProp}> {children}</div>
  )
}

export default LayoutBox