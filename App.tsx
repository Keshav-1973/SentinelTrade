import React, {useEffect, useMemo} from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {appStore, persistor} from '@utils/StoreHelpers/AppStore';
import MainNavigator from '@navigations/MainNavigator';
import {ThemeProvider} from '@shopify/restyle';
import {TOAST_TYPE, ThemeTypes} from '@constants/constants';
import {ThemeActions} from '@themes/redux/ThemeSlice';
import {ColorSchemeName, Vibration, useColorScheme} from 'react-native';
import theme, {darkTheme} from '@themes/Themes';
import ToastMessage from '@components/ToastMessage/ToastMessage';
import Toast, {
  SuccessToast,
  ErrorToast,
  BaseToast,
  ToastType,
} from 'react-native-toast-message';
import {ToastConfigTypes} from '@components/ToastMessage/types';
import {GestureHandlerRootView} from 'react-native-gesture-handler';

function App(): React.JSX.Element {
  const currentTheme = useColorScheme();

  const applyTheme = useMemo(() => {
    return currentTheme === ThemeTypes.DARK ? darkTheme : theme;
  }, [currentTheme]);

  const switchTheme = (colorScheme: ColorSchemeName) => {
    appStore.dispatch(
      ThemeActions.changeTheme(
        colorScheme === ThemeTypes.DARK ? ThemeTypes.DARK : ThemeTypes.LIGHT,
      ),
    );
  };

  useEffect(() => {
    if (currentTheme) {
      switchTheme(currentTheme);
    }
  }, [currentTheme]);

  const toastConfig = useMemo(
    () => ({
      errorToast: ({type, props}: ToastConfigTypes) => (
        <ToastMessage type={type} title={props.title} desc={props.desc} />
      ),
      successToast: ({type, props}: ToastConfigTypes) => (
        <ToastMessage type={type} title={props.title} desc={props.desc} />
      ),
    }),
    [],
  );

  return (
    <ThemeProvider theme={applyTheme}>
      <Provider store={appStore}>
        <PersistGate loading={null} persistor={persistor}>
          <GestureHandlerRootView style={{flex: 1}}>
            <MainNavigator />
          </GestureHandlerRootView>
          <Toast config={toastConfig} />
        </PersistGate>
      </Provider>
    </ThemeProvider>
  );
}

export default App;
