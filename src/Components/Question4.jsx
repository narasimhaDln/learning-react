import { useState } from "react";
import "../../src/App.css";
function OtpHandling() {
  const [otp, setOtp] = useState(new Array(4).fill(""));
  const HandleChange = (e, index) => {
    if (isNaN(e.target.value)) return false;
    setOtp([...otp.map((data, i) => (i === index ? e.target.value : data))]);
    if (e.target.value && e.target.nextSibling) {
      e.target.nextSibling.focus();
    }
  };
  const ClearOtp = () => {
    setOtp(new Array(4).fill(""));
  };
  return (
    <div className="parent">
      <h2>OTP Handler</h2>
      <div className="otp-area">
        {otp.map((data, i) => {
          return (
            <input
              key={i}
              type="text"
              value={data}
              maxLength={1}
              onChange={(e) => HandleChange(e, i)}
            />
          );
        })}
      </div>
      <div className="button">
        <button onClick={() => alert(otp.join(""))}>Submit </button>

        <button onClick={ClearOtp}>Clear</button>
      </div>
    </div>
  );
}
export default OtpHandling;
