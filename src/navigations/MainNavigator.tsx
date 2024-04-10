import React, {FC} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import NavigationStack from '@navigations/NavigationStack';

const MainNavigator: FC = () => {
  return (
    <NavigationContainer>
      <NavigationStack />
    </NavigationContainer>
  );
};

export default MainNavigator;
