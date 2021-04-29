import React, { Component } from 'react';
import './App.css';
import api from './api'

class App extends Component{

  state= {
    produtos: [],
  }

  async componentDidMount(){
    const response = await api.get('');
    this.setState({ produtos: response.data});
  }

  render(){
    const { produtos } = this.state;

    return(
      <div>
        <h1 className="main">Produtos</h1>
        
        {produtos.map(produtos => (
          <li className="tc list" 
           key={produtos.id}>
           <h1 className="title"> {produtos.title} </h1>
           <h3 className="description"> {produtos.description} </h3>
           <h4 className="price"> {produtos.price} </h4>
           <img className="grow bw2" src={produtos.image} alt="img"></img>
          </li>
        ))}
      </div>
    )
  }
}

export default App;
