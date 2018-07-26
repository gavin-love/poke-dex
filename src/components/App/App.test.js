import { mapDispatchToProps } from './App';
import { addPokeTypeAction } from '../../actions/addPokeTypeAction';

describe('mapDispatchToProps', () => {
  it('calls addPokeType with an addPokeType action', () => {
    const mockDispatch = jest.fn()

    const actionToDispatch = addPokeTypeAction({
      name: 'hello'
    });

    const mappedProps = mapDispatchToProps(mockDispatch);

    mappedProps.addPokeType({ name: 'hello' })

    expect(mockDispatch).toHaveBeenCalledWith(actionToDispatch)
  })
})
