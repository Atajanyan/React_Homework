import {Component} from 'react'
import Wrapper from './components/wrapper'

class App2 extends Component {
  constructor(props){
    super(props)
    this.state = {
        cards:[
            {title:1,unmounting:0},
            {title:2,unmounting:0},
            {title:3,unmounting:0}
        ],
        show:false

    }
  }

  cards = () => {
    this.setState({
        show:!this.state.show
    })
  }
  

  render(){
    let un = this.state.cards
    const {cards,show} = this.state
    return(<>
       <div className='containerCard'>
         {cards.map(card=><Wrapper card = {card} title = {`title${card.title}`} key={card.title}/>)}
       </div>
       <div className='containerCard1'>
         <button className='b1' onClick={this.cards}>show unmounting</button>
         {show?<div>{un.map(card=>{
         return <div key={card.title}>{`title${card.title}: unmounting ${card.unmounting}, `}</div>
         })}</div>:''}
       </div>
       </>
    )
  }
}

export default App2


