import type { Movie_list } from "../../../components/type"
import S from '@/pages/AccessDom/style.module.css'
import VanillaTilt from 'vanilla-tilt';
import { TILT_CONFIG } from "../../../components/tiltConfig";
import { useRef } from "react";

type Props = {
  item:Movie_list
  popup:boolean;
}

function CardItem({item, popup}: Props) {

  const { href, label, images } = item;
  const titleRef = useRef<HTMLParagraphElement | null>(null);

  const refCallback = (el:HTMLAnchorElement) =>{
    VanillaTilt.init(el, TILT_CONFIG)
  }

  const cardClassName = `${S.card} ${popup ? S.popup : ''}`.trim();

  // 카드에 마우스가 들어올 때 label이 보이게
  const handleEnter = () =>{

    const title = titleRef.current!;
    title.style.opacity = "1"
  }

  // 카드에서 마우스가 떠났을 때 label이 안 보이게
  const handleLeave = () =>{
    const title = titleRef.current!;
    title.style.opacity = "0"
  }


  return (
    <a 
      ref={refCallback}
      href={href}
      title={label}
      aria-label={label}  
      // Mouse뿐만 아니라 터치 등도 동작 ( 포괄적 )
      onPointerEnter={handleEnter}
      onPointerLeave={handleLeave}
    >

    <figure className={cardClassName}>
      <div className={S.wrapper}>
        <img src={images.src} alt="" />
      </div>
      <p ref={titleRef}>{label}</p>
      <img className={S.character} src={images.character} alt="" />
    </figure>

    </a>
  )
}
export default CardItem