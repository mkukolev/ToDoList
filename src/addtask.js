import React from 'react';

export class AddTask extends React.Component {
    constructor() {
        super();
        this.nowSubmit = this.nowSubmit.bind(this);
    }
    nowSubmit(event) {
        event.preventDefault();
        var input= event.target.querySelector('input');
        var value= input.value;
        input.value = '';
        this.props.updateList(value);
    }


render() {
    return(
        <form onSubmit={this.nowSubmit}>
          <input id ="inp" type="text"  placeholder="Title..."/>
          <button type="submit" >add task</button>
        </form>
    );

    }
}
