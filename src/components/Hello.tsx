import * as React from 'react'
import './Hello.css'

// export interface IHelloProps { compiler: string; framework: string; }
// export const Hello = ( props: IHelloProps ) => <h1>Hello from {props.compiler} and {props.framework}!</h1>


export interface IProps {
  name: string;
  enthusiasmLevel?: number;
  increment: () => void
}
export class Hello extends React.Component<IProps, object> {

    public getExclamationMarks = (numChars: number) => {
        return Array(numChars + 1).join('!');
      }
    public render() {
      const { name, enthusiasmLevel = 1 } = this.props;
  
      if (enthusiasmLevel <= 0) {
        throw new Error('You could be a little more enthusiastic. :D');
      }
  
      return (
        <div className="hello">
          <div className="greeting">
            Hello {name + this.getExclamationMarks(enthusiasmLevel)}
          </div>
          <button onClick={this.props.increment}>powerlevel1000</button>
        </div>
      );
    }
  }

