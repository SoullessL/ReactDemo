import React from "react"
import ReactDOM from "react-dom"
import Hello, { ReactOne, ReactKey } from "./helloword.jsx"
import { createStore } from 'redux'

// class App extends React.Component{
//     constructor(props){
//         super(props);
//     }
//     render(){
//         return (<div id="app">
//             <Hello />
//             <ReactOne name="react one." />
//             <ReactKey />
//         </div>);
//     }
// }

// ReactDOM.render(<App/>,document.getElementById("root"))


function Counter(props) {
    return (
        <div>
            <h1>{props.value}</h1>
            <button onClick={props.onIncrement}>+</button>
            <button onClick={props.onDecrement}>-</button>
        </div>
    );
}

const reducer = (state = 0, action) => {
    switch (action.type) {
        case 'INCREMENT': return state + 1;
        case 'DECREMENT': return state - 1;
        default: return state;
    }
};
const store = createStore(reducer);

const render = () => {
    ReactDOM.render(
        <Counter value={store.getState()}
            onIncrement={() => store.dispatch({ type: 'INCREMENT' })}
            onDecrement={() => store.dispatch({ type: 'DECREMENT' })}
            />,
        document.getElementById('root')
    );
};

store.subscribe(render);
render();
