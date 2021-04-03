import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from './types';

export const signup = (formProps: any) => (dispatch: any) => {
  axios.post(
    'http://localhost:3090/signup',
    formProps
  );
};