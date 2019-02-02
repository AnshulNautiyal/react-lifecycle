import React, { Component } from 'react';
import NavBar from './components/NavBar';
import TabBar from './components/TabBar'; 
import OldNewLifeCycle from './components/OldNewLifeCycle';

import { Provider } from './components/context';
import lifeCycleData from './components/data';

class App extends Component {
  
  state = {
    ...lifeCycleData,
    oldNew:false
  };
  handleClick= (bool) => {
    // console.log('clicked',bool)
    this.setState({
      oldNew: bool
    })
  }
  render() {
    return (
      <>

        <NavBar />
        <OldNewLifeCycle handleClick={this.handleClick}/>
        <Provider value={{ ...this.state }}>
          {
            this.state.oldNew === false && <TabBar  />
          }
        </Provider>
      </>
    );
  }
}

export default App;
