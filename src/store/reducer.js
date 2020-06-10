import { combineReducers } from 'redux-immutable' /* 可以把一些小的reducer合并成一个大的reducer */

import { reducer as headerReducer} from '../common/header/store'
import { reducer as homeReducer} from '../pages/home/store/'

const reducer = combineReducers({
  header: headerReducer,
  home: homeReducer
})

export default reducer