import React, {useState} from 'react';
import ReactDOM from 'react-dom';

//Button
const Button = ({onClick, text}) => {
    return (
        <button onClick={onClick}>{text}</button>
    )
    
}

const Statistics = (props) => {
    if (props.check === 0 ) return (<h2>no feedback given</h2>)
    return (
        
            <table>
                <tbody>
                    <tr>
                        <td>{props.text1}</td>
                        <td>{props.func1}</td> 
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>{props.text2}</td>
                        <td>{props.func2}</td> 
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>{props.text3}</td>
                        <td>{props.func3}</td> 
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>{props.text4}</td>
                        <td>{props.func4}</td> 
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>{props.text5}</td>
                        <td>{props.func5}</td> 
                    </tr>
                </tbody>
                <tbody>
                    <tr>
                        <td>{props.text6}</td>
                        <td>{props.func6}</td> 
                    </tr>
                </tbody>
                                
            </table>
        
    )
}

const App = (props) => {
    //define variables and states
    const [good, setGood] = useState(0)
    const [neutral, setNeutral] = useState(0)
    const [bad, setBad] = useState(0)
    const [all, setAll] = useState(0)
    const [average, setAverage] = useState(0)

    //handleGood
const handleGoodClicks = () => {
    setGood(good + 1)
    setAll(all + 1)
    setAverage(average + 1)
    
}

    //handleNeutral
const handleNeutralClicks = () => {
        setNeutral(neutral + 1)
        setAll(all + 1)
    }

    //handleBad
const handleBadClicks = () => {
    setBad(bad + 1)
    setAll(all + 1)
    setAverage(average - 1)
}

const calcAvg = () => {
    if (isNaN(average/all)) return 0
    return average/all
}

const calcPos = () => {
    if (isNaN(good/all)) return 0 + ' %' 
    return good/all * 100 + ' %'
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
                <Statistics   check = {all} 
                            text1 = 'good' func1 = {good}
                            text2 = 'neutral' func2 = {neutral}
                            text3 = 'bad' func3 = {bad}
                            text4 = 'all' func4 = {all}
                            text5 = 'average' func5 = {calcAvg()}
                            text6 = 'positive' func6 = {calcPos()}></Statistics>
            </div>
        </div>
    )
}


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
