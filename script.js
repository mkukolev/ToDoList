import React from 'react';
import ReactDOM from 'react-dom';
import {Todo} from './src/main';

var tskList=[];

ReactDOM.render (
    <Todo tasks={tskList} />, document.getElementById('todo')
)
