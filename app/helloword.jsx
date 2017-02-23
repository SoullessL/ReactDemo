import React from "react"
import ReactDOM from "react-dom"

class Hello extends React.Component {
    constructor(props) {
        super(props);
        this.state = { name: "Test", num: 1 };
        this.handleClick=this.handleClick.bind(this);
    }

    handleClick(){
        var numTemp=this.state.num;
        this.setState({name:"click.",num:numTemp+1});
    }

    render() {
        return <h1 id="title" onClick={this.handleClick}>Hello,{this.state.name},Num is {this.state.num}.</h1>
    }
}

export default Hello

function ReactOne(props) {
    return <h2>Hello,{props.name}</h2>;
}
export { ReactOne };
