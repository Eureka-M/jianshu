import * as constants from './constants'
import axios from 'axios'
import { fromJS } from 'immutable'
/* 函数自己用的 */
const changeList = (data) => ({
  type: constants.CHANGELIST,
  data: fromJS(data),
  totalPage: Math.ceil(data.length / 8)
})
/* 导出给别人用的 */
export const searchFocus = () => ({
  type: constants.SEARCH_FOCUS
})

export const searchBlur = () => ({
  type: constants.SEARCH_BLUR
})

export const mouseEnter = () => ({
  type: constants.MOUSE_ENTER
})

export const mouseLeave = () => ({
  type: constants.MOUSE_LEAVE
})

export const changePage = (page) => ({
  type: constants.CHANGE_PAGE,
  page
})

export const getList = () => {
  return (dispatch) => {
    axios.get('/api/headerList.json').then((res) => {
      const data = res.data;
      dispatch(changeList(data.data))
    }).catch(() => {
      console.log('error')
    })
  }
}