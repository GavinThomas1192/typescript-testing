import * as React from 'react';
import './App.css';
import {Hello} from './components/Hello'

class App extends React.Component {
  public state = {
    level: 1
  }
    public increment = () => {
      this.setState({level: this.state.level + 1})
    }
    public render() {
        return (
            <div className="App">
                <Hello name='Typescript' increment={this.increment} enthusiasmLevel={this.state.level}/>
            </div>
        );
    }
}

export default App;
