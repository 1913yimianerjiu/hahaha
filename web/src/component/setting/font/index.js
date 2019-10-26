import React,{Component} from 'react'

import '../../customNav/'

class Font extends Component{
  render() {
    return (
      <div className="font">
       <button onClick={()=>this.btnClick(1)}>简体中文</button>
       <button onClick={()=>this.btnClick(2)}>English</button>
       <button onClick={()=>this.btnClick(3)}>繁体</button>
      </div>
    )
  }
  btnClick(y){
    localStorage.setItem('y',y);
    window.location.reload();
  }
}

export default Font