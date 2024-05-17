import AuthSVG from '@assets/svgs/auth.svg';
import AuthForm from '@components/AuthForm/AuthForm';
import CustomButton from '@components/CustomButton';
import {BtnTypes} from '@components/CustomButton/types';
import InputField from '@components/InputField/InputField';
import LinkText from '@components/LinkText/LinkText';
import PasswordInput from '@components/PasswordInput/PasswordInput';
import TextComponent from '@components/TextComponent/TextComponent';
import ViewComponent from '@components/ViewComponent/ViewComponent';
import {yupResolver} from '@hookform/resolvers/yup';
import {FeatureRoutes} from '@navigations/ScreenTypes';
import {useNavigation} from '@react-navigation/native';
import {Spacings, TextVariants} from '@themes/Scales';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {useWindowDimensions} from 'react-native';
import styles from './styles';
import {LoginInfo, LoginSchema} from './utils';
import auth, {FirebaseAuthTypes, firebase} from '@react-native-firebase/auth';

const Login = () => {
  const provider = new firebase.auth.OAuthProvider('google.com');
  const {height} = useWindowDimensions();
  const navigation = useNavigation();
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<LoginInfo>({
    defaultValues: {
      email: '',
      password: '',
    },
    resolver: yupResolver(LoginSchema),
  });

  const onSubmit = async () => {
    const hehe = await auth().signInWithPopup(provider);

    console.log(hehe);
  };

  const onSignUp = () => {
    navigation.navigate(FeatureRoutes.ONBOARDING.SIGN_UP);
  };

  const onForgotPass = () => {
    navigation.navigate(FeatureRoutes.ONBOARDING.CREATE_PASSOWRD);
  };

  const Available_Height = height - 55;
  const Banner_Height = Available_Height * 0.4;

  return (
    <AuthForm
      image={<AuthSVG />}
      canGoBack={false}
      navHeading={'Login'}
      bannerHeight={Banner_Height}>
      <>
        <ViewComponent style={[styles.childWrapper]}>
          <Controller
            control={control}
            rules={{
              required: true,
            }}
            render={({field: {onChange, onBlur, value}}) => (
              <InputField
                placeholder="Email"
                onChange={onChange}
                onBlur={onBlur}
                value={value}
                error={errors.email?.message}
              />
            )}
            name="email"
          />
          <ViewComponent>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <PasswordInput
                  placeholder="Password"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  error={errors.password?.message}
                />
              )}
              name="password"
            />
            <LinkText
              text={'Forgot Passord?'}
              onPress={onForgotPass}
              styles={styles.forgotP}
              variant={TextVariants.H5}
            />
          </ViewComponent>
        </ViewComponent>
        <ViewComponent marginBottom={Spacings.L}>
          <CustomButton
            onPress={onSubmit}
            title={'Login'}
            btnType={BtnTypes.PRIMARY}
          />
          <ViewComponent marginVertical={Spacings.M} style={styles.wrapper2}>
            <TextComponent variant={TextVariants.H5} style={styles.signUp}>
              Don’t have an account?{' '}
            </TextComponent>
            <LinkText
              variant={TextVariants.H5}
              text={'Sign Up'}
              onPress={onSignUp}
            />
          </ViewComponent>
        </ViewComponent>
      </>
    </AuthForm>
  );
};
export default Login;
