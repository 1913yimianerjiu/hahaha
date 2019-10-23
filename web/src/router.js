import React,{Component} from 'react'
import ComponentImport from './utils/componentImport'
import {HashRouter,Switch,Redirect,Route} from 'react-router-dom'


// import Login from './component/login/load.js'
//首页，登录
const Login = ComponentImport(() => import('./component/login'))
const Admin = ComponentImport(() => import('./component/admin'))
const Home = ComponentImport(() => import('./component/home'))
//分类
const Movie = ComponentImport(() => import('./component/classify/movie'))
const Drama = ComponentImport(() => import('./component/classify/drama'))
const Show = ComponentImport(() => import('./component/classify/show'))
//产品管理
const All = ComponentImport(() => import('./component/manage/all'))
const Add = ComponentImport(() => import('./component/manage/add'))
//统计数据
const Browse = ComponentImport(() => import('./component/statistic/browse'))
const Hot = ComponentImport(() => import('./component/statistic/hot'))
//系统设置
const Font = ComponentImport(() => import('./component/setting/font'))
const ThemeColor = ComponentImport(() => import('./component/setting/themeColor'))
// import Admin from './component/admin'
// import Home from './component/home'
// import User from './component/user'
class RootRouter extends Component{
  render() {
    return (
      <HashRouter>
        
        <Switch>
          <Redirect exact from='/' to='/login'/>
          <Route path='/login' component={Login}/>
          <Route path='/admin' render={() => {
            return (
              <Admin>
                <Redirect exact from='/admin' to='/admin/home'/>                
                <Route path='/admin/home' component={Home}/>
                <Route path='/admin/classify/movie' component={Movie}/>
                <Route path='/admin/classify/drama' component={Drama}/>
                <Route path='/admin/classify/show' component={Show}/>

                <Route path='/admin/manage/add' component={Add}/>
                <Route path='/admin/manage/all' component={All}/>

                <Route path='/admin/statistic/browse' component={Browse}/>
                <Route path='/admin/statistic/hot' component={Hot}/>


                <Route path='/admin/setting/font' component={Font}/>
                <Route path='/admin/setting/themeColor' component={ThemeColor}/>

              </Admin>
            )
          }}/> 
        </Switch>
      </HashRouter>
    )
  }
}

export default RootRouter