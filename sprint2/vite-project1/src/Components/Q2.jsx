import { useState, useEffect } from "react";
import axios from "axios";
const JokeApp = () => {
  const [joke, setJoke] = useState("");
  useEffect(() => {
    FetchData();
  }, []);
  const FetchData = () => {
    axios
      .get("https://official-joke-api.appspot.com/random_joke")
      .then((response) => {
        setJoke(response.data.setup + "" + response.data.punchline);
      })
      .catch((error) => {
        console.log("error", error);
      });
  };
  return (
    <div>
      <p>{joke}</p>
      <button onClick={FetchData}>AnotherJOke</button>
    </div>
  );
};
export default JokeApp;
