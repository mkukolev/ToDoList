import React from 'react';

export class TaskList extends React.Component {
    constructor() {
        super();
    }
    
    render() {
        var items = this.props.tasks.map(function(elems, i) {
            return <li key={i}>{elems}</li>;

        });
        return (
            <ul>
                {items}
            </ul>
        )
    }

}
