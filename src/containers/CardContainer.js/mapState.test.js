import { mapStateToProps, mapDispatchToProps } from '../CardContainer.js'
import { addPokeAction } from '../../actions/addPokeAction.js';

describe('mapStateToProps', () => {
  it('should return an array of objects', () => {

    const mockState = {
      poke: [{}]
    }

    const expected = {
      poke: [{}]
    }

    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected)
  })

  it('should return an object', () => {

    const mockState = {
      poke: {}
    }

    const expected = {
      poke: {}
    }

    const mappedProps = mapStateToProps(mockState);

    expect(mappedProps).toEqual(expected)
  })

})

describe('mapDispatchToProps', () => {
  it('calls addPoke with an addPoke action', () => {
    const mockDispatch = jest.fn()

    const actionToDispatch = addPokeAction({
      name: 'hello'
    });

    const mappedProps = mapDispatchToProps(mockDispatch);

    mappedProps.addPoke({ name: 'hello' })

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
})