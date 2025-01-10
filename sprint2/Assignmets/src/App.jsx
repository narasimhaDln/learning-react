import "./App.css";
import MyComponent from "./Components/Question1";
import FocusInput from "./Components/Question2";
import Timer from "./Components/Question3";
import OtpHandling from "./Components/Question4";
import VideoControl from "./Components/Question5";

function App() {
  return (
    <>
      <OtpHandling />
      <MyComponent />
      <FocusInput />
      <Timer />
      <VideoControl />
    </>
  );
}

export default App;
