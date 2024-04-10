import React from 'react';
import ViewComponent from '@components/ViewComponent/ViewComponent';
import AuthSVG from '@assets/svgs/auth.svg';
import {useWindowDimensions} from 'react-native';
import {Spacings, TextVariants} from '@themes/Scales';
import InputField from '@components/InputField/InputField';
import {BtnTypes} from '@components/CustomButton/types';
import CustomButton from '@components/CustomButton';
import {useForm, Controller} from 'react-hook-form';
import {yupResolver} from '@hookform/resolvers/yup';
import {LoginInfo, LoginSchema} from './utils';
import PasswordInput from '@components/PasswordInput/PasswordInput';
import LinkText from '@components/LinkText/LinkText';
import TextComponent from '@components/TextComponent/TextComponent';
import styles from './styles';
import AuthForm from '@components/AuthForm/AuthForm';
import {CustomStyle} from '@components/AuthForm/Ohh';

const Login = () => {
  const {width, height} = useWindowDimensions();
  const Available_Height = height - 55;
  const Banner_Height = Available_Height * 0.4;

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

  const onSubmit = (data: LoginInfo) => {
    console.log(data, '..........');
  };

  return (
    <AuthForm
      image={<AuthSVG width={width} height={Banner_Height} />}
      canGoBack={false}>
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
              onPress={() => {}}
              styles={styles.forgotP}
              variant={TextVariants.H5}
            />
          </ViewComponent>
        </ViewComponent>
        <ViewComponent marginBottom={Spacings.S}>
          <CustomButton
            onPress={handleSubmit(onSubmit)}
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
              onPress={() => {}}
            />
          </ViewComponent>
        </ViewComponent>
      </>
    </AuthForm>
  );
};
export default Login;
