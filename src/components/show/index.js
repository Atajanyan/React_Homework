import { Component } from "react";


class Show extends Component {
    constructor(props){
        super(props)
      
    }

    componentWillUnmount(){
        // console.log(`component${this.props.title}:`,this.props.card.unmounting++);
        this.props.card.unmounting++
    }



    render(){
        const {props:{title,hide}} =  this
        return(
            <div className="showContainer">
            <div className="show">{title}</div>
            <button onClick={hide} className="hideButton">x</button>
            </div>
        )
    }
}

export default Show