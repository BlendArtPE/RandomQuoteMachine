import { useState } from "react";
import "./main.scss";
import { quotes } from "./data/quotes";

function App() {
  const [count, setCount] = useState(0);
  const [quote, setQuote] = useState([]);
  const colors = [
    "#FF5733",
    "#3498DB",
    "#E74C3C",
    "#2ECC71",
    "#9B59B6",
    "#F39C12",
    "#1ABC9C",
    "#D35400",
    "#27AE60",
    "#C0392B"
  ];
  const random = () => {
    const randomIndex = Math.floor(Math.random() * quotes.length); // Genera un número entre 0 y 10
    setCount(randomIndex);
    setQuote(quotes[randomIndex]);
    document.querySelector("#new-quote").style.backgroundColor = colors[randomIndex];
    document.querySelector("#tweet-quote-button").style.backgroundColor = colors[randomIndex];
    document.querySelector("#text").style.color = colors[randomIndex];
    document.querySelector("#author").style.color = colors[randomIndex];
    document.querySelector("body").style.backgroundColor = colors[randomIndex];
  };

  return (
    <>
    
      <div className="d-flex justify-content-center align-items-center vh-100">
        <div className="box card p-4" id="quote-box">
          <h1 className="text" id="text">
            {count === 0 ? quotes[0].frase : quote.frase}
          </h1>

          <h5 className="author text-end" id="author">
            -{count === 0 ? quotes[0].autor : quote.autor}
          </h5>
          <div className="container">
            <div className="row">
              <div className="col-md-6">
                <button className="button btn mt-3" id="tweet-quote-button">
                  <a
                    href="https://twitter.com/intent/tweet"
                    id="tweet-quote"
                    target="_blank"
                    className="text-decoration-none" rel="noreferrer"
                  >
                    Tweet
                  </a>
                </button>
              </div>
              <div className="col-md-6">
                <button className="button btn mt-3"
                        onClick={random}
                        id="new-quote">
                  New Quote
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
