import { useCallback, useId, useState } from "react";

type UseSwitchOptions = {
  defaultChecked?: boolean;
  checked?: boolean;
  onChange?: (next: boolean) => void;
  id?: string;
  disabled?: boolean;
};

export function useSwitch(opts:UseSwitchOptions = {}) {
  const {
    defaultChecked = false,
    checked,
    onChange,
    id,
    disabled
  } = opts

  const [uncontrolled, setUncontrolled] = useState(defaultChecked);

  const reactId = useId();

  const isControlled = checked !== undefined;
  const isChecked = isControlled ? checked : uncontrolled;

  // 리렌더될 필요 없으니 hook에는 useMemo나 useCallback을 많이 사용
  const setChecked = useCallback(
    (next:boolean) => {
      if(!isControlled) setUncontrolled(next);
      onChange?.(next);
    },
    [isControlled, onChange]
  )

  const toggle = useCallback(() => {
    if(disabled) return;
    setChecked((!isChecked))
  }, [disabled, isChecked, setChecked])

  const a11yProps = {
    id: id ?? reactId,
    role: 'switch' as const,
    'aria-label': String(isChecked),
    'aria-disabled': disabled || undefined,
    tabIndex: disabled ? -1 : 0,
    onClick: () => toggle(),
    onKeyDown: (e:React.KeyboardEvent) => {
      if(disabled) return;
      if(e.key === 'Enter' || e.key === ' '){
        e.preventDefault();
        toggle();
      }
      if(e.key === 'ArrowLeft') setChecked(false);
      if(e.key === 'ArrowRight') setChecked(true);
    }
  }

  return {checked: isChecked, setChecked, toggle, a11yProps, disabled}
}
