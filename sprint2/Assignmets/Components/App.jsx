import "./App.css";
import Post from "./Components/Q5/Post";
import ThemeContext from "./Components/Q5/ThemeContext";
// import Login from "./Components/Q4/Login";
// import Parent from "./Components/Q1/Parent";
// import { AuthProvider } from "./Components/Q3/AuthContext";
// import Footer from "./Components/Q3/Footer";
// import Login from "./Components/Q3/Login";
// import Navbar from "./Components/Q3/NavBar";
// import { AuthContextProvider } from "./Components/Q4/AuthContext";
// import { ThemeContextProvider } from "./Components/Q4/ThemeContext";
function App() {
  return (
    <>
      {/* <Parent />
      <AuthProvider>
        <div>
          <Navbar />
          <Footer />
          <Login />
        </div>
      </AuthProvider> */}
      {/* <AuthContextProvider>
        <ThemeContextProvider>
          <Login />
        </ThemeContextProvider>
      </AuthContextProvider>
      , */}
      <ThemeContext>
        <Post />
      </ThemeContext>
    </>
  );
}

export default App;
