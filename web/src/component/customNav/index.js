import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import {Menu,Icon} from 'antd'

let navData = [
  {name:'首页',path:'/admin/home'},
  {name:'产品分类',
   path:'/admin/classify',
   children:[
    {name:'电影',path:'/admin/classify/movie'},
    {name:'话剧',path:'/admin/classify/drama'},
    {name:'曲苑杂坛',path:'/admin/classify/show'},
  ]
  },
  {name:'产品管理',
   path:'/admin/manage',
   children:[
    {name:'查看所有',path:'/admin/manage/all'},
    {name:'新增产品',path:'/admin/manage/add'},
  ]
  },
  {name:'统计数据',
  path:'/admin/statistic',
  children:[
   {name:'浏览量趋势',path:'/admin/statistic/browse'},
   {name:'热度分析',path:'/admin/statistic/hot'},
  ]
  },
  {name:'系统设置',
  path:'/admin/system',
  children:[
   {name:'字体设置',path:'/admin/setting/font'},
   {name:'一键换肤',path:'/admin/setting/themeColor'},
  ]
  },
]

const {SubMenu} = Menu

class CustomNav extends Component{
  state = {
    collapsed: false,
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  }
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
      <div className="nav">
         <Menu style={{ width: 220,background:'rgb(255, 255, 255)',color:'orange'}} mode="vertical"
            defaultSelectedKeys={['1']}
            defaultOpenKeys={['sub1']}
            mode="inline"
            inlineCollapsed={this.state.collapsed}
        >
            {this.renderItem(navData)}
          </Menu>
      </div>
    )
  }
}

export default withRouter(CustomNav)