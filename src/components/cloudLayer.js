import React,{Component} from 'react'

class CloudLayer extends Component{
  constructor(props){
    super(props)
    this.src="/images/cloud.png"
    this.layerstyles;
  }
  generateCloudCoordinates(){
    var x = 20 - ( Math.random() * 30 );
		var y = 20 - ( Math.random() * 20 );
		var z = 20 - ( Math.random() * 20 );
		var a = Math.random() * 360;
		var s = .25 + Math.random();
    var t = 'translateX( ' + x + 'px ) translateY( ' + y + 'px ) translateZ( ' + z + 'px ) rotateZ( ' + a + 'deg ) scale( ' + s + ' )';

    this.layerstyles={
      "webkitTransform":t,
			"MozTransform" :t,
			"oTransform" :t,
			"transform" : t
    }
    return this.layerstyles
  }
  render(){
    return(
      <img className="cloudlayer" src={this.src} style={this.generateCloudCoordinates()}/>
    )
  }
}

export default CloudLayer
