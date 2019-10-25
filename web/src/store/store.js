import {createStore,applyMiddleware} from 'redux'
import thunk from 'redux-thunk'
import reducer from './reducer'
export default createStore(reducer,applyMiddleware(thunk))  

// import {createStore,applyMiddleware} from 'redux'
// // applyMiddleware 中间件
// import thunk from 'redux-thunk'

// import reducer from  './reducer'
// console.log(thunk)
// export default createStore(reducer,applyMiddleware(thunk))

