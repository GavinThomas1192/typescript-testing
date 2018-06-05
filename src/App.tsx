import * as React from 'react';
import './App.css';
import Hello from './components/Hello'
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import { StoreState } from '../src/types/index';
import { enthusiasm } from '../src/reducers/index';
import { EnthusiasmAction } from '../src/actions/index';

// import { composeWithDevTools } from 'redux-devtools-extension';

// const store = createStore(reducer, composeWithDevTools(
//   applyMiddleware(...middleware),
//   // other store enhancers if any
// ));

/* eslint-disable no-underscore-dangle */
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose


const store = createStore<StoreState, EnthusiasmAction, any, any>(enthusiasm, {
  enthusiasmLevel: 1,
  languageName: 'TypeScript',
});



class App extends React.Component {

    render() {
        return (
          <Provider store={store}>
            <div className="App">
                <Hello />
            </div>
            </Provider>
        );
    }
}



export default App;
