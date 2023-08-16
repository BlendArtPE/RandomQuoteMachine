import { useState } from "react";
import "./main.scss";
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
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="box card p-4" id="quote-box">
          <h1 className="text" id="text">
            {count === 0 ? quotes[0].frase : quote.frase}
          </h1>

          <div className="text-end ">
            <h5 className="author" id="author">
              -{count === 0 ? quotes[0].autor : quote.autor}
            </h5>
            <button className="button btn mt-3" onClick={random}>
              New Quote
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
