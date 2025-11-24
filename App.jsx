import { useState } from "react";



const App = () => {

  const[weight, setWeight] = useState(0);
  const[height, setHeight] = useState(0);
  const[bmi, setBmi] = useState('');
  const[message, setMessage ] = useState('');

  // Logic

  let calcBmi = (e) =>{
   
    event.preventDefault();
    if(weight ===0 || height===0 ){
      alert('please enter a valid weight and height')
    }
    else{
      let bmi = (weight/(height*height)*703)
      setBmi(bmi.toFixed(1))

      //

      if(bmi<25){
        setMessage('yor are underweight')
      }
      else if(bmi>-25 && bmi <30){
        setMessage('Your healthy')
      }
      else{
        setMessage('you are over weight')
      }
    }
  }

  //reload

  let reload = () =>{
    window.location.reload()
  }

  



  return (
    <div className="App">
      <div className="container">
        <h2>BMI CAlculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>weight(ibs)</label>
            <input type="text" placeholder="Enter Wright value" value={weight} onChange={(e) => setWeight(e.target.value)} />
          </div>
          <div>
            <label>Height(in)</label>
            <input type="text" placeholder="Enter height value" value={height} onChange={(e) => setHeight(e.target.value)} />
          </div>

          <div>
            <button className="btn" type="submit">Submit</button>
            <button className="btnn" type="submit" onClick={reload}>reload</button>
          </div>

          <div>
            <h3>Your BMI is:{bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
};

export default App;
