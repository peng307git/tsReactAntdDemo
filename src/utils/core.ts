import { trim } from 'lodash';

export const REACT_APP_ENV = trim(process.env.REACT_APP_ENV);
export const isProd = REACT_APP_ENV === 'production';
export const isDev = REACT_APP_ENV === 'development' || !REACT_APP_ENV;


export const coreName = process.env.REACT_APP_NAME;




if (!isProd) {
  console.log('env', REACT_APP_ENV);
  console.log('env2', process.env);
}