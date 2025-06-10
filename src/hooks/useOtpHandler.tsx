import {useEffect, useRef, useState} from 'react';
import {TextInput} from 'react-native';

export const OTP_LENGTH = 4;
const RESEND_DURATION = 45;

export const useOtpHandler = () => {
  const inputRefs = useRef<Array<React.RefObject<TextInput>>>(
    Array.from({length: OTP_LENGTH}, () => useRef<TextInput>(null)),
  ).current;

  // const inputRefs = Array.from({length: OTP_LENGTH}, () =>
  //   useRef<TextInput>(null),
  // );

  const [timer, setTimer] = useState(RESEND_DURATION);
  const [otp, setOtp] = useState(Array(OTP_LENGTH).fill(''));

  useEffect(() => {
    const interval = setInterval(() => {
      setTimer(prev => {
        if (prev <= 1) clearInterval(interval);
        return prev - 1;
      });
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleOtpChange = (value: string, index: number) => {
    const updatedOtp = [...otp];
    updatedOtp[index] = value;
    setOtp(updatedOtp);
    if (value && index < inputRefs.length - 1) {
      inputRefs[index + 1].current?.focus();
    }
  };

  const handleResend = () => {
    setTimer(RESEND_DURATION);
    console.log('Resend OTP');
  };

  return {
    inputRefs,
    timer,
    otp,
    handleOtpChange,
    handleResend,
  };
};
