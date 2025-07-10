// eslint-disable-next-line @typescript-eslint/no-explicit-any
export function debounce<T extends (...args: any[]) => void>(
  callback: T,
  delay: number = 400
): (...args: Parameters<T>) => void {
  let timerId: ReturnType<typeof setTimeout> | null = null;

  return (...args: Parameters<T>) => {
    if (timerId) {
      clearTimeout(timerId);
    }
    timerId = setTimeout(() => {
      callback(...args);
    }, delay);
  };
}

// 동작 : 타이머가 끝났을 때 callback이 동작하도록 되어 있는데, 다음 입력이 들어올 경우 타이머를 제거하고 새로운 타이머를 생성하므로 callback은 실행될 수 없다.