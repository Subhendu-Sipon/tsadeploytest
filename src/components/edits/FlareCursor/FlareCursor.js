import React, { useState, useEffect, useRef } from "react";
import "./FlareCursor.css";

function FlareCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isTextHover, setIsTextHover] = useState(false);
  const [isImageHover, setIsImageHover] = useState(false);
  const [isVideoHover, setIsVideoHover] = useState(false);
  const [text, setText] = useState("");
  const [imageClickCount, setImageClickCount] = useState(0);
  const imageRef = useRef(null);

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
    const target = e.target;
    setIsPointer(
      window.getComputedStyle(target).getPropertyValue("cursor") === "pointer"
    );
    setIsTextHover(target.tagName === "A" || target.tagName === "SPAN");
    setIsImageHover(target.tagName === "IMG");
    setIsVideoHover(target.tagName === "VIDEO");
    if (isTextHover) {
      setText("Hello");
    } else {
      setText("");
    }
  };

  const handleClick = (e) => {
    if (e.target.tagName === "IMG") {
      setImageClickCount((prevCount) => prevCount + 1);
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("click", handleClick);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("click", handleClick);
    };
  }, []);

  const flareSize = isPointer
    ? 0
    : isTextHover
    ? 50
    : isImageHover
    ? imageClickCount % 2 === 0
      ? 60
      : 50
    : isVideoHover
    ? 80
    : 10;
  const cursorText = isImageHover
    ? imageClickCount % 2 === 0
      ? "Click to Zoom"
      : "Zoom Out"
    : "";

    

  return (
    <div
      className={`flare ${isPointer ? "pointer" : ""} ${
        isTextHover ? "text-hover" : ""
      } ${isImageHover ? "image-hover" : ""} ${
        isVideoHover ? "video-hover" : ""
      }`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
        width: `${flareSize}px`,
        height: `${flareSize}px`,
      }}
    >
      {isTextHover && (
        <span
          className="cursor-text"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "14px",
            fontWeight: "bold",
            color: "#fff",
          }}
        >
          {text}
        </span>
      )}
      {isImageHover && (
        <span
          className="cursor-zoom"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "8px",
            fontWeight: "normal",
            color: "#000",
            textAlign: "center",
          }}
          ref={imageRef}
        >
          {cursorText}
        </span>
      )}
      {isVideoHover && (
        <span
          className="cursor-play"
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            fontSize: "24px",
            fontWeight: "bold",
            color: "#000",
          }}
        >
          &#9654;{/* play */}
        </span>
      )}
    </div>
  );
}

export default FlareCursor;
