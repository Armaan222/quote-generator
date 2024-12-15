import React, { useEffect, useState } from "react";
import QuoteDisplay from "./components/QuoteDisplay";
import QuoteButton from "./components/QuoteButton";
import "./App.css";

function App() {
  const [currentQuote, setcurrentQuote] = useState("Loading...");
  const [animationClass, setAnimationClass] = useState("")

  // Fetch a quote when the app loads
  useEffect(() => {
    fetchQuote();
  }, []);

  // Function to fetch a new quote
  const fetchQuote = () => {
    setAnimationClass("fade-out")

    setTimeout(() => {

   
    fetch(`https://api.adviceslip.com/advice?timestamp=${new Date().getTime()}`)
      .then((response) => response.json())
      .then((data) => {
        if (data && data.slip && data.slip.advice) {
          setcurrentQuote(data.slip.advice); // Update state with the new quote
        } else {
          console.error("Unexpected API response:", data);
        }
      })
      .catch((error) => console.error("Error fetching a quote:", error));
    }, 300)
  };

  return (
    <div className="app">
      <div className={'quote-container $ {animationClass}'}>
      <QuoteDisplay quote={currentQuote} />
      </div>
      <QuoteButton generateNewQuote={fetchQuote} />
    </div>
  );
}

export default App;
