import React,{Component} from 'react'
import './index.less'
import CustomNav from '../customNav'
import TokenModel from '../modal'
import {connect} from 'react-redux'
import {bindActionCreators} from 'redux'
import ActionCreator from '../../store/actionCreator'
class Admin extends Component{
  componentDidMount() {
    setTimeout(() => {
      if(false) {

      }else {
        this.props.changeTokenModal(true)
      }
    },1000)
  }
  render() {
    console.log(this,'admin')
    return (
      <div className="admin">
        <TokenModel></TokenModel>
        <div className="admin-top">
          <h1>
            <img src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1571825169327&di=e9389cd729689decf2620c89135edc5b&imgtype=0&src=http%3A%2F%2Fpic31.nipic.com%2F20130805%2F3347542_161144931000_2.jpg"></img>
          </h1>
          <h2>要 啥 自 行 车 文 化 传 媒 有 限 公 司</h2>
        </div>
        <div className="admin-bottom">
          <div className="admin-nav">
            <CustomNav></CustomNav>
          </div>

          <div className="admin-content">
            <div className="admin-content-middle">
              <div>
                {this.props.children}
              </div>
              
            </div>
            <div className="admin-content-foot">
              <p>xxxx出品  @12345版本信息</p>
            </div>
          </div>

        </div>
      </div>
    )
  }
}

export default connect(state=>state,(dispath)=>{
  return bindActionCreators(ActionCreator,dispath)
})(Admin)