import * as React from 'react';
import * as ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { createStore, combineReducers, compose} from 'redux';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {Provider} from "react-redux";
import ProductsReducer from "./Store/Reducers/ProductsReducer";


const rootReducer = combineReducers({
    product: ProductsReducer,
});


const store = createStore(rootReducer, compose);

ReactDOM.render(
  <BrowserRouter>
      <Provider store={store}>
          <App />
      </Provider>
  </BrowserRouter>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
