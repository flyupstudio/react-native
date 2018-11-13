import {createAction} from 'redux-actions';

import {getBidFlyerApi} from './api';
import {GET_API_INFORMATION} from './constant';

export const getBidFlyer = createAction(GET_API_INFORMATION,
    async (data) => await getBidFlyerApi(data));
