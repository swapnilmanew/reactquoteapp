import React, {useEffect, useState} from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const Quotes = () =>
{
    const [quote, setQuote] = useState([]);
    const fetchQuote = async() =>
    {
        const data = await fetch("https://swquotes.herokuapp.com/random");
        const quote = await data.json();
        console.log(quote[0].quote);
        setQuote(quote[0]);
    }

    const newQuote = ()=>
    {
        fetchQuote();
    }

    useEffect(() => {
        fetchQuote();
    }, []);

    return(
        <>
          <div className="container mt-4">
              <h1 className="display-2 fw-bold text-center">
                  Motivational Quotes 
                  <br/>
                 <span className="text-primary"> React App</span>
              </h1>
              <div className="row">
                  <div className="col-12 col-sm-10 col-md-7 mx-auto mt-4">
                      <div className="card border-0 shadow-lg">
                          <div className="card-body text-center">
                              <h2>
                                  {quote.quote}
                              </h2>
                              <p className="text-muted">- {quote.author}</p>
                              <button className="btn btn-primary" onClick={newQuote}>New Quote</button>
                          </div>
                      </div>
                  </div>
              </div>
          </div>
        </>
    )
}

export default Quotes;