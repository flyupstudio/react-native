import {apiCreate} from '../../utils/api';

export const getBidFlyerApi = () => {
  let res = apiCreate().get('promotional/test.json');
  return res;
};
