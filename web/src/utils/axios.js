import axios from 'axios'

import store from '../store/store'
import actionCreator from '../store/actionCreator'
axios.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  
  return Promise.reject(error);
});


axios.interceptors.response.use(function (response) {
  // let action=actionCreator.changeTokenModal(true)
  // store.dispatch(action)
  return response.data;
}, function (error) {
  
  return Promise.reject(error);
});

export default axios