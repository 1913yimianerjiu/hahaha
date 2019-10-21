import React,{Component} from 'react'
import ComponentImport from './utils/componentImport'
import {HashRouter,Switch,Redirect,Route} from 'react-router-dom'


// import Login from './component/login/load.js'
const Login = ComponentImport(() => import('./component/login'))
const Admin = ComponentImport(() => import('./component/admin'))
const Home = ComponentImport(() => import('./component/home'))
const Setting = ComponentImport(() => import('./component/setting'))
const UserList = ComponentImport(() => import('./component/userList'))
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
                <Route path='/admin/setting' component={Setting}/>
                <Route path='/admin/home' component={Home}/>
                <Route path='/admin/user/list' component={UserList}/>
              </Admin>
            )
          }}/> 
        </Switch>
      </HashRouter>
    )
  }
}

export default RootRouter