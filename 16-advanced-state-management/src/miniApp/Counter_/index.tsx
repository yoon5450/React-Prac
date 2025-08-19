import tw from "@/utils/tw";
import S from "./style.module.css";
import { GrFormDown, GrFormUp } from "react-icons/gr";
import { memo, useMemo } from "react";
import CountButton from "./CountButton";
import CountDisplay from "./CountDisplay";
import { useCountStore } from "./@store";
import { useShallow } from "zustand/shallow";

function Counter({ className }: { className?: string }) {
  // selector로 원하는 항목만 뽑아서 사용 ( 리렌더 x )
  // 4버전에서는 구조분해함.
  // const [step, count] = useCountStore((s) => [s.step, s.count]);

  // 5버전에서는 useShallow 사용
  const [step, count, min, max] = useCountStore(
    useShallow((s) => [s.count, s.step, s.min, s.max])
  );

  const incrementLabel = `${step} 증가`;
  const decrementLabel = `${step} 감소`;

  const isMinDisabled = count <= min;
  const isMaxDisabled = count >= max;

  return (
    <div className={tw(S.component, className)}>
      <CountDisplay />
      <div role="group" className={S.group}>
        <CountButton
          type="+"
          title={incrementLabel}
          aria-label={incrementLabel}
          disabled={isMaxDisabled}
        >
          {useMemo(
            () => (
              <GrFormUp />
            ),
            []
          )}
        </CountButton>

        <CountButton
          type="-"
          title={decrementLabel}
          aria-label={decrementLabel}
          disabled={isMinDisabled}
        >
          {useMemo(
            () => (
              <GrFormDown />
            ),
            []
          )}
        </CountButton>
      </div>
    </div>
  );
}
export default memo(Counter);
