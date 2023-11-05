// import { useState, useEffect } from 'react';
import './App.css';

function App() {
  const long = "40.595834";
  const lat = "-105.1423989";
  const coor = long + "," + lat;
  const hlink = "https://www.google.com/maps/embed/v1/place?key=AIzaSyASCCU9n_NSzHQN8wnNR5BPR4ZngrKjD-8&q=";
  const link = hlink + coor + "&maptype=satellite";
  //const [data, setData] = useState([]);
  //const [isLoading, setIsLoading] = useState(true);

  // useEffect(() => {
  //   // Make a GET request to the FastAPI endpoint
  //   fetch('/predict/from_csv', {
  //     method: 'GET',
  //     headers: {
  //       'Content-Type': 'application/json',
  //     },
  //   })
  //     .then((response) => response.json())
  //     .then((result) => {
  //       // Update the state with the data received from the server
  //       setData(result.message);
  //       setIsLoading(false);
  //     })
  //     .catch((error) => {
  //       console.error('Error fetching data:', error);
  //       setIsLoading(false);
  //     });
  // }, []);

    return(
    <div className="iframe-container">
      <header>
        <img src="newLogo.png" alt="EOGlogo" width="410" height="100"></img>
      </header> 
      <iframe
        id="myIframe"
        width="1473"
        height="500"
        style={{ border: 0 }}
        loading="lazy"
        allowFullScreen
        referrerPolicy="no-referrer-when-downgrade"
        src={link}
      />
      {/* {isLoading ? (
        <p>Loading data...</p>
      ) : (
        <p>
          Data: {data}
        </p>
      )} */}
      <footer>
        <div id="root">
          <button id="leftButton">Previous Coordinates</button>
          <button id="rightButton">Next Coordinates</button>
        </div>
      </footer>
    </div>
  );
}

export default App;
