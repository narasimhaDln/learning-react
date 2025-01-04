
function Card({title,children}) {
  return (
    <>
      <div
        style={{
          border: "5px solid black",
          margin: "10px",
          padding: "20px",
          boxShadow: "10px 5px 5px white;",
        }}
      >
        <h1>{title}</h1>
        <p>{children}</p>
      </div>
    </>
  );
}

function App() {
  const propsData = {
    title: "Masai School",
    children:"Full stack web development"
  }
  return (
    <>
     <Card title={propsData.title} children={propsData.children}/>
    </>
  )
}
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<App/>)