import { Component } from "react";
import Show from "../show";

 class Wrapper extends Component{
    constructor(props){
        super(props)
        this.state = {
            isHide:false,
            isUnmount:false
        }
    }

    isHideShow = (e) => { 
        this.setState({
            isHide:!this.state.isHide
        })
    }

    unmounting = () => {
        this.setState({
            isUnmount:!this.state.isUnmount
        })
       
    }


    render(){
        const {isHide} = this.state
        return(
            <div>
               {!isHide ?
               <Show hide = {this.isHideShow}  unmounting = {this.state.isUnmount} card = {this.props.card} title = {this.props.title}/>
               :
               <div className="show"><button onClick={this.isHideShow}>show</button></div>}
                {/* <button onClick={this.isHideShow}>click</button> */}
            </div>
               
        )
    }
 }

 export default Wrapper