import React, { useState, useEffect } from "react";
import "./FlareCursor.css";

function FlareCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isPointer, setIsPointer] = useState(false);
  const [isTextHover, setIsTextHover] = useState(false);
  const [isImageHover, setIsImageHover] = useState(false);
  const [isVideoHover, setIsVideoHover] = useState(false); // new state
  const [text, setText] = useState("");

  const handleMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY });
    const target = e.target;
    setIsPointer(
      window.getComputedStyle(target).getPropertyValue("cursor") === "pointer"
    );
    setIsTextHover(target.tagName === "A" || target.tagName === "SPAN");
    setIsImageHover(target.tagName === "IMG");
    setIsVideoHover(target.tagName === "VIDEO"); // check if hovering over VIDEO element
    if (isTextHover) {
      setText("Hello");
    } else {
      setText("");
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", handleMouseMove);
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const flareSize = isPointer ? 0 : isTextHover ? 50 : isImageHover ? 70 : isVideoHover ? 80 : 30;
  const cursorStyle = isPointer
    ? { left: "-100px", top: "-100px" }
    : {};

  return (
    <div
      className={`flare ${isPointer ? "pointer" : ""} ${isTextHover ? "text-hover" : ""} ${isImageHover ? "image-hover" : ""} ${isVideoHover ? "video-hover" : ""}`}
      style={{
        ...cursorStyle,
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
            transform: "translate(-50%, -50%) scale(1.2)",
            fontSize: "12px",
            fontWeight: "normal",
            color: "#000",
          }}
        >
          Click Zoom
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
          &#9654;{/* play icon */}
        </span>
      )}
    </div>
  );
}

export default FlareCursor;