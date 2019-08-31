import React from 'react'
import ReactDOM from 'react-dom'

const Header = (props) => {
    console.log(props)
    return (
        <h1>{props.course}</h1>
    )
}

const Part = (props) => {
    console.log(props)
    return (
        <p>
            {props.part} {props.exercises}
        </p>
    )

}

const Content = (props) => {
    console.log(props)
    return (
        <div>
            <Part part={props.part1.name} exercises={props.part1.exercises}></Part>
            <Part part={props.part2.name} exercises={props.part2.exercises}></Part>
            <Part part={props.part3.name} exercises={props.part3.exercises}></Part>
        </div>
    )
}

const Total = (props) => {
    console.log(props)
    return (
        <p>Number of exercises {props.part1.exercises + props.part2.exercises + props.part3.exercises}</p>
    )
}

const App = () => {
    const course = 'Half Stack application development'
    const part1 = {
        name: 'Fundamentals of React',
        exercises: 10,
    }
    const part2 = {
        name: 'Using props to pass data',
        exercises: 7,
    }
    const part3 = {
        name: 'State of a component',
        exercises: 14,
    }
    return (
        <div>
            <Header course={course}></Header>
            <Content part1={part1}
                part2={part2}
                part3={part3}
            ></Content>
            <Total part1={part1}
                part2={part2}
                part3={part3}>
            </Total>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))