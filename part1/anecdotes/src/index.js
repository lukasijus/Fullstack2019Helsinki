import React, { useState } from 'react'
import ReactDOM from 'react-dom'




const points = {0:0,1:0,2:0,3:0,4:0,5:0}
const App = (props) => {
  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(0)


  const changeValue = () => {
    let num = Math.floor(Math.random()*anecdotes.length);
    setSelected(num)
  }

  const vote = () => {
      
      points[selected] += 1    
      setVotes(votes + 1)
      console.log(points[selected])
  }

  const mostVotes = () => {
      let max = 0
      let ancd = 0
      for (var key in points){
          if (points[key]>max) {
              max =points[key]
              ancd = key
          }
      }
      if (max === 0) {
          return (
              <div>

              </div>
          )
      }
      else {
        return (
            <div>
                 {props.anecdotes[ancd]}
                 <div>
                     Votes: {max}
                 </div>
            </div>
           
        )
      }
      
  }
  return (
    <div>
        <h1>Anecdote of the day</h1>
      <div>
      {props.anecdotes[selected]}
      <p>votes: {points[selected]}</p>
              </div>  
      
      <div>
      <button onClick ={() => vote()}>vote</button>
          <button onClick={() => changeValue()}>next ancedote</button>
      </div>
      <h1>Anecdote with the most votes</h1>
      <div>{mostVotes()}</div>
    </div>
  )
}




const anecdotes = [
  'If it hurts, do it more often',
  'Adding manpower to a late software project makes it later!',
  'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
  'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
  'Premature optimization is the root of all evil.',
  'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
]

ReactDOM.render(
  <App anecdotes={anecdotes} />,
  document.getElementById('root')
)