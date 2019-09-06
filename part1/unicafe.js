import React, {useState} from 'react';
import ReactDOM from 'react-dom';

const App = (props) => {
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)

    const handleClicks = (props) => {
        props
    }

    const Button = (props) =>{
        
        <button onClick={handleClicks}>
             {props.text}
        </button>
        
    }

    return (
        <div>
            <div>
                <h1>give feedback</h1>
            </div>
            <div>
                <Button handleClicks={ () => setGood}
            </div>
        </div>
    )
}