import { useEffect, useRef } from "react";

const WebcamStream = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    // Get access to the webcam stream and start playing it
    function getVideo() {
      navigator.mediaDevices
        .getUserMedia({ video: true })
        .then((stream) => {
          let video = videoRef.current as any;
          video.srcObject = stream;
          video.play();
        })
        .catch((err) => {
          console.error("Error accessing the webcam", err);
        });
    }

    getVideo();
  }, [videoRef]);

  return (
    <div className="flex h-full w-full justify-center items-center">
      <video ref={videoRef} />
    </div>
  );
};

export default WebcamStream;
