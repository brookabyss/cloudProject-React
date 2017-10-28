import React, { Component } from 'react';
import World from './world'
class ViewPort extends Component {
  triggerWorld(e){
    this.refs.child.changeAngle(e)
  }
  render(){

    var worldInstance=  <World ref="child"/>
    window.addEventListener('mousemove',(e)=>{this.triggerWorld(e,worldInstance)})
    return (
      <div id="viewport">

      {worldInstance}

      </div>
    )
  }

}
export default ViewPort
