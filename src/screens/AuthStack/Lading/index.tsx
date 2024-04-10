import React, {useCallback} from 'react';
import ForwardSlider from '@components/ForwardSlider/ForwardSlider';
import {UserAuthActions} from '../Redux/UserAuthSlice';
import {useAppDispatch} from '@utils/StoreHelpers/AppStore';

const Landing = () => {
  const dispactch = useAppDispatch();

  const onBoard = useCallback(() => {
    dispactch(UserAuthActions.onBoard(true));
  }, [dispactch]);

  return <ForwardSlider onDone={onBoard} onSkip={onBoard} />;
};

export default Landing;
