import React, { useState } from 'react';
import ReactDOM from 'react-dom';

//destructuring 
/*
const Hello = ({ name, age }) => {
    //helper function
    const bornYear = () => new Date().getFullYear() - age
    return (
        <div>
            <p>
                Hello {name}, you are {age} years old
        </p>
            <p>So you were probably born in {bornYear()}</p>
        </div>
    )
}
*/

const Display = ({ counter }) => {
    console.log(counter)
    return (
        <div>{counter}</div>
    )
}
const Button = ({ onClick, text }) => {
    return (
        <button onClick={onClick}>
            {text}
        </button>
    )
}


const App = (props) => {

    const [counter, setCounter] = useState(0)
    const setToValue = (value) => setCounter(value)

    return (
        <div>
            <Display counter={counter}></Display>
            <Button
                onClick={() => {
                    setToValue(counter + 1)
                }}
                text='plus'
            />
            <Button
                onClick={() => setToValue(counter - 1)}
                text='minus'></Button>
            <Button
                onClick={() => setToValue(0)}
                text='zero'></Button>
        </div>


    )
}
/*
let counter = 1

const refresh = () => {
    ReactDOM.render(<App counter={counter}></App>, document.getElementById('root'))
}

//re-render components using repeated calls to the ReactDom.render method
setInterval(() => {
    refresh()
    counter += 1
}, 1000);
*/
ReactDOM.render(<App></App>, document.getElementById('root'))


