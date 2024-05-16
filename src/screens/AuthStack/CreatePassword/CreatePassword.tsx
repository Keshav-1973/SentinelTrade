import ForgotPassSVG from '@assets/svgs/ForgotPass.svg';
import AuthForm from '@components/AuthForm/AuthForm';
import CustomButton from '@components/CustomButton';
import {BtnTypes} from '@components/CustomButton/types';
import PasswordInput from '@components/PasswordInput/PasswordInput';
import ViewComponent from '@components/ViewComponent/ViewComponent';
import {yupResolver} from '@hookform/resolvers/yup';
import {useNavigation} from '@react-navigation/native';
import {Spacings} from '@themes/Scales';
import React from 'react';
import {Controller, useForm} from 'react-hook-form';
import {useWindowDimensions} from 'react-native';
import styles from './styles';
import {CreatePassWordInfo, CreatePassWordSchema} from './utils';

const CreatePassword = () => {
  const {height} = useWindowDimensions();
  const navigation = useNavigation();
  const Available_Height = height - 55;
  const Banner_Height = Available_Height * 0.4;
  const {
    control,
    handleSubmit,
    formState: {errors},
  } = useForm<CreatePassWordInfo>({
    defaultValues: {
      password: '',
      confirmPassword: '',
    },
    resolver: yupResolver(CreatePassWordSchema),
  });

  const onSubmit = (data: CreatePassWordInfo) => {};
  return (
    <AuthForm
      image={<ForgotPassSVG />}
      canGoBack={true}
      navHeading={'Create New Password'}
      bannerHeight={Banner_Height}>
      <>
        <ViewComponent style={[styles.childWrapper]}>
          <ViewComponent>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <PasswordInput
                  placeholder="New Password"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  error={errors.password?.message}
                />
              )}
              name="password"
            />
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({field: {onChange, onBlur, value}}) => (
                <PasswordInput
                  placeholder="Repeat Password"
                  onChange={onChange}
                  onBlur={onBlur}
                  value={value}
                  error={errors.password?.message}
                />
              )}
              name="confirmPassword"
            />
          </ViewComponent>
        </ViewComponent>
        <ViewComponent marginBottom={Spacings.XL}>
          <CustomButton
            onPress={handleSubmit(onSubmit)}
            title={'Submit'}
            btnType={BtnTypes.PRIMARY}
          />
          <ViewComponent marginBottom={Spacings.XL} />
        </ViewComponent>
      </>
    </AuthForm>
  );
};
export default CreatePassword;
