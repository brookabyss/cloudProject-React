import React,{Component} from 'react'
import CloudLayer from './cloudLayer'

class PhotoFrame extends Component{
  constructor(props){
    super(props)
    this.imgSources=['/images/bigcat.png']
  }
  render(){
    var poems=[]
    var cpoem;
    var clayer;
    for(let i=0; i<this.imgSources.length; i++){
      cpoem=<img src={this.imgSources[i]}/>
      clayer=<CloudLayer ref="childCloud" BaseId={"Poem"} textureId={i+1}/>
      poems.push(<div class="poem">{cpoem}{clayer}</div>)

    }
    return (
      <div class="poems">
      {poems}
      </div>
    )
  }
}
export default PhotoFrame
