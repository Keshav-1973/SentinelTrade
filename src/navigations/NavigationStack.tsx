import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FeatureRoutes} from '@navigations/ScreenTypes';
import Landing from '@screens/AuthStack/Lading';
import {useAppSelector} from '@utils/StoreHelpers/AppStore';
import Home from '@screens/AppStack/Home/Home';
import Login from '@screens/AuthStack/Login/Login';
import PinEntry from '@screens/AuthStack/PinEntry/PinEntry';

const {Navigator, Screen} = createNativeStackNavigator<any>();

const NavigationStack = () => {
  const AuthData = useAppSelector(state => state.userAuth);
  const {isLoggedIn, isOnboarded} = AuthData;

  return (
    <Navigator
      screenOptions={{
        headerShown: false,
      }}>
      {!isLoggedIn ? (
        !isOnboarded ? (
          <Screen name={FeatureRoutes.ONBOARDING.LANDING} component={Landing} />
        ) : (
          <>
            <Screen name={FeatureRoutes.ONBOARDING.LOGIN} component={Login} />
            <Screen
              name={FeatureRoutes.ONBOARDING.PIN_ENTRY}
              component={PinEntry}
            />
          </>
        )
      ) : (
        <Screen name={FeatureRoutes.APP.HOME} component={Home} />
      )}
    </Navigator>
  );
};

export default NavigationStack;
