import React, { useState } from 'react'

const Counters = () => {

    const [counter, setCounter]  = useState(0)

  //let counter = 15

  const addValue = () => {
    //counter = counter + 1
    setCounter(prevCounter => prevCounter + 1)    
  }

  const removeValue = () => {
    setCounter(counter - 1)
  }
  
  return (
    <>
      <h1>Chai aur react</h1>
      
      <h2>Counter value: {counter}</h2>

      <button onClick={addValue}>Add value {counter}</button> 
        <br />
        <br />
      <button onClick={removeValue}>remove value {counter}</button>
        <br></br>
      <p>footer: {counter}</p>
    </>
  )
}

export default Counters
