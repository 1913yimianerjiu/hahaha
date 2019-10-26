import React,{Component} from 'react'
import {withRouter} from 'react-router-dom'
import {Menu,Icon} from 'antd'

// import {lang} from ''
import {zh,en,fa} from '../../lang/yyb'


const {SubMenu} = Menu
let navData = []
let yyb = {}

class CustomNav extends Component{
  state = {
    collapsed: false,
  }
  
  componentDidMount(){
    console.log(localStorage.getItem("y"));
    //通过key来获取value
    // localStorage.getItem("y") || localStorage.setItem("y", "1");
    var dt = localStorage.getItem("y");
    if(dt === '2'){
      yyb = JSON.parse(JSON.stringify(en))
      
    }else if(dt === '3'){
      yyb = JSON.parse(JSON.stringify(fa))          
    }else{
      yyb = JSON.parse(JSON.stringify(zh))
    }
  
    navData = [
      {name:yyb.a,path:'/admin/home'},
      {name:yyb.b,
       path:'/admin/classify',
       children:[
        {name:yyb.f,path:'/admin/classify/movie'},
        {name:yyb.g,path:'/admin/classify/drama'},
        {name:yyb.h,path:'/admin/classify/show'},
      ]
    
      },
      {name:yyb.c,
       path:'/admin/manage',
       children:[
        {name:yyb.i,path:'/admin/manage/all'},
        {name:yyb.j,path:'/admin/manage/add'},
      ]
      },
      {name:yyb.d,
      path:'/admin/statistic',
      children:[
       {name:yyb.k,path:'/admin/statistic/browse'},
       {name:yyb.l,path:'/admin/statistic/hot'},
      ]
      },
      {name:yyb.e,
      path:'/admin/system',
      children:[
       {name:yyb.m,path:'/admin/setting/font'},
       {name:yyb.n,path:'/admin/setting/themeColor'},
      ]
      }
    ]

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