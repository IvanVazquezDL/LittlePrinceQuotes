import { useState, useEffect } from 'react';

function Quotes() {
    const [data, setData] = useState([]);

    useEffect(() => {
      fetch('http://localhost:5000/api/quotes/')
        .then(response => response.json())
        .then(data => {
            const length = data.quotes.length;
            const random = Math.floor(Math.random() * length);
            setData(data.quotes[random].quote)
        });
    }, []);

    return(
        <div className="quote">
        <h1>{ data }</h1>
        </div>
    );
}

export default Quotes;