import React, { Component } from 'react';
import { connect } from 'react-redux';
import './App.css';
import CardContainer from '../../containers/CardContainer.js'
import { addPokeTypeAction } from '../../actions/addPokeTypeAction';
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
      await this.props.addPokeType(result);
      this.setState({ is_loading: false })
    } catch (error) {
      console.log(error.message)
    }
  }

  render() {
    return (
      <div className='App'>
        <h1 className='header'> POKéDEX </h1>
        <CardContainer />
        {this.state.is_loading === true && <img src={logo} />}
      </div>
    );
  }
}

export const mapDispatchToProps = dispatch => {
  return {
    addPokeType: pokeType => dispatch(addPokeTypeAction(pokeType))
  }
}


export default connect(null, mapDispatchToProps)(App)
