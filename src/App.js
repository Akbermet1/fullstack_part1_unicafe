import React, { useState } from 'react'

const Header = ({title}) => {
  return (
    <h1> {title} </h1>
  )
}

const Button = (props) => {
  const {onClick, text} = props
  console.log(onClick, text)
  return (
    <button onClick={onClick}>{text}</button>
  )
}

const Statistic = ({statisticType, statisticCount}) => {
  return (
    <div>
      <p> {statisticType} {statisticCount} </p>
    </div>
  )
}

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)
  const totalOfAllFeedbacks = good + neutral + bad;

  const incrementGood = () => setGood(good + 1)
  const incrementNeutral = () => setNeutral(neutral + 1)
  const incrementBad = () => setBad(bad + 1)

  const findAverage = (good, neutral, bad) => {
    console.log(((good * 1) + (neutral * 0) + (bad  * (-1))))
    return ((good * 1) + (neutral * 0) + (bad  * (-1))) / 3
  }

  const findPositivePercentage = (good, neutral, bad) => {
    if(totalOfAllFeedbacks === 0)
      return 0
    else
      return (100*good)/(good+neutral+bad)
  }

  return (
    <div>
      <Header title={"give feedback"}/>
      <Button onClick={incrementGood} text={"good"}/>
      <Button onClick={incrementNeutral} text={"neutral"}/>
      <Button onClick={incrementBad} text={"bad"}/>

      <Header title={"statistics"}/>
      <Statistic statisticType={"good"} statisticCount={good}/>
      <Statistic statisticType={"neutral"} statisticCount={neutral}/>
      <Statistic statisticType={"bad"} statisticCount={bad}/>
      <Statistic statisticType={"all"} statisticCount={good+bad+neutral}/>
      <Statistic statisticType={"average"} statisticCount={findAverage(good, neutral, bad)}/>
      <Statistic statisticType={"positive"} statisticCount={findPositivePercentage(good, neutral, bad) + " %"}/>
    </div>
  )
}

export default App