import Config from 'react-native-config';

import buildApi from '../api';

import { URLS } from './config';

const { tips: TIPS } = URLS;

const createApi = () => {
  const { get } = buildApi({ baseURL: Config.API_URL });

  return {
    getTip: (config = {}) => get(TIPS.getTip, {}, config)
  };
};

export default createApi;
