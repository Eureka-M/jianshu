import {fromJS} from 'immutable'
import * as constants from './constans'

const defaultState = fromJS({
  isShow: false,
  articleList:[],
  recommendList:[],
  writeList:[],
  articlePage: 1,
  showBackTop: false
})

export default (state = defaultState,action) => {
  switch (action.type) {
    case constants.MOUSE_ENTER_SHOW:
      return state.set('isShow',true)
    case constants.MOUSE_LEAVE_NOT_SHOW:
      return state.set('isShow', false)
    case constants.CHANGE_HOME_DATA:
     /*  return state.set('articleList', fromJS(action.articleList))
        .set('recommendList', fromJS(action.recommendList))
        .set('writeList', fromJS(action.writeList)) */
        return state.merge({
          articleList: fromJS(action.articleList),
          recommendList: fromJS(action.recommendList),
          writeList: fromJS(action.writeList)
        })
    case constants.ADD_ARTICLE_LIST: 
        return state.merge({
          articleList: state.get('articleList').concat(action.list),
          articlePage: action.nextPage
        })
    case constants.TOGGLE_SHOW_TOP:
      return state.set('showBackTop',action.show)
   default:
     return state;
  }
}