import React, { Component } from 'react';
import CloudBase from './cloudBase'

class World extends Component {
  constructor(props){
    super(props)
    this.worldXAngle=0
    this.worldYAngle=0
    this.d=0
    this.wstyle={
      'transform':'translateZ(0px) rotateX(0deg) rotateY(0deg) scale(2)'
    }
  }

  updateView(scale) {
    var w= document.getElementById('world')
    var styleChange={
      'transform':('translateZ('+this.d + 'px) '+ 'rotateX('+this.worldXAngle + 'deg) '+'rotateY('+this.worldYAngle + 'deg) scale('+scale+')')
    }
    w.style.transform=styleChange.transform
    // console.log(w.style)
  }

  changeAngle(e,scale){
    //inst is the current instance of world
    this.worldYAngle = -( .5 - ( e.clientX / window.innerWidth ) ) * 180;
    this.worldXAngle = ( .5 - ( e.clientY / window.innerHeight ) ) * 180;
    this.updateView(scale)
  }



  render(){
    var bases=[]
    for(var j=0; j<20; j++){
      bases.push(<CloudBase BaseId={j} textureSize={10}/>)
    }
    return (
      <div id="world" style={this.wstyle} >
      {bases}
      </div>
    )
  }

}
export default World

//
// /*
//   Defining our variables
//   world and viewport are DOM elements,
//   worldXAngle and worldYAngle are floats that hold the world rotations,
//   d is an int that defines the distance of the world from the camera
// */
// var world = document.getElementById( 'world' ),
//   viewport = document.getElementById( 'viewport' ),
//   worldXAngle = 0,
//   worldYAngle = 0,
//   d = 0;
//
// /*
//   Event listener to transform mouse position into angles
//   from -180 to 180 degress, both vertically and horizontally
// */
// window.addEventListener( 'mousemove', function( e ) {
//
//   worldYAngle = -( .5 - ( e.clientX / window.innerWidth ) ) * 180;
//   worldXAngle = ( .5 - ( e.clientY / window.innerHeight ) ) * 180;
//   updateView();
//
// } );
//
// /*
//   Changes the transform property of world to be
//   translated in the Z axis by d pixels,
//   rotated in the X axis by worldXAngle degrees and
//   rotated in the Y axis by worldYAngle degrees.
// */
// function updateView() {
//
//   world.style.transform = 'translateZ( ' + d + 'px ) \
//   rotateX( ' + worldXAngle + 'deg) \
//   rotateY( ' + worldYAngle + 'deg)';
//
// }
