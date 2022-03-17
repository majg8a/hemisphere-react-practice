import React from "react";
import up from "./arrows/up.png";
import down from "./arrows/down.png";
import "./HemisphereDisplay.css";
function HemisphereDisplay({ latitude }) {
  const { text, picture } =
    latitude > 0
      ? {
          text: "north",
          picture: up,
        }
      : {
          text: "south",
          picture: down,
        };
  return (
    <>
      <div className="full-window center">
        <div className="ui raised text container segment">
          <div className="image">
            <img
              src={picture}
              alt=""
              style={{
                width: "100%",
              }}
            />
          </div>
          <div className="ui teal bottom attached label">
            <h1>{text}</h1>
          </div>
        </div>
      </div>
    </>
  );
}

export default HemisphereDisplay;
