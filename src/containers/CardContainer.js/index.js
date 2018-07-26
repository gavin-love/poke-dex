import React, { Component } from 'react';
import PropTypes, { shape, func, string } from 'prop-types';
import { connect } from 'react-redux';
import { addPokeAction } from '../../actions/addPokeAction';


class CardContainer extends Component {

  fetchPoke = async (index) => {
    const pokemon = this.props.type[index].pokemon.map(async (poke) => {
      const response = await fetch(`http://localhost:3001/pokemon/${poke}`)
      const result = await response.json()
      return result;
    })
    const result = await Promise.all(pokemon)

    const pokeObj = result.reduce((accum, poke) => {
      accum[poke.type] = poke
      return accum
    }, {})
    this.props.addPoke(pokeObj)
  }

  render() {

    const pokeButtons = this.props.type.map((type, index) => {
      return (
        <button
          key={index}
          onClick={() => this.fetchPoke(index)}
        >
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
    addPoke: pokeObj => dispatch(addPokeAction(pokeObj))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(CardContainer);


