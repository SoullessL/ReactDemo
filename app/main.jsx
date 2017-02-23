import React from "react"
import ReactDOM from "react-dom"
import Hello,{ReactOne} from "./helloword.jsx"

class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (<div id="app">
            <Hello />
            <ReactOne name="react one." />
        </div>);
    }
}

ReactDOM.render(<App/>,document.getElementById("root"))
