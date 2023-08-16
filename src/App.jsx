import { useState } from "react";
import "./App.css";
import { quotes } from "./data/quotes";

function App() {
  const [count, setCount] = useState(0);
  const [quote, setQuote] = useState([]);

  const random = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length); // Genera un número entre 0 y 10
    setCount(randomIndex);
    setQuote(quotes[randomIndex]);
  };

  return (
    <>
      <div
        className="d-flex justify-content-center align-items-center vh-100"
        id="quote-box"
      >
        <div className="card p-5" id="quote-box">
          <h1 className="text" id="text">
            {count === 0 ? quotes[0].frase : quote.frase}
          </h1>

          <div className="text-end ">
            <h3 className="author" id="author">
              -{count === 0 ? quotes[0].autor : quote.autor}
            </h3>
            <button className="btn btn-primary" onClick={random}>
              New Quote
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
