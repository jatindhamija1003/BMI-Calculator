import './App.css';
import React, { useState } from 'react'
function App() {

  //making state of our Application
  const [weight, setWeight] = useState(0)
  const [height, setHeight] = useState(0)
  const [bmi, setBmi] = useState('')
  const [message, setMessage] = useState('')

  //Logic
  let calcBmi = (e) => {
    e.preventDefault()
    if (weight === 0 || height === 0) {
      alert('Plese Enter a valid weight and height')
    } else {
      let bmi = (weight / (height * height))
      setBmi(bmi.toFixed(1))

      //Message Box
      if (bmi < 18.4) {
        setMessage('Underweight')
      } else if (bmi >= 18.4 && bmi < 24.9) {
        setMessage('Normal Weight')
      } else {
        setMessage('Overweight')
      }
    }
  }

  //reload
  let reload = () => {
    window.location.reload()
  }

  return (
    <div className="App">
      <div class='container'>
        <h2>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>Weight (kg)</label>
            <input type='text' placeholder='Enter Your weight' value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>Height (m)</label>
            <input type='text' placeholder='Enter Your height' value={height} onChange={(event) => setHeight(event.target.value)} />
          </div>
          <div>
            <button className='btn' type='submit' >Submit</button>
            <button className='btn btn-outline' onClick={reload} type='submit' >Reload</button>
          </div>
          <div className='center'>
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
