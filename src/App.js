import React, { Component } from 'react'
import axios from 'axios'
import QuotesList from './Components/QuotesList'
import './App.css'

export default class App extends Component {
  constructor() {
    super()
    this.state = {
      quotes:[],
      index: null,
      selected: []
    }
    
  }

      async  componentDidMount() {
        await  axios.get('https://type.fit/api/quotes')
          .then(response => {
                  this.setState({quotes : response.data})
          })
          this.generateIndex()
          this.selectedQuote()
        }

        nextQuote = () => {
          this.generateIndex()
          this.selectedQuote()
        }
       
        generateIndex = () => {
          if(this.state.index !== undefined) {
         this.setState({index : Math.floor(Math.random() * 1600)})
          }
        }
        
        selectedQuote = () => {
            this.setState({selected: this.state.quotes[this.state.index]})
          }
        

        
        
   render() {
    
    return (
      <div className = 'App'> 
      <h1>Quote of the Day</h1>
      <QuotesList quote = {this.state.selected}  nextQuote = {this.nextQuote}/>
      </div>
    )
  }
}

