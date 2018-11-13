import { create } from 'apisauce';
import {API_URL} from '../global-constants';

const apiMonitor = (response) => {
  if (response.data && response.data.message === 'Unauthorized') {
    console.log('Unauthorized')
  }
};
export const getHeaderConfig = (token) => ({
  'Accept': '*/*',
  'Accept-Language': 'en'
});
export const apiCreate = () => {
  let apiCreated = create({
    baseURL: API_URL,
    headers: getHeaderConfig()
  });
  apiCreated.addMonitor(apiMonitor);
  return apiCreated
};



