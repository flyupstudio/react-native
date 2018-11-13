import typeToReducer from 'type-to-reducer';
import { fromJS } from 'immutable';
import reducerParse from '../../utils/reducerParse';
import {
  GET_API_INFORMATION
} from './constant';


const initialState = fromJS({
  loading: true,
  information: []
});

export default typeToReducer({

  [GET_API_INFORMATION]: {
    START: (state = fromJS([]), d) => reducerParse(d, (data) => {
      return state
        .set('loading', fromJS(true))
    }),
    SUCCESS: (state = fromJS([]), d, wallet) => reducerParse(d, (data) => {
        //localStorage.setItem('user', data);
        if (d.payload.status == 200) {
          return state
            .set('loading', false)
            .set('information', fromJS(data));
        } else {
          return state
            .set('loading', false)
            .set('information', fromJS([]));
        }
      }
    ),
    FAIL: (state = fromJS([]), d) => reducerParse(d, (data) => {
      return state
        .set('loading', fromJS(false))
    })
  },
}, initialState);

