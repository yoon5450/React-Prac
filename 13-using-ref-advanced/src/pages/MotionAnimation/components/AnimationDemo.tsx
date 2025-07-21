import { animate, motion, progress } from "framer-motion";
import S from "../style.module.css";
import { useRef } from "react";

function AnimationDemo() {
  const lolipopRef = useRef<HTMLElement>(null);
  const progressRef = useRef<HTMLOutputElement>(null)
  const handleMoveAnimation = async () => {
    const { current: element } = lolipopRef;
    if (!element) return;
    await animate(
      element,
      { y: -100, x: 400, rotate: 360 * 5 },
      { duration: 2 }
    );
    animate(element, { y: 100, x: 0, rotate: -360 * 5 }, { duration: 2 });
  };

  const handleProgressAnimation = () => {
    const {current:element} = progressRef

    animate(0, 100, {duration:4, onUpdate: latest => element!.value = Math.round(latest) + "%"})
  }

  return (
    <div className={S.animation}>
      <button className={S.button} type="button" onClick={handleMoveAnimation}>
        무빙 애니메이션
      </button>

      <figure ref={lolipopRef} className={S.lollipop}></figure>
      <hr />
      <motion.figure
        className={S.lollipop}
        animate={{ scale: 2, x: 100, rotate: -300 }}
        transition={{ type: "spring" }}
        onUpdate={latest => console.log(latest)}
        onAnimationComplete={latest => console.log(latest)}
        whileHover={{scale:1.2}}
        drag
        dragConstraints={{left:0, right:300}}
      ></motion.figure>


      <div className={S.wrapper}>
        <button type="button" className={S.button} onClick={handleProgressAnimation}>진행율 애니메이션</button>

        <output ref={progressRef} className={S.output}>
          0%
        </output>
      </div>
    </div>
  );
}
export default AnimationDemo;
