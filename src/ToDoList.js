import { Component } from "react";
import imageCheck from './checkList.png';

export class ToDoList extends Component {
    state = {
        userInput: "",
        userList: []
    }

onChangeEvent(e){
    this.setState({userInput: e})
}

addItem(input) {
    if(input === "") {
        alert("Please enter an item!")
    } else {
        let listArray = this.state.userList;
        listArray.push(input);
        this.setState({userList: listArray, userInput: ""})
}
}

crossWord(event) {
    const li = event.target;
    li.classList.toggle("crossed");
}

deleteItem() {
    let listArray = this.state.userList;
    listArray.length=0;
    this.setState({userList: listArray})
}

onFormSubmit(e) {
    e.preventDefault()
}

render() {
    return(
        <div>
            <form onSubmit={this.onFormSubmit}>
        <div className="container">
            <input type="text" 
            placeholder="What are you going to do today?"
            value={ this.state.userInput }
            onChange = { (e) => {this.onChangeEvent (e.target.value)}} />
        </div>
        <div className="container">
            <button className="btn add" onClick={() => this.addItem(this.state.userInput)}>Add to the list</button>
        </div>
        <div className="container">
            <ul>
                {this.state.userList.map((item, index) => (
                <li onClick={this.crossWord} key={index}>
                    <img src={imageCheck} width="15px" alt="check point" />{item}
                </li>
                ))}
            </ul>
        </div>
        <div className="container">
            <button className="btn delete" onClick={() => this.deleteItem()}>Delete the list</button>
        </div>
        </form>
        </div>
    )
}
}
