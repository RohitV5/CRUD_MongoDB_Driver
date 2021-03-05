import React ,{Component} from'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {  
    constructor(){
      super();

      this.state = {
        string:"Hello",
        text: "Edit <code>src/App.js</code> and save to reload ya."
      }
    }
    
    changeStuff(){
      this.setState({string: this.state.string + " world !",text: "Welcome to React World !!"})
    }

      render () {
        return (
          <div className="App">
            <header className="App-header">
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                {this.state.text}
              </p>
              <a
                className="App-link"
                href="https://reactjs.org"
                target="_blank"
                rel="noopener noreferrer"
              >
                Learn React
              </a>
              <button onClick={()=>this.changeStuff()}>
                {this.state.string}
              </button>
            </header>
          </div>
        );
      }   
  
}

export default App;
