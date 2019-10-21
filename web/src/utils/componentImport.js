import React from 'react'
import Loadable from 'react-loadable'

//通用过场组件
const loadingComponent = () => {
  return (
    <div>loading</div>
  )
}
//传入loading，就采用传入的loading组件
export default (loader,loading = loadingComponent) => {
  return Loadable({
    loader,
    loading
  })
}