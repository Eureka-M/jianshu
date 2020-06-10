import styled from 'styled-components'

export const HomeWrapper = styled.div`
  overflow: hidden;
  width: 960px;
  margin: 0 auto;
`
export const HomeLeft = styled.div`
  width: 640px;
  float:left;
`
export const HomeRight = styled.div`
  width: 280px;
  float:right;
`

export const ListItem = styled.div`
  overflow: hidden;
  padding: 20px 0;
  border-bottom: 1px solid #dcdcdc;
  .pic{
    display: block;
    width: 125px;
    height: 100px;
    float: right;
    border-radius: 10px;
  }
`
export const ListInfo = styled.div`
  width:500px;
  float: left;
  .title {
    line-height: 27px;
    font-size: 18px;
    font-weight: bold;
    color: #333;
  }
  .disc {
    font-size: 13px;
    line-height: 24px;
    padding: 10px 0;
    color: #999;
  }
  .comments {
    display:inline-block;
    font-size: 12px;
    font-weight: 400;
    line-height: 20px;
    color: #b4b4b4;
    margin-right: 10px;
  }
  .active {
    color:#ea6f5a;
    
  }
  .small {
    font-size: 12px;
  }
  .changeA {
    text-decoration: none;
    cursor: pointer;
  }
`

export const RecommendWrapper = styled.div`
  margin: 30px 0 0;
  width: 280px;
`
export const RecommendItem = styled.div`
  width: 278px;
  height: 50px;
  margin: 0 0 6px;
  background:url(${(props) => props.imgUrl});
  background-size: contain;
`

export const DownloadWrapper = styled.div`
  position: relative;
  width: 278px;
  height: 82px;
  border: 1px solid #f0f0f0;
  border-radius: 5px;
  margin-top: 12px;
  .pic {
    margin-top:10px;
    margin-left: 21px;
    width: 60px;
    height: 60px;
  }
  .right {
    float: right;
  }
  .right_top{
    display:block;
    margin-top: 18px;
    margin-right:50px;
    font-size: 15px;
    color: #333 !important;
    text-decoration:none;
  }
  .right_below {
    display:block;
    margin-top: 12px;
    margin-left:2px;
    font-size: 13px;
    color: #999;
    text-decoration:none;
  }
`
export const DownLoadImg = styled.div`
  position: absolute;
  width: 180px;
  height: 180px;
  background: #fff;
  left: 50px;
  bottom: 96px;
  border-radius: 6px;
  box-shadow: 6px 6px 8px rgba(0, 0, 0, 0.1);
  border: 1px solid #9C9C9C;
  .img{
    width: 160px;
    height: 160px;
    margin: 10px; 
  }
`
export const DownloadDelta = styled.div`
  position: absolute;
  z-index:9;
  border: 15px solid;
  border-color: #fff transparent transparent transparent;
  bottom: 68px;
  left:128px;
`

export const WriterWrapper = styled.div `
  width: 278px;
  margin-top: 30px;
`
export const WriterTitle = styled.div`
  width: 278px;
  height: 20px;
  color: #969696;
  font-size: 14px;
  margin-bottom: 10px;
  .writer_left{
    float: left;
  }
  .writer_right{
    display: inline;
    float: right;
  }
  .iconfont {
    margin-right:5px;
  }
`
export const WriterRecommend = styled.div`
  width: 278px;
  position: relative;
`

export const WriterItem = styled.div`
  position: relative;
  width: 278px;
  height: 54px;
  margin-bottom: 5px;
  .WriterItem_Left {
    width: 220px;
    height: 54px;
  }
  .WriterImg {
    float:left;
    padding-top: 3px;
    width: 48px;
    height: 48px;
    border-radius: 24px;
  }
  .Writerdes1{
    position: absolute;
    left: 60px;
    top: 10px;
    color: #333;
    font-size: 14px;
    text-decoration: none;
  }
  .Writerdes2{
    position: absolute;
    top: 30px;
    left:60px;
    color: #969696;
    font-size: 12px;
  }
  .WriterItem_Right{
    position: absolute;
    width: 58px;
    height: 54px;
    top:0px;
    left:220px;
    .guanzhu{
      margin-top: 10px;
      color:#42C02E;
      font-size: 13px;
    }
  }
`
export const LoadMore = styled.div`
  width: 100%;
  height: 40px;
  line-height: 40px;
  margin: 30px 0 ;
  background: #a5a5a5;
  text-align: center;
  border-radius: 20px;
  color: #fff;
  cursor: pointer;
`
export const BackTop = styled.div`
  position: fixed;
  right: 100px;
  bottom: 100px;
  width: 60px;
  height: 60px;
  font-size: 14px;
  line-height: 60px;
  text-align: center;
  border: 1px solid #ccc;
`


