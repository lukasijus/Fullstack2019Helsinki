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
            {props.part.name} {props.part.exercises}
        </p>
    )

}

const Content = (props) => {
    console.log(props)
    return (
        <div>
            <Part part={props.parts[0]}></Part>
            <Part part={props.parts[1]}></Part>
            <Part part={props.parts[2]}></Part>
        </div>
    )
}

const Total = (props) => {
    console.log(props)
    return (
        <p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>
    )
}

const App = () => {
    const course = {
        name: 'Half Stack application development',
        parts: [
            {
                name: 'Fundamentals of React',
                exercises: 10,
            },
            {
                name: 'Using props to pass data',
                exercises: 7,
            },
            {
                name: 'State of a component',
                exercises: 14,
            }
        ]
    }
    return (
        <div>
            <Header course={course.name}></Header>
            <Content parts={course.parts}
            ></Content>
            <Total parts={course.parts}>
            </Total>
        </div>
    )
}

ReactDOM.render(<App />, document.getElementById('root'))