import logo from './logo.svg';
import './App.css';

import User from './User/User';
import { Component } from 'react';

class App extends Component {

  state = {
    users: [
      { name: 'Max', phone: '001', email: 'example@mail.com', country: 'USA', age: '23' },
      { name: 'Alex', phone: '002', email: 'example@mail.com', country: 'Russia', age: '30' },
      { name: 'Maria', phone: '003', email: 'example@mail.com', country: 'Australia', age: '34' },
      { name: 'Andy', phone: '004', email: 'example@mail.com', country: 'USA', age: '16' },
      { name: 'Helen', phone: '005', email: 'example@mail.com', country: 'Russia', age: '56' }
    ],
    pageTitle: 'React components'
  }

  handleInput = (event) => {
    this.setState({
      pageTitle: event.target.value
    })
  }

  handleRemowe = () => {
  }

  render() {

    return (
      <div>
        <h1>{this.state.pageTitle}</h1>


        {this.state.users.map((user, id) => {
          return (
            <User
              key={id}
              name={user.name}
              phone={user.phone}
              email={user.email}
              country={user.country}
              age={user.age}
              remoweItem={this.handleRemowe()}
            />
          )
        })}

      </div>
    );
  }
}

export default App;
