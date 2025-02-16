import { useState } from "react";


export default function App () {
    return <div>
        {/* <Steps />
        <Steps /> */}
        <Counter />
      </div>
    
}

function Counter (){
   const [count, setCount] = useState(0);
   const [backward, setBackward] = useState (1)

   const date = new Date();
   date.setDate(date.getDate() + count)

   return <div>
        <div>
          <button onClick={() => setBackward((c) => c - 1)}> -</button>
          <span>Step:{backward} </span>
          <button onClick={() => setBackward((c) => c + 1)}> +</button>
        </div>

        <div>
          <button onClick={() => setCount((c) => c - backward)}> -</button>
          <span>Count:{count} </span>
          <button onClick={() => setCount((c) => c + backward)}> +</button>
        </div>

        <p>
          <span>{count == 0 ?
           "Today is" : count > 0 ?
           `${count} days fron today is` :
           `${Math.abs(count)} days ago was `} 
           </span>
         <span> {date.toDateString()};</span>
        </p>
   </div>

   


}




const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function Steps (){

const [step, setStep] = useState(1)
const [isOpen , setIsopen] = useState(true)

  function handlePrevious(){
    // if(step > 1) setStep(step - 1);
    if(step > 1) setStep((s) => s -1);
  }
  function handleNext(){
    // if(step < 3)setStep(step + 1);
    if(step < 3){
     setStep((s) => s + 1)
    //  setStep((s) => s + 1)
    }
  }

  return(
    <div>
      <button className="close" onClick={() => setIsopen((is) => !is)}>&times;</button>
      {isOpen && (
        
           <div className="steps">
           <div className="numbers">
             <div className={step >= 1 ? "active" :" "}>1</div>
             <div className={step >= 2 ? "active" :" "}>2</div>
             <div className={step >= 3 ? "active" :" "}>3</div>
             
           </div>
     
           <p className="message">
             Step {step}: {messages[step - 1]} 
             </p>
     
           <div className="buttons">
             <button style={{backgroundColor: '#7950f2', color: '#fff'}} 
             onClick={handlePrevious}>previous </button>
     
     
             <button style={{backgroundColor: '#7950f2', color: '#fff'}}
             onClick={handleNext} >Next</button>
           </div>
         </div>
      )
      }
    </div>
  )
}



