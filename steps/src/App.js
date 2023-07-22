import { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];

function App() {
  // const step = 3;
  const [steps, setSteps] = useState(1);
  const [close, setClose] = useState(true);
  const [num, setNum] = useState(1);

  // function closeUI() {
  //   setClose(!close);
  // }
  function handlePrevious() {
    setSteps(steps > 1 ? steps - 1 : steps - 0);
    setNum((num) => (steps > 1 ? (num -= 1) : num - 0));
  }

  function handleNext() {
    setSteps(steps < messages.length ? steps + 1 : steps + 0);
    setNum((num) => (steps < messages.length ? (num += 1) : num + 0));
  }

  return (
    <>
      <button className="close" onClick={() => setClose(!close)}>
        {close ? "x" : "✔️"}
      </button>

      {close && (
        <div>
          <div className="close"></div>
          <div className="steps">
            <div className="numbers">
              <div className={1 === num ? "active" : ""}>1</div>
              <div className={2 === num ? "active" : ""}>2</div>
              <div className={3 === num ? "active" : ""}>3</div>
            </div>
            <div className="message">
              <p>
                Step {steps}: {messages[steps - 1]}
              </p>
            </div>
            <div className="buttons">
              {/* <button
                style={{ backgroundColor: "#7950f2", color: "#fff" }}
                onClick={handlePrevious}
              >
                Previous
              </button>
              <button
                style={{ backgroundColor: "#7950f2", color: "#fff" }}
                onClick={handleNext}
              >
                Next
              </button> */}
              <Button bgColor={"#7950f2"} textColor="#fff" fn={handlePrevious}>
                👈 Previous
              </Button>

              <Button bgColor={"#7950f2"} textColor="#fff" fn={handleNext}>
                Next 👉
              </Button>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

function Button({ textColor, bgColor, fn, children }) {
  return (
    <button style={{ backgroundColor: bgColor, color: textColor }} onClick={fn}>
      {children}
    </button>
  );
}

export default App;
