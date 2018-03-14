import React from 'react';
import {AddTask} from './addtask';
import {TaskList} from './tasklist';

export class Todo extends React.Component {
    constructor(props) {
        super();
        this.state={tasks: props.tasks};
        this.updateList=this.updateList.bind(this);
        }
    updateList(text) {
        var updTask=this.state.tasks;
        updTask.push(text);
        this.setState({tasks: updTask});
    }
    render() {
        return(
        <div>    
            <h1>Todo List</h1>
            <AddTask updateList={this.updateList}/>
            <TaskList tasks={this.state.tasks}/>
        </div>
        );

    }
}