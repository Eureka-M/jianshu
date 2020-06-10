import React,{Component} from 'react'
import { CSSTransition } from 'react-transition-group'
import { connect} from 'react-redux'
import { actionCreators } from './store'
import { Link} from 'react-router-dom'
import { 
  HeaderWrapper, 
  Logo, 
  Nav,
  NavItem, 
  NavSearch, 
  Addition, 
  Button, 
  SearchWrapper,
  SearchInfo,
  SearchInfoTitle,
  SearchInfoSwitch,
  SearchInfoList,
  SearchInfoItem
} from './style'

class Header extends Component{
  getListArea(){
    const { focused, list, page, totalPage, mouseIn, handleMountEnter, handleMountLeave, handleChangePage} = this.props/* 结构赋值 */
    const jsList = list.toJS()
    const pageList = []
    if(jsList.length){
      for (let i = (page - 1) * 8; i < page * 8; i++) {
        pageList.push(
          <SearchInfoItem key={jsList[i]}> {jsList[i]} </SearchInfoItem>
        )
      }
    }
    
    if (focused || mouseIn) {
      return (
        <SearchInfo 
            onMouseEnter={handleMountEnter}
          onMouseLeave={handleMountLeave}
          >
          <SearchInfoTitle>热门搜索
              <SearchInfoSwitch 
                onClick={() => handleChangePage(page, totalPage,this.spinIcon)}>
                  <i ref={(icon) => {this.spinIcon = icon }} className="iconfont spin">&#xe6a9;</i>
                  换一批</SearchInfoSwitch>
          </SearchInfoTitle>
          <SearchInfoList>
            {pageList}
          </SearchInfoList>
        </SearchInfo>
      )
    }
  }
  render() {
    const {list, focused,handleInputFocus,handleInputBlur} = this.props;
    return (
      <HeaderWrapper>
        <Link to = '/'>
          <Logo />
        </Link>
        
        <Nav >
          <NavItem className='left active'>首页</NavItem>
          <NavItem className='left'>下载App</NavItem>
          <NavItem className='right'>登录</NavItem>
          <NavItem className='right'>
            <i className="iconfont">&#xe600;</i>
          </NavItem>
          <SearchWrapper>
            <CSSTransition
              in={focused}
              timeout={200}
              classNames="slide"
            >
              <NavSearch
                className={focused ? 'focused' : ''}
                onFocus={() => handleInputFocus(list)}
                onBlur={handleInputBlur}></NavSearch>
            </CSSTransition>
            <i className={focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe73d;</i>
            {this.getListArea()}
          </SearchWrapper>
        </Nav>
        <Addition>
          <Button className='writting'>
            <i className="iconfont">&#xe616;</i>
           写文章</Button>
          <Button className='reg'>注册</Button>
        </Addition>
      </HeaderWrapper>
    )
  }
} 

const mapStateTothis = (state) => {
  return {
    focused: state.getIn(['header', 'focused']),
    list:state.getIn(['header','list']),
    page: state.getIn(['header','page']),
    totalPage: state.getIn(['header','totalPage']),
    mouseIn: state.getIn(['header','mouseIn'])
  }
}

const mapDispatchTothis = (dispatch) => {
  return {
    handleInputFocus(list) {
      (list.size === 0) && dispatch(actionCreators.getList())
      dispatch(actionCreators.searchFocus())
      /* if(list.size ===0 ){
        dispatch(actionCreators.getList())
      } */
      
    },
    handleInputBlur() {
      dispatch(actionCreators.searchBlur())
    },
    handleMountEnter() {
      dispatch(actionCreators.mouseEnter())
    },
    handleMountLeave() {
      dispatch(actionCreators.mouseLeave())
    },
    handleChangePage(page,totalPage,spin) {
      //console.log(spin.style.transform) 
      let originAngle = spin.style.transform.replace(/[^0-9]/ig,'')
      if(originAngle) {
        originAngle = parseInt(originAngle,10)
      }else{
        originAngle = 0
      }
      spin.style.transform = 'rotate('+(originAngle + 360 ) +'deg)';
      if(page < totalPage) {
        dispatch(actionCreators.changePage(page + 1))
      }else {
        dispatch(actionCreators.changePage(1))
      }
      
    }
  }
}
export default connect(mapStateTothis,mapDispatchTothis) (Header)