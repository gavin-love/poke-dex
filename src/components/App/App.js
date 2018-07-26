import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import FakeContainer from '../../containers/FakeContainer'
import { addPokeAction } from '../../actions/addPokeAction';
import logo from '../../assets/loading.gif'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      is_loading: false
    }

  }

  componentDidMount() {
    this.fetchPoke()
  }

  fetchPoke = async () => {
    try {
      this.setState({ is_loading: true })
      const response = await fetch('http://localhost:3001/types')
      const result = await response.json();
      await this.props.addPoke(result);
      this.setState({ is_loading: false })
    } catch (error) {
      console.log(error.message)
    }
  }

  render() {
    return (
      <div className='App'>
        <h1 className='header'> POKéDEX </h1>
        <FakeContainer />
        {this.state.is_loading === true && <img src={logo} />}
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
