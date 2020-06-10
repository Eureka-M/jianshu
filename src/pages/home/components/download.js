import React,{Component} from 'react'
import { DownloadWrapper, DownLoadImg,DownloadDelta} from '../style'
import { connect } from 'react-redux'
import { actionCreators } from '../store'

class Download extends Component {
  showDownload() {
    const { isShow} = this.props
    if(isShow) {
      return(
        <div>
          <DownLoadImg>
            <a href='https://www.jianshu.com/c/e048f1a72e3d?utm_medium=index-banner-s&utm_source=desktop'>
              <img className='img' src='https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png' alt='二维码'/>
            </a>
          </DownLoadImg>
          <DownloadDelta></DownloadDelta>
        </div>   
      )
    }
  }
  render(){
    const { handleMouseEnter, handleMouseLeave } = this.props
    return(
      <DownloadWrapper onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <a href="https://www.jianshu.com/apps?utm_medium=desktop&utm_source=index-aside-click">
          <img className="pic" src="https://cdn2.jianshu.io/assets/web/download-index-side-qrcode-cb13fc9106a478795f8d10f9f632fccf.png" alt=""/>
        </a>
        <div className="right">
            <a className="right_top" href="https://www.jianshu.com/apps?utm_medium=desktop&utm_source=index-aside-click">下载简书手机App  > </a>
            <a className="right_below" href="https://www.jianshu.com/apps?utm_medium=desktop&utm_source=index-aside-click">随时随地发现和创造内容</a>  
        </div>
        {this.showDownload()}
      </DownloadWrapper>
    )
  }
}

const mapState = (state) => ({
  isShow: state.getIn(['home','isShow'])
})

const mapDispatch = (dispatch) => {
  return {
    handleMouseEnter() {
      dispatch(actionCreators.MouseEnterShow())
    },
    handleMouseLeave() {
      dispatch(actionCreators.MouseLeaveNotShow())
    }
  }
}

export default connect(mapState, mapDispatch)(Download)