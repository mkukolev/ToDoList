import React from 'react';

export class AddTask extends React.Component {
    constructor() {
        super();
    }


render() {
    return(
        <form onSumbit={this.onSumbit}>
          <input id ="inp" type="text"  placeholder="Title..."/>
          <button onClick>add task</button>
        </form>
    );

    }
}
