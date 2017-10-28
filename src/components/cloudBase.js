import React, { Component } from 'react';
import CloudLayer from './cloudLayer'

class CloudBase extends Component {
  constructor(props){
    super(props)

    this.basestyles;
    this.textures=this.props.texture;
  }
  genearteBaseCoordinates(){
      var x = 100 - ( Math.random() * 100 );
  		var y = 300 - ( Math.random() * 250 );
  		var z = 50 - ( Math.random() * 50 );
      var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px )';

      this.basestyles={
        "webkitTransform":t,
  			"MozTransform" :t,
  			"oTransform" :t,
  			"transform" : t
      }
      return this.basestyles


  }
  generateCloudLayers(){

    var clouds=[]
    for(var i=0;i<this.textures;i++){
      clouds.push(<CloudLayer/>)
    }
    return clouds
  }
  render(){

    return (
      <div className="cloudbase" style={this.genearteBaseCoordinates()}>
      {this.generateCloudLayers()}
      </div>
    )
  }

}
export default CloudBase
