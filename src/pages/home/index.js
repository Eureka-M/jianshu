import React,{Component} from 'react'
import * as actionCreators from './store/actionCreators'; //+

import
{ 
  HomeWrapper,
  HomeLeft,
  HomeRight,
  BackTop
 } from './style'
import List from './components/list'
import Recommend from './components/recommend'
import DownLoad from './components/download'
import Writer from './components/writer'

import { connect } from 'react-redux'

class Home extends Component {
  handleBackTop() {
    window.scrollTo(0, 0)
  }
  render() {
    return (
      <HomeWrapper>
        <HomeLeft>
          <List></List>
        </HomeLeft>
        <HomeRight>
          <Recommend></Recommend>
          <DownLoad></DownLoad>
          <Writer></Writer>
        </HomeRight>
        {this.props.showBackTop ? <BackTop onClick={this.handleBackTop}>回到顶部</BackTop>:null }
        
      </HomeWrapper>
     
    )
  }
  componentDidMount() {
    this.props.changeHomeData()
    
    this.bindEvents()
  }
  componentWillUnmount() {
    window.removeEventListener('scroll', this.props.changeScrollTopShow)
  }
  bindEvents() {
    window.addEventListener('scroll',this.props.changeScrollTopShow)
  }
}
const mapState = (state) => ({
  showBackTop: state.getIn(['home','showBackTop'])
})

const mapDispatch = (dispatch) => ({
  changeHomeData() {
    const action = actionCreators.getHomeInfo()
    dispatch(action)
  },
  changeScrollTopShow() {
    if(document.documentElement.scrollTop > 500){
      dispatch(actionCreators.toggleShowTop(true))
    }
    else{
      dispatch(actionCreators.toggleShowTop(true))
    }
  }
})
  

export default connect(mapState,mapDispatch)(Home)