import * as React from 'react'
import './Hello.css'
import * as actions from '../actions';
import { connect, Dispatch } from 'react-redux';
import { StoreState } from '../types/index';


interface Props {
  name: string;
  enthusiasmLevel?: number;
  onIncrement?: () => void;
  onDecrement?: () => void;
}


class Hello extends React.Component<Props, object> {

    getExclamationMarks = (numChars: number) => {
        return Array(numChars + 1).join('!');
      }
    render() {
      const { name, enthusiasmLevel = 1, onDecrement, onIncrement } = this.props;
  
      if (enthusiasmLevel <= 0) {
        throw new Error('You could be a little more enthusiastic. :D');
      }
  
      return (
        <div className="hello">
          <div className="greeting">
            Hello {name + this.getExclamationMarks(enthusiasmLevel)}
          </div>
          <div>
            <button onClick={onDecrement}>-</button>
            <button onClick={onIncrement}>+</button>
          </div>
        </div>
      );
    }
  }

    function mapStateToProps({ enthusiasmLevel, languageName }: StoreState) {
    return {
      enthusiasmLevel,
      name: languageName,
    } 
  }
  
    function mapDispatchToProps(dispatch: Dispatch<actions.EnthusiasmAction>) {
    return {
      onIncrement: () => dispatch(actions.incrementEnthusiasm()),
      onDecrement: () => dispatch(actions.decrementEnthusiasm()),
    }
  }


  export default connect<Props>(mapStateToProps, mapDispatchToProps)(Hello);

