import { useState } from 'react'

const Button = ({handleClick, text}) => <button onClick={handleClick}>{text}</button>

const TopAnecdote = ({points , anecdotes}) => {
  
  const getMax = object => {

    const tops = Object.keys(object).filter(x => {
      return object[x] === Math.max.apply(null, 
      Object.values(object));
       });

    return tops[0]
  };

  return Object.keys(points).length === 0  ? null : (
    <div>
      <h1>Anecdote with most votes</h1>
      <p>{anecdotes[getMax(points)]}</p>
    </div>

    )
}


const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients'
  ]
  
  const [selected, setSelected] = useState(0)
  const [points, setPoints] = useState({})

  const selectRandom = () => setSelected(Math.floor(Math.random() * anecdotes.length))

  const handlePoints = (anecdote) => {
    
    const newPoints = { ...points }
    Number(newPoints[anecdote]) ? newPoints[anecdote] += 1 : newPoints[anecdote] = 1
    setPoints(newPoints)

  }

  return (
    <div>
      <div>
      <h1>Anecdote of the Day</h1>
      <p>{anecdotes[selected]}</p>
      <p>Votes: {points[selected] ? points[selected] : 'No  Votes yet' }</p>
      <Button handleClick={() => handlePoints(selected)} text="vote" />
      <Button handleClick={selectRandom} text="next anectdote" />
      </div>
      <div>
        <TopAnecdote points={points} anecdotes={anecdotes} />
      </div>
    </div>
    
  )
}

export default App