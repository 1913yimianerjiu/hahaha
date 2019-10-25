import React,{Component} from 'react'

import '../../customNav/'

class Font extends Component{
  render() {
    return (
      <div className="font">
       <button>简体中文</button>
       <button>English</button>
       <button>繁体</button>
      </div>
    )
  }
}

export default Font