import React from 'react';
import { Switch, Route } from 'react-router';

import Selector from './pages/Selector';

class App extends React.Component {
  render(){
    return (
      <Switch>
          <Route path="/" render={props => (
            <Selector {...props} />
          )} />

      </Switch>
    )
  }
}

export default App;
