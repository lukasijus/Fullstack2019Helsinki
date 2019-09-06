import React, {useState} from 'react';
import ReactDOM from 'react-dom';


const History = (props) => {
    if (props.allClicks.length === 0) {
        return (
            <div>
                the app is used by pressing the buttons
            </div>
        )
    }
    return (
        <div>
            button press history: {props.allClicks.join(' ')}
        </div>
    )
}

const Button = ({ onClick, text}) => (
    <button onClick={onClick}>
        {text}
    </button>
)

const App = (props) => {
    console.log('props value is', props)
    const [left, setLeft] = useState(0)
    const [right, setRight] = useState(0)
    const [allClicks, setAll] = useState([])

const handleLeftClicks = () => {
    setAll(allClicks.concat('L'))
    setLeft(left + 1)
}

const handleRightClicks = () => {
    setAll(allClicks.concat('R'))
    setRight(right + 1)
}

return (
    <div>
        <div>
            {left}
            <Button onClick={handleLeftClicks} text = 'L'></Button>
            <Button onClick={handleRightClicks} text = 'R'></Button>
            {right}
            <History allClicks={allClicks}></History>
        </div>
    </div>
)
}

ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to w ork offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA

