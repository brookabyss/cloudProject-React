import React, { Component } from 'react';
import World from './world'
import PhotoFrame from './frame'
class ViewPort extends Component {
  constructor(props){
    super(props)
    this.scaleValue=1
    this.prevState;
    this.state={current:""}
  }
  triggerWorld(e){
    this.refs.child.changeAngle(e,this.scaleValue)
    this.zoomLevel=0

  }


  calculateZoom(){
    var newZoom=window.outerWidth/window.document.documentElement.clientWidth


  }



  zoomWorld(){

    if(this.scaleValue>4){
        console.log("Chupa")
        this.setState({current:<PhotoFrame/>})
        document.removeEventListener('click',this.zoomInterval.bind(this))
        return true
    }
    this.scaleValue+=.25
    var world=document.getElementById('world')
    var t="scale("+ this.scaleValue+")"
    world.style.webkitTransform =
    world.style.MozTransform =
    world.style.oTransform =
    world.style.transform = t;
    document.addEventListener('mousemove',this.zoomInterval.bind(this))

  }

  zoomInterval(){
    setInterval(this.zoomWorld.bind(this),100)
  }
  render(){
    if(this.scaleValue<4){
      this.state.current=<World ref="child"/>
    }
    var worldInstance;
    document.addEventListener('click',this.zoomInterval.bind(this))
    window.addEventListener('mousemove',(e)=>{this.triggerWorld(e)})

    return (

      <div id="viewport">
      {this.state.current}


      </div>
    )
  }

}
export default ViewPort
