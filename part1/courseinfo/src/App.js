import React, { Component } from 'react'

const Header = ({course}) => {
  return (
    <h1>{course}</h1>
  )   

}

const Content = ({parts}) => {

  return (
    <div>
      <Part part={parts[0]} />
      <Part part={parts[1]} />
      <Part part={parts[2]}/>
    </div>
  )
}

const Part = ({part}) => {
  return (
    <p>{part.name} {part.exercises}</p>
  )
}
const Total = ({parts}) => {
  return ( <h1>Total: {parts[0].exercises + parts[1].exercises + parts[2].exercises}</h1> )
}

const App = () => {
  const course = {
    name: 'Half Stack application development',
    parts: [
      {
        name: 'Fundamentals of React',
        exercises: 10
      },
      {
        name: 'Using props to pass data',
        exercises: 7
      },
      {
        name: 'State of a component',
        exercises: 14
      }
    ]
  }


  return (
    <div>
      <Header course={course.name} />
      <Content  parts={course.parts} />
      <Total parts={course.parts} />

    </div>
    
  )
}

export default App 