import React, {Component, Fragment} from 'react';
import './App.css';

const Row = ({id, country_name}) => (
  <option key={id} value={country_name}>{country_name}</option>
);

class App extends Component {

  state = { users: [] };

  componentDidMount(){
    fetch('/countries')
      .then(res => res.json())
      .then(users => this.setState({ users }))
  }

  render(){
    const rows = this.state.users.map((rowData) => <Row {...rowData} />);

    return (
      <React.Fragment>
        <div className="App">
          <h3>Shipping Country</h3>
          <div className="country-container">
            {this.state.users.map(user =>
              <ul key={user.id}>
                  <li>
                    <a href="https://www.endclothing.com/">
                      <span>{user.country_name}</span>
                    </a>
                  </li>
                </ul>
            )}
          </div>
          <select name="countries" className="selectBox">
          <option selected="selected">All Countries</option>
            {rows}
          </select>
        </div>
      </React.Fragment>
    );
  }
}

export default App;
