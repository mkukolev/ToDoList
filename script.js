import React from 'react';
import ReactDOM from 'react-dom';
import {Todo} from './src/main';

var tsklist = [];

ReactDOM.render (
    <Todo tasks={tsklist} />, document.getElementById('todo')
)
