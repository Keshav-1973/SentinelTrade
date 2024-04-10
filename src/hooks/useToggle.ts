import {useState, useCallback} from 'react';

const useToggle = (
  initialValue = false,
): {toggleValue: boolean; toggle: () => void} => {
  const [toggleValue, setToggleValue] = useState<boolean>(initialValue);

  const toggle = useCallback(() => {
    setToggleValue(prevValue => !prevValue);
  }, []);

  return {toggleValue, toggle};
};

export default useToggle;
