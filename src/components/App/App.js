import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import FakeContainer from '../../containers/FakeContainer'
import { addPokeAction } from '../../actions/addPokeAction';

class App extends Component {
  constructor(props) {
    super(props);

  }

  componentDidMount() {
    this.fetchPoke()
  }

  fetchPoke = async () => {
    try {
      const response = await fetch('http://localhost:3001/types')
      const result = await response.json();
      this.props.addPoke(result);
    } catch (error) {
      console.log(error.message)
    }
  }

  render() {
    return (
      <div className='App'>
        <h1 className='header'> POKéDEX </h1>
        <FakeContainer />
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    addPoke: poke => dispatch(addPokeAction(poke))
  }
}


export default connect(null, mapDispatchToProps)(App)
