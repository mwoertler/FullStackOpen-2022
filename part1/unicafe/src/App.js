import { useState } from 'react'

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const StatisticsLine = ({title, count}) => <tr><td>{title}</td><td> {count}</td></tr>
const Statistics = ({good,neutral,bad}) => {

  const all = good + neutral + bad
  const avg = (good - bad) / all
  const pos = good / all

  if (all > 0) { 
    return (
      <>
        <h1>Statistics</h1>
        <table>
          <tbody>
            <StatisticsLine title="good" count={good} />
            <StatisticsLine title="neutral" count={neutral} />
            <StatisticsLine title="bad" count={bad} />
            <StatisticsLine title="all" count={all} />
            <StatisticsLine title="average" count={avg} />
            <StatisticsLine title="positive" count={pos} />
          </tbody>
        </table>
     
      </>
    
      )
  }

  return (<p>No Feedback given</p>)

}


const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)


  return (
    <div>
      <h1>Give Feedback</h1>
      <div>
        <Button handleClick={() => setGood(good + 1)} text="good" />
        <Button handleClick={() => setNeutral(neutral + 1)} text="neutral" />
        <Button handleClick={() => setBad(bad + 1)} text="bad" />
      </div>
      
      <div>
        <Statistics good={good} bad={bad} neutral={neutral} />
      </div>

    </div>
  )
}

export default App