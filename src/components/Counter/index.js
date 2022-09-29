import { Component } from "react";


class Counter extends Component{
    constructor(){
        super()
        this.state = {
            count:0,
            minValue:'',
            maxValue:'',
            step:1,
        }
    }

    componentDidMount(){
      let count = localStorage.getItem('count')
      let max = localStorage.getItem('max')
      let min = localStorage.getItem('min')
      this.setState({count:+count})
    }

    addCount = () => {
        const {count,step,maxValue} = this.state
        if(maxValue){
            if(count+step<=maxValue){
                this.setState({
                    count:this.state.count+ Number(step)
                })
                localStorage.setItem('count',count+step)
            }
        }else{
            this.setState({
                count:count+ step
            })
            localStorage.setItem('count',count+step)
        }
    }

    

    subCount = () => {
        const {count,step,minValue} = this.state
        if(minValue){
            if(count-step>=minValue){
                this.setState({
                    count:this.state.count- Number(step)
                })
                localStorage.setItem('count',count-step)
            }
        }else if(count>0){
            this.setState({
                count:this.state.count- Number(step)
            })
            localStorage.setItem('count',count-step)
        }
          
        
        
    }

    resetCount = () => {
        if(this.state.minValue){
        this.setState({
            count:+this.state.minValue
        })
      }else{this.setState({
        count:0
      })}
    }

    minValchange = (e) => {
       this.setState({
        minValue:e.target.value
       })
    }

    maxValChange = (e) => {
        this.setState({
            maxValue:e.target.value
        })
    }

    stepChange = (e) => {
        this.setState({
            step:+e.target.value
        })
    }




    render(){
        const {count,step,minValue,maxValue} = this.state
        return(
            <>
            <div className="counter">
            <label htmlFor="1">MINIMAL</label>
            <input id="1" onChange={this.minValchange} type='text' value={minValue}/>
            <label htmlFor="2">STEP</label>
            <input id="2" onChange={this.stepChange} type='text' value={step}/>
            <label htmlFor="3">MAXIMAL</label>
            <input id="3" onChange={this.maxValChange} type='text' value={maxValue}/>
            </div>
            <h1 className="counter3">{count}</h1>
            <div className="counter1">
            <button onClick={this.addCount}>add</button>
            <button onClick={this.subCount}>sub</button>
            <button onClick={this.resetCount}>reset</button>
            </div>
            </>
        )
    }
}

export default Counter