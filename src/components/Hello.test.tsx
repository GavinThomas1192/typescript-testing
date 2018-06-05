// src/components/Hello.test.tsx

import * as enzyme from 'enzyme';
import * as Adapter from 'enzyme-adapter-react-16';
import * as React from 'react';
import Hello from './Hello';

enzyme.configure({ adapter: new Adapter() });


it('renders the correct words', () => {
  const hello = enzyme.shallow(<Hello />);
  expect(hello.find(".greeting").text()).toEqual('Hello Daniel!')
});

// it('renders the correct text with an explicit enthusiasm of 1', () => {
//   const hello = enzyme.shallow(<Hello name='Daniel' increment={increment} enthusiasmLevel={state.level}/>);
//   expect(hello.find(".greeting").text()).toEqual('Hello Daniel!')
// });

// it('renders the correct text with an explicit enthusiasm level of 5', () => {
//   const hello = enzyme.shallow(<Hello name='Daniel' increment={increment} enthusiasmLevel={state.level} />);
//   expect(hello.find(".greeting").text()).toEqual('Hello Daniel!!!!!');
// });

// it('throws when the enthusiasm level is 0', () => {
//   expect(() => {
//     enzyme.shallow(<Hello name='Daniel' increment={increment} enthusiasmLevel={state.level} />);
//   }).toThrow();
// });

// it('throws when the enthusiasm level is negative', () => {
//   expect(() => {
//     enzyme.shallow(<Hello name='Daniel' increment={increment} enthusiasmLevel={-1} />);
//   }).toThrow();
// });