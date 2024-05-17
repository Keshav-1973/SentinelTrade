import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {FeatureRoutes} from '@navigations/ScreenTypes';
import Landing from '@screens/AuthStack/Landing';
import {useAppSelector} from '@utils/StoreHelpers/AppStore';
import Home from '@screens/AppStack/Home/Home';
import Login from '@screens/AuthStack/Login/Login';
import PinEntry from '@screens/AuthStack/PinEntry/PinEntry';
import ProtectWallet from '@screens/AuthStack/ProtectWallet/ProtectWallet';
import Biometrics from '@screens/AuthStack/Biometrics/Biometrics';
import SignUp from '@screens/AuthStack/SignUp/SignUp';
import ForgotPassword from '@screens/AuthStack/ForgotPassword/ForgotPassword';
import CheckEmail from '@screens/AuthStack/CheckEmail/CheckEmail';
import CreatePassword from '@screens/AuthStack/CreatePassword/CreatePassword';

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
              name={FeatureRoutes.ONBOARDING.SIGN_UP}
              component={SignUp}
            />
            <Screen
              name={FeatureRoutes.ONBOARDING.FORGOT_PASSOWRD}
              component={ForgotPassword}
            />
            <Screen
              name={FeatureRoutes.ONBOARDING.PROTECT_WALLET}
              component={ProtectWallet}
            />
            <Screen
              name={FeatureRoutes.ONBOARDING.BIOMETRICS}
              component={Biometrics}
            />
            <Screen name={FeatureRoutes.ONBOARDING.PIN} component={PinEntry} />
            <Screen
              name={FeatureRoutes.ONBOARDING.CHECK_EMAIL}
              component={CheckEmail}
            />
            <Screen
              name={FeatureRoutes.ONBOARDING.CREATE_PASSOWRD}
              component={CreatePassword}
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
