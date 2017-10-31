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
    this.worldXAngle=0;
    this.worldYAngle=0;
    this.state={
      status:true,
      data:{
        x:20 - ( Math.random() * 30 ),
        y:20 - ( Math.random() * 20 ),
        z:20 - ( Math.random() * 20 ),
        a:Math.random() * 360,
        s:1 + Math.random(),
        speed:0.1*Math.random(),
      },
      layerstyles:{}

    }
  }
  generateCloudCoordinates(){
    var t = 'translateX( ' + this.state.data.x + 'px ) translateY( ' + this.state.data.y + 'px ) translateZ( ' + this.state.data.z + 'px ) rotateZ( ' + this.state.data.a + 'deg ) scale( ' + this.state.data.s + ' )';
    return ({
      "WebkitTransform":t,
			"MozTransform" :t,
			"OTransform" :t,
			"transform" : t
    })

  }


  animateLayer (){
    console.log("hehehehe")
    var new_a=this.state.data.a + this.state.data.speed
    var new_state={
      status:false,
      data:{
        x:this.state.data.x,
        y:this.state.data.y,
        z:this.state.data.z,
        a:new_a,
        s:this.state.data.s,
        speed:0.3*Math.random(),
      },
      layerstyles:{}

    }

    var t = 'translateX( ' + new_state.data.x + 'px ) translateY( ' + new_state.data.y + 'px ) translateZ( ' + new_state.data.z + 'px ) rotateZ( ' + new_state.data.a + 'deg ) scale( ' + new_state.data.s + ' )';

    new_state.layerstyles={
      "WebkitTransform":t,
      "MozTransform" :t,
      "OTransform" :t,
      "transform" : t
    }
    this.setState(new_state)
    console.log(this.state.data.a)
    requestAnimationFrame(this.animateLayer.bind(this))
  }







  render(){
    if(this.state.status){
      this.state.layerstyles=this.generateCloudCoordinates()
    }
    document.addEventListener("DOMContentLoaded",this.animateLayer.bind(this))
    return(
      <img id={this.imgId} className="cloudlayer" src={this.src} style={this.state.layerstyles}/>
    )
  }
}

export default CloudLayer
