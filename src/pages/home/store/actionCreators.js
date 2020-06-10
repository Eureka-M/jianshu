import * as constants from './constans'
import axios from 'axios'
import {fromJS} from 'immutable'

export const MouseEnterShow = () => ({
  type: constants.MOUSE_ENTER_SHOW
})

export const MouseLeaveNotShow = () => ({
  type: constants.MOUSE_LEAVE_NOT_SHOW
})

const changeHomeData = (result) => ({
  type: constants.CHANGE_HOME_DATA,
  articleList: result.articleList,
  recommendList: result.recommendList,
  writeList: result.writeList
})

const addHomeList = (list,nextPage) => ({
  type: constants.ADD_ARTICLE_LIST,
  list: fromJS(list),
  nextPage
})

export const getHomeInfo = () => {
  return (dispatch) => {
    axios.get('/api/home.json').then((res) => {
      const result = res.data.data
      dispatch(changeHomeData(result))
    })
  }
}

export const getMoreList = (page) => {
  return (dispatch) => {
    axios.get('/api/homeList.json?page='+page).then((res) => {
      const result = res.data.data
      dispatch(addHomeList(result,page + 1))
    })
  }
}

export const toggleShowTop = (show) => ({
  type: constants.TOGGLE_SHOW_TOP,
  show
})

