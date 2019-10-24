import React,{Component,Fragment} from 'react'
import {Card} from 'antd'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import './index.less'

class TokenModal extends Component{
  render() {
    console.log(this,'modal')
    let {TokenModal} = this.props
    return (
      <Fragment>
        {!TokenModal||
        <div className="token-modal">
          <Card title="token失效">
            token丢失或者失效,请重新登录
            <button onClick={() => {
                this.props.history.push('/login')
              }}>去登录</button>
          </Card>
        </div>
        }
      </Fragment>
    )
  }
}

export default connect(state=>state)(withRouter(TokenModal))

