import { useState, useCallback } from 'react';

function useToggle(initialState: boolean) {
  const [isOn, setIsOn] = useState<boolean>(initialState);
  const toggle = useCallback(() => setIsOn((prev) => !prev), []);
  return { isOn, toggle };
}

export default useToggle;