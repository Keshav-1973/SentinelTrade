import {Config} from 'react-native-config';

export const EnvVars = {
  BACKEND_HOST_URL: Config.BACKEND_HOST,
  API_KEY: '',
  ISTEM_CLIENT_ID: Config.ISTEM_CLIENT_ID,
  REQUEST_SOURCE: Config.REQUEST_SOURCE,
  OAuth: {
    google: {
      webClientId: Config.GOOGLE_OAUTH_WEB_CLIENT_ID,
    },
  },
};
