import { useState } from "react";

const messages = [
  "Hey!",
  "I'm Practicing Hooks",
  "To be continued..",
  "This might be the first one",
  "Let's do limit testing",
  "Working?"
];


export default function App() {

  const [step, setStep] = useState(1)
  const [thstep, setThStep] = useState(4)
  const [isopen, setIsOpen] = useState(true)

  function handleNext() {
    if (step < 3) {                      /*updating state based on current state*/
      setStep((curStep) => curStep + 1)
      setThStep((curStep) => curStep + 1)
    }
  }

  function handlePrev() {
    if (step > 1) {
      setStep(step - 1)
      setThStep(thstep - 1)
    }
  }

  return (
    <>

      <div className="close" onClick={() => setIsOpen((currOpen) => !currOpen)}>
        &times;
      </div>


      {/* this is Short circuit, if this true it will show everything if flase then nothing*/}
      {/*Don't mutate the state manually */}
      {
        isopen && (<div>
          <div className="steps">
            <div className="numbers">
              <Condition className={step >= 1 ? "#7950f2" : ""} text="1" />
              <Condition className={step >= 2 ? "#7950f2" : ""} text="2" />
              <Condition className={step >= 3 ? "#7950f2" : ""} text="3" />
            </div>


            <div className="buttons">
              <Button bgColor={"#7950f2"} textcolor={"#ffff"} onClick={handlePrev}><span>◀️</span>Previous</Button>
              <Button bgColor={"#7950f2"} textcolor={"#ffff"} onClick={handleNext} >Next<span>▶️</span></Button>
            </div>
          </div>
        </div>
        )
      }
    </>
  )
}


function Button({ textcolor, bgColor, onClick, children }) {
  return (
    <button style={{ backgroundColor: bgColor, color: textcolor }} onClick={onClick}>{children}</button>
  )
}

function Condition({ className, text }) {
  return (
    <div style={{ backgroundColor: className, color: "#ffff" }}>{text}</div>
  )
}


function Message({ children, step }) {
  return (
    <p className="message">
      <h3>Step: {step}</h3>
      {children}
    </p>
  )
}