import React from 'react';
import {AddTask} from './addtask';
import {TaskList} from './tasklist';

export class Todo extends React.Component {
    constructor(props) {
        super(props);
            
        }


    render() {
        return(
        <div>    
            <h1>Todo List</h1>
            <AddTask/>
            <TaskList tasks={this.props.tasks}/>
        </div>
        );

    }
}