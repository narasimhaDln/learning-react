function Card() {
  const blogs = [
    {
      title: "React Basics",
      content: "Learn the basics of React.",
      isFeatured: true,
    },
    {
      title: "Advanced React",
      content: "Delve deeper into React.",
      isFeatured: false,
    },
    {
      title: "React Performance Tips",
      content: "Optimize your React apps.",
      isFeatured: true,
    },
  ];

  return <>
    <h2>This is content</h2>
    <div >
      {
        blogs.map((ele) => {
          return (
            <div
              style={{
                border: "1px solid red",
                margin: "10px",
                padding: "20px",
                boxShadows:"rgba(100, 100, 111, 0.2) 0px 7px 29px 0px"}}
            >
              <h3>{ele.title}</h3>
              <p>{ele.content}</p>
              <p>{ele.isFeatured ? "Featured" : "NoFeatured"}</p>
            </div>
          );
        })
      }
    </div>
  </>;
}

function App() {
  return <Card />;
  
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App/>)