import React, {useState} from 'react';
import ReactDOM from 'react-dom';

//Button
const Button = ({onClick, text}) => {
    return (
        <button onClick={onClick}>{text}</button>
    )
    
}

const App = (props) => {
    //define variables and states
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    //handleGood
const handleGoodClicks = () => {
    setGood(good + 1)
}

    //handleNeutral
const handleNeutralClicks = () => {
        setNeutral(neutral + 1)
    }

    //handleBad
const handleBadClicks = () => {
    setBad(bad + 1)
}

    //return JSX -> HTML
    return (
        <div>
            <h1>give feedback</h1>
            <div>
                <Button onClick={handleGoodClicks} text = 'good'></Button>
                <Button onClick={handleNeutralClicks} text = 'neutral'></Button>
                <Button onClick={handleBadClicks} text = 'bad'></Button>
            </div>
            <h1>statistics</h1>
            <div>
                <p>good: {good}</p>
                <p>neutral: {neutral}</p>
                <p>bad: {bad}</p>
            </div>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
