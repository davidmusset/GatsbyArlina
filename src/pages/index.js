import React, { Component } from 'react';
import './App.css';
import Navigation from './Components/Navigation'
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStroopwafel, faStar, faCircle, faCheckCircle,faTimesCircle} from '@fortawesome/free-solid-svg-icons'
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  render() {
    library.add(faStroopwafel, faStar, faCircle, faCheckCircle, faTimesCircle)
    return (
      <div className="App">
        <Navigation/>
      </div>
    );
  }
}

export default App;
