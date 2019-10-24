<<<<<<< HEAD
import State from './state'
export default (preState=State,action) => {
  let newData = JSON.parse(JSON.stringify(preState))

  let {type,params}=action 
  switch (type) {
    case 'CHANGE_TOKEN_MODAL':
         newData.tokenModal=params
      break;
  
    default:
      break;
  }
  return newData
}
=======
// import State from './state'
// export default (preState=State,action)=>{
//   let newData = JSON.parse(JSON.stringify(preState))
//   let {type,params}=action
//   switch (type) {
//     case 'CHANGE_TOKEN_MODAL':
//         newData.tokenModal=params
//       break;
  
//     default:
//       break;
//   }
//   return newData
// }
>>>>>>> 5e9581686739e33a5322befba723e5a75601e6c5
