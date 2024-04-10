import {useState, useEffect, useCallback} from 'react';
import {Keyboard, KeyboardEvent} from 'react-native';

const useKeyboardStatus = () => {
  const [isKeyboardOpen, setIsKeyboardOpen] = useState(false);
  const [keyboardHeight, setKeyboardHeight] = useState(0);

  const keyboardDidShow = useCallback((event: KeyboardEvent) => {
    setIsKeyboardOpen(true);
    setKeyboardHeight(event.endCoordinates.height);
  }, []);

  const keyboardDidHide = useCallback(() => {
    setIsKeyboardOpen(false);
    setKeyboardHeight(0);
  }, []);

  useEffect(() => {
    const keyboardDidShowListener = Keyboard.addListener(
      'keyboardDidShow',
      keyboardDidShow,
    );
    const keyboardDidHideListener = Keyboard.addListener(
      'keyboardDidHide',
      keyboardDidHide,
    );

    return () => {
      keyboardDidShowListener.remove();
      keyboardDidHideListener.remove();
    };
  }, [keyboardDidShow, keyboardDidHide]);

  return {isKeyboardOpen, keyboardHeight};
};

export default useKeyboardStatus;
