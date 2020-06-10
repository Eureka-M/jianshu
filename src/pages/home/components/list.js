import React,{Component} from 'react'
import { ListItem, ListInfo,LoadMore} from '../style'
import { connect } from 'react-redux';
import * as actionCreators from '../store/actionCreators';
import { Link} from 'react-router-dom' 

class List extends Component {
  render() {
    const { list, getMoreList, page} = this.props
    return (
      <div>
        {
          list.map((item,index) =>{
            return(
              <Link key={index} to='/detail'>
              <ListItem >
                <ListInfo>
                  <h3 className='title'>{item.get('title')}</h3>
                  <p className='disc'>{item.get('disc')}</p>
                  <div>
                    <div className='comments active'>
                      <i className="iconfont small">&#xe601;</i>
                      <span> 60.8</span>
                    </div>
                    <a className='comments changeA' href="https://www.jianshu.com/u/fd2f9383c174">静待花来开</a>
                    <div className='comments'>
                      <i className="iconfont small">&#xe60a;</i>
                      <a className='comments changeA' href="https://www.jianshu.com/p/c70bdc290e8a#comments">100</a>
                    </div>
                    <div className='comments'>
                      <i className="iconfont small">&#xe611;</i>
                      <span className='comments'>805</span>
                    </div>
                  </div>
                </ListInfo>
                <img className="pic" src={item.get('imgUrl')} alt="图片" />
              </ListItem>
              </Link>
            )
          })
        }
        <LoadMore onClick={() => getMoreList(page)}>加载更多...</LoadMore>
      </div>
      
    )
  }
}

const mapState = (state) => ({
  list: state.getIn(['home','articleList']),
  page: state.getIn(['home','articlePage'])
})

const mapDispatch = (dispatch) => ({
  getMoreList(page) {
    dispatch(actionCreators.getMoreList(page))
  }
})

export default connect(mapState,mapDispatch)(List);