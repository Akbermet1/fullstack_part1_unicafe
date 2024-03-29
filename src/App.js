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

const Statistics = ({good, neutral, bad}) => {
  const total = good+bad+neutral;
  if(total > 0)
  {
    return (
      <table>
      <Statistic statisticType={"good"} statisticCount={good}/>
      <Statistic statisticType={"neutral"} statisticCount={neutral}/>
      <Statistic statisticType={"bad"} statisticCount={bad}/>
      <Statistic statisticType={"all"} statisticCount={total}/>
      <Statistic statisticType={"average"} statisticCount={total > 0 ? ((good-bad)/total) + " %": "0 %"}/>
      <Statistic statisticType={"positive"} statisticCount={total > 0 ? ((100*good)/total) + " %" : "0 %"}/>
    </table>
      // <div>
      //   <Statistic statisticType={"good"} statisticCount={good}/>
      //   <Statistic statisticType={"neutral"} statisticCount={neutral}/>
      //   <Statistic statisticType={"bad"} statisticCount={bad}/>
      //   <Statistic statisticType={"all"} statisticCount={total}/>
      //   <Statistic statisticType={"average"} statisticCount={total > 0 ? ((good-bad)/total) + " %": "0 %"}/>
      //   <Statistic statisticType={"positive"} statisticCount={total > 0 ? ((100*good)/total) + " %" : "0 %"}/>
      // </div>
    ) 
  }
  return (
    <div>
      <p> No feedback given </p>
    </div>
  )
}


const Statistic = ({statisticType, statisticCount}) => {
  return (
    <tr>
      <td> {statisticType} </td>
      <td> {statisticCount} </td>
    </tr>
  )
}

const App = () => {
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  const incrementGood = () => {
    setGood(good + 1)
  }
  const incrementNeutral = () => {
    setNeutral(neutral + 1)
  }
  const incrementBad = () => {
    setBad(bad + 1)
  }

  const participants = {
    names: ["Michelle", "Bob"],
    ages: [22, 33],
  }


  return (
    <div>
      <Header title={"give feedback"}/>
      <Button onClick={incrementGood} text={"good"}/>
      <Button onClick={incrementNeutral} text={"neutral"}/>
      <Button onClick={incrementBad} text={"bad"}/>

      <Header title={"statistics"}/>
      <Statistics good={good} neutral={neutral} bad={bad}/>
    </div>
  )
}

export default App