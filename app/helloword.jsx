import React from "react"
import ReactDOM from "react-dom"

class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "Test", num: 1 };
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        var numTemp = this.state.num;
        this.setState({ name: "click.", num: numTemp + 1 });
    }

    render() {
        return <h1 id="title" onClick={this.handleClick}>Hello,{this.state.name},Num is {this.state.num}.</h1>
    }
}

export default Hello

function ReactOne(props) {
    return <h2>Hello,{props.name}</h2>;
}

function ReactKey(){
    //return <h2>Hello</h2>;
    const h2s=[1,2,3].map((num)=><li key=""> ReactKey,{num} </li>);
    return (<ul>{h2s}</ul>);
}

export { ReactOne,ReactKey };