import axios from "axios";
import { useState } from "react";

function App() {
  const [photo, setPhoto] = useState("");
  const [clientId, setClientId] = useState(
    "7-pg5TbLc5aqu1ToR-GfUADZd4U1IF7k3gxPG67xfa4"
  );
  const [result, setResult] = useState([]);

  function handleChange(event) {
    setPhoto(event.target.value);
  }

  function handleSubmit(event) {
    console.log(photo);

    const url =
      "https://api.unsplash.com/search/photos?page=1&query=" +
      photo +
      "&client_id=" +
      clientId;

    axios.get(url).then((response) => {
      debugger;
      setResult(response.data.results);
    });
  }

  return (
    <div className="App">
      <h1 style={{ textAlign: "center", color: "blue" }}>
        Unsplash Photo Search App
      </h1>
      <div style={{ textAlign: "center" }}>
        <input
          onChange={handleChange}
          type="text"
          name="photo"
          placehilder="Search for the photo"
        />
        <button onClick={handleSubmit} type="submit">
          Search
        </button>
      </div>
      <br />
      <hr />

      {result.map((photo) => (
        <img src={photo.urls.small} height="300" width="600" />
      ))}
    </div>
  );
}
export default App;
