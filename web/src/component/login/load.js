import React from 'react';
import Loadable from 'react-loadable'

const loadingComponent = () => {
  return (
    <div>loading</div>
  )
}

export default Loadable({
  loader:() => import('./index.js'),
  //需要被懒加载的组件
  loading:loadingComponent
  //过场组件
})