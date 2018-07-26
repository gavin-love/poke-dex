import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import { connect } from 'react-redux';
import { addPokeAction } from '../../actions/addPokeAction';
class FakeContainer extends Component {




  fetchPoke = (e) => {
    e.preventDefault()
    console.log('askdfjalsdf')
  }
  render() {

    const pokeButtons = this.props.type.map(type => {
      return (
        <button onClick={() => this.fetchPoke()}>
          {type.name}
        </button>
      )
    })
    return (
      <div>
        {pokeButtons}
      </div>
    );
  }
}

// FakeContainer.propTypes = {
//   fake: shape({ fake: string }),
//   addPokeAction: func.isRequired
// };

const mapStateToProps = state => ({
  poke: state.poke,
  type: state.pokeType
})

const mapDispatchToProps = dispatch => {
  return {
    addPoke: result => dispatch(addPokeAction(result))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(FakeContainer);


