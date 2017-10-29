import React,{Component} from 'react'

class CloudLayer extends Component{
  constructor(props){
    super(props)
    this.src="/images/cloud.png"
    this.layerstyles;
    this.rotationSpeed=0.1
    this.BaseId=this.props.BaseId
    this.textureId=this.props.textureId
    this.imgId="Base"+this.BaseId+"texture"+this.textureId
    this.layerData={}
    this.worldXAngle=0;
    this.worldYAngle=0;
  }
  generateCloudCoordinates(){
    var x = 20 - ( Math.random() * 30 );
		var y = 20 - ( Math.random() * 20 );
		var z = 20 - ( Math.random() * 20 );
		var a = Math.random() * 360;
		var s = .25 + Math.random();
    var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px ) rotateZ( ' + a + 'deg ) scale( ' + s + ' )';
    this.layerData={
      x:x,
      y:y,
      z:z,
      a:a,
      s:s,
      speed: 0.1*Math.random()
    }
    this.layerstyles={
      "WebkitTransform":t,
			"MozTransform" :t,
			"OTransform" :t,
			"transform" : t
    }
    return this.layerstyles
  }


  animateLayer (){
    var currimg= document.getElementById(this.imgId)
    this.layerData.a+=this.layerData.speed
    var t = 'translateX( ' + this.layerData.x + 'px ) translateY( ' + this.layerData.y + 'px ) translateZ( ' + this.layerData.z + 'px ) rotateZ( ' + this.layerData.a + 'deg ) scale( ' + this.layerData.s + ')';
			currimg.style.webkitTransform =
			currimg.style.MozTransform =
			currimg.style.oTransform =
			currimg.style.transform = t;
      console.log(currimg)
      requestAnimationFrame(this.animateLayer.bind(this))
    }







  render(){
    document.addEventListener("DOMContentLoaded",this.animateLayer.bind(this))
    return(
      <img id={this.imgId} className="cloudlayer" src={this.src} style={this.generateCloudCoordinates()}/>
    )
  }
}

export default CloudLayer
