import React,{Component} from 'react'
import { RecommendWrapper, RecommendItem} from '../style'
import {connect} from 'react-redux'

class Recommend extends Component {
  render() {
    const {recommendlist}= this.props;
    return(
      <RecommendWrapper>{
        recommendlist.map((item,index) => {
          return(
            <RecommendItem imgUrl={item.get('imgUrl')} key={index}></RecommendItem>
          )    
        })
      }  
      </RecommendWrapper>
    )
  }
}

const mapState = (state) => ({
  recommendlist: state.getIn(['home','recommendList'])
})
export default connect(mapState)(Recommend)