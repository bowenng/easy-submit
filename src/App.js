import React from 'react';
import {EditZone} from './EditZone.js';

class App extends React.Component {
    render () {
        return (
          <div className="App">
              <main className="container">
                  <div className="split right">
                        <EditZone />
                  </div>
                
              </main>
              
          </div>
      );
    }
}

export default App;
