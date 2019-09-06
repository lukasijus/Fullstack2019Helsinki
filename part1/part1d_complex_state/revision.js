import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
    const [value, setValue] = useState(0)

    const setToValue = (newValue) => () => {
        setValue(newValue)
    }

    const hello = (who) => () => {
        console.log('hello', who)
    }

    const Button = (props) => {
        <button onClick = {props.handleClick}>
            {props.text}
        </button>
    }

    const handleClick = () => {
        console.log('clicked the button')
        setValue(0 )
    }

    return (
        <div>
            {value}
            <Button handleClick={ () => setToValue(1000)} text = 'thousand'></Button>
            <button onClick={setToValue(1000)}>
                thousand
                </button>
            <button onClick={setToValue(0)}>reset</button>
            <button onClick={setToValue(value + 1)}>increment</button>
            <button onClick={hello('world')}>'hello world'</button>
            <button onClick={hello('react')}>'hello react'</button>
            <button onClick={hello('function')}>'hello function'</button>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'));