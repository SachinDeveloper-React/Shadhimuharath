import React from 'react';
import {AuthStackParamList} from '../../navigations';
import {NavigationProp} from '@react-navigation/native';
import AuthHeader from '../../common/AuthHeader';

type Props = {
  navigation: NavigationProp<AuthStackParamList>;
};

const LoginHeader = ({navigation}: Props) => {
  return (
    <AuthHeader
      onPress={() => navigation.goBack()}
      isTitle={true}
      rightTitle="Log In"
    />
  );
};

export default LoginHeader;
