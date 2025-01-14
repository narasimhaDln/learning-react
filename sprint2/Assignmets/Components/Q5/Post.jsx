import { useState, useEffect } from "react";
import axios from "axios";
import { useContext } from "react";
import { ContextTheme } from "./ThemeContext";

function Post() {
  const [data, setData] = useState([]);
  const { theme, toggleTheme } = useContext(ContextTheme);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const res = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        setData(res.data);
      } catch (error) {
        console.log("error", error);
      }
    };
    fetchPosts();
  }, []);
  return (
    <div
      style={{
        backgroundColor: theme === "light" ? "gold" : "black",
        color: "white",
      }}
    >
      <button
        style={{
          marginTop: "10px",
          padding: "20px",
          marginBottom: "10px",
          justifyContent: "center",
        }}
        onClick={toggleTheme}
      >
        switch Theme{theme === "light" ? "light" : "dark"}
      </button>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(4,1fr",
          gap: "20px",
        }}
      >
        {data.map((pos, id) => (
          <div
            key={id}
            style={{
              border: "1px solid black",
              padding: "10px",
              backgroundColor: theme === "light" ? "red" : "brown",
            }}
          >
            <h2>Id:{pos.id}</h2>
            <p>Title:{pos.title}</p>
            <p>Body:{pos.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Post;
