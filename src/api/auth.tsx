import ApiCall from './ApiCall';

const login = (phone: number) => ApiCall.post('/login', {phone});

const request2FA = (phone: number, otp: number) =>
  ApiCall.post('/request2FA', {phone, otp});

const userInfo = (token: string) =>
  ApiCall.get(
    '/selfDetails',
    {},
    {headers: {Authorization: `Bearer ${token}`}},
  );

export default {
  login,
  request2FA,
  userInfo,
};
