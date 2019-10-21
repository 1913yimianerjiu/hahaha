import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import {Menu,Icon} from 'antd'

let navData = [
  {name:'首页',path:'/admin/home'},
  {name:'设置',path:'/admin/setting'},
  {name:'用户管理',
  path:'/user',
  children:[
    {name:'用户管理',path:'/admin/user/list'},
    {name:'用户删除',path:'/admin/user/del'}
  ]
  },
]

const {SubMenu} = Menu

class CustomNav extends Component{
  jump = (path) => {
    this.props.history.push(path)
  }
  renderItem = (data) => {
    return data.map((item,index) => {
      if(item.children) {
        return (
          <SubMenu title={item.name}>
            {this.renderItem(item.children)}
          </SubMenu>
        )
      } else {
        return <Menu.Item onClick={this.jump.bind(this,item.path)}>{item.name}</Menu.Item>
      }
    })
  }
  render() {
    console.log(this,'自定义导航')
    return (
      <div className="home">
         <Menu style={{ width: 256 }} mode="vertical">
            {this.renderItem(navData)}
            {/* <SubMenu
              key="sub1"
              title={
                <span>
                  <Icon type="mail" />
                  <span>Navigation One</span>
                </span>
              }
            >
              <Menu.Item key="1">Option 1</Menu.Item>
            </SubMenu> */}
          </Menu>
      </div>
    )
  }
}

export default withRouter(CustomNav)