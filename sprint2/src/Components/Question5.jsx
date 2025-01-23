import { useRef } from "react";
function VideoControl() {
  const videoRef = useRef(null);
  //function play video
  const handlePlay = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };
  //function to pause video
  const handlePause = () => {
    if (videoRef.current) {
      videoRef.current.pause();
    }
  };
  //function to restart the video;
  const handleRestart = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = 0;
      videoRef.current.play();
    }
  };
  return (
    <div>
      <h1>Video Controller</h1>
      <video ref={videoRef} style={{ width: "300px" }}>
        <source
          src="https://www.learningcontainer.com/wp-content/uploads/2020/05/sample-mp4-file.mp4"
          type="video/mp4"
        ></source>
        Your video browser not support the video tag.
      </video>
      <div
        style={{
          marginRight: "10px",
          padding: "10px",
          justifyContent: "space-between",
          backgroundImage: "linear-gradient(midnightBlue,aqua)",
          width: "150px",
        }}
      >
        <button onClick={handlePlay}>Play</button>
        <button onClick={handlePause}>pause</button>
        <button onClick={handleRestart}>restart</button>
      </div>
    </div>
  );
}
export default VideoControl;
