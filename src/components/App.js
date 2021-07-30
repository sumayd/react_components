import logo from '../logo.svg';
import '../App.css';

import News from './News';
import { Component } from 'react';

class App extends Component{
  render(){
    const news = [{
      id: 1,
      title: "title 1",
      description: "description 1"
  },{
      id:2,
      title: "title 2",
      description: "description 2"  
  },{
    id:3,
      title: "title 3",
      description: "description 3"
  }];
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <News news={news}/>
      </div>
    );
  }
}
export default App;
