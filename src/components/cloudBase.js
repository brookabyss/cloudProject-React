import React, { Component } from 'react';
import CloudLayer from './cloudLayer'

class CloudBase extends Component {
  constructor(props){
    super(props)
    this.BaseId=this.props.BaseId
    this.basestyles;
    this.textures=this.props.textureSize;
    this.clouds=[]
  }
  genearteBaseCoordinates(){
      var x = 100 - ( Math.random() * 100 );
  		var y = 330 - ( Math.random() * 250 );
  		var z = 50 - ( Math.random() * 50 );
      var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px )';

      this.basestyles={
        "WebkitTransform":t,
  			"MozTransform" :t,
  			"OTransform" :t,
  			"transform" : t
      }
      return this.basestyles


  }

  generateCloudLayers(){

    this.clouds=[]
    var currentCloud;
    for(var i=0;i<this.textures;i++){
      currentCloud=<CloudLayer ref="childCloud" BaseId={this.BaseId+1} textureId={i+1}/>
      this.clouds.push(currentCloud)
      // document.addEventListener('DOMContentLoaded',this.triggerUpdateCloud.bind(this,currentCloud))
    }
    return this.clouds
  }
  triggerUpdateCloud(curr){
    this.refs.childCloud.animateLayer(curr)

  }

  render(){
    // document.addEventListener('DOMContentLoaded', this.animateLayer.bind(this));
    return (
      <div className="cloudbase" style={this.genearteBaseCoordinates()}>
      {this.generateCloudLayers()}
      </div>
    )
  }

}
export default CloudBase
