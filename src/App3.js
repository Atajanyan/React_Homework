import {Component} from 'react'

class App3 extends Component {
  constructor(props){
    super(props)
    this.data = []
    this.state = {
        data:[],
        value:''
    }
  }
  componentDidMount(){
    fetch('https://www.thecocktaildb.com/api/json/v1/1/filter.php?g=Cocktail_glass')
    .then(res=>res.json())
    .then(res=> {
        this.setState({data:res.drinks})
        this.data = res.drinks
    })
  }

  

  componentDidUpdate(prevProps,prevState){
    const {value} = this.state
    if(prevState.value !== this.state.value){
    if(value.length){
        this.setState({
             data:this.data.filter(elem => elem.strDrink.toLowerCase().includes(value.toLowerCase()))
        })
    }else{this.setState({data:this.data})}
  }
}

 

  setchange = (e) => {
    this.setState({
        value:e.target.value
    })
  }

  render(){
    const {data,value} = this.state
    console.log(this.data);
    return(<>
        <div className='coctailsContainer'><input onChange={this.setchange} type = 'text' value={value}/></div>
       <div className='coctailsContainer'>
       {data.map((elem,index)=><div className='coctails' key={elem.idDrink}><img src={elem.strDrinkThumb}/><div>{elem.strDrink}</div></div>)}
       </div>
       </>
    )
  }
}

export default App3


