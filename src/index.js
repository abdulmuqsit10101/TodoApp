import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import TodoApp from './TodoApp';
import { Provider } from 'react-redux';
import store from "./redux/store";
import {
    BrowserRouter
 } from "react-router-dom"

const App = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <TodoApp />
            </BrowserRouter>
        </Provider>
    );
}

ReactDOM.render(<App/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
