import React,{ Component } from 'react'

import { WriterWrapper, WriterTitle, WriterRecommend, WriterItem} from '../style'
import {connect} from 'react-redux'

class Writer extends Component {
  render() {
    const { writerList } = this.props
    return(
      <WriterWrapper>
        <WriterTitle>
          <p className='writer_left'>推荐作者</p>
          <div >
            <p className='writer_right'>换一换</p>
            <i className="iconfont writer_right">&#xe6a9;</i>   
          </div>
        </WriterTitle>
        <WriterRecommend>
        { 
          writerList.map((item) => {
            return(
          <WriterItem key={item.get('id')}>
                <div className='WriterItem_Left'>
                  <img className='WriterImg' src={item.get('writerImgUrl')} alt='头像' />
                  <div>
                    <a className='Writerdes1' href="https://www.jianshu.com/u/51b4ef597b53?utm_source=desktop&utm_medium=index-users">{item.get('writerName')}</a>
                    <p className='Writerdes2' >写了{item.get('words')}字&nbsp;&nbsp;&nbsp;{item.get('like')}喜欢</p>
                  </div>
                </div>
                <div className='WriterItem_Right'>
                  <p className='guanzhu'>＋关注</p>
                </div>
          </WriterItem>
            )
          })
        }
        </WriterRecommend>
      </WriterWrapper>
    )
  }
}

const mapState = (state) => ({
  writerList: state.getIn(['home','writeList'])
})

export default connect(mapState)(Writer)