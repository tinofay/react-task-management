import React,{Component} from "react";

class Welcome extends Component{
    
render(){
    const {name,heroineName} = this.props;
    return <h1>I am Class Component {name} a.k.a {heroineName}</h1>
}
}

export default Welcome;