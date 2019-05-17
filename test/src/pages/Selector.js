import React, {Component, Fragment} from 'react';
import data from './data';

const Row = ({id, country_name}) => (
  <option key={id} value={country_name}>{country_name}</option>
);

class Selector extends Component {

  state = { data: data };

  render(){
    const rows = this.state.data.map((rowData) => <Row {...rowData} />);

    return (
      <React.Fragment>
        <div className="App">
          <h3>Shipping Country</h3>
          <div className="country-container">
            {this.state.data.map(user =>
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

export default Selector;
