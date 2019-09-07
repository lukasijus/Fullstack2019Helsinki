import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import { ReactComponent } from '*.svg';


const Button = ({onClick, text}) => {
    <button onClick = {onClick}>{text}</button>
}


const App = () => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleGoodClicks = () => {
        setGood(good + 1)
    }

    const handleNeutralClicks = () => {
        setNeutral(neutral + 1)
    }

    const handleBadClicks = () => {
        setBad(bad + 1)
    }

    const Button = (props) =>{
        
        <button onClick={handleClicks}>
             {props.text}
        </button>
        
    }

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
                <p>good: {godd}</p>
                <p>neutral: {neutral}</p>
                <p>bad: {bad}</p>
            </div>
        </div>
    )
}

ReactDOM.render(<App></App>, document.getElementById('root'))