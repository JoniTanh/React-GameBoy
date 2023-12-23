import React, { useState } from "react";
import "../assets/gameBoy.css";

const Reflection = ({ style }) => (
  <div className="reflection" style={style}></div>
);

const Screen = ({ isOn }) => (
  <div className={`screen-container ${isOn ? "screen-on" : ""}`}>
    {!isOn && (
      <>
        <Reflection
          style={{
            transform: "rotate(-45deg) translate(-140px, -20px)",
            width: "158%",
            height: "40%",
          }}
        />
        <Reflection
          style={{
            transform: "rotate(-45deg) translate(-80px, -100px)",
            width: "100%",
            height: "20%",
          }}
        />
        <Reflection
          style={{
            transform: "rotate(-45deg) translate(-80px, 350px)",
            width: "100%",
            height: "20%",
          }}
        />
      </>
    )}
  </div>
);

const TopInsetBar = () => <div className="top-inset-bar"></div>;
const BottomInsetBar = () => <div className="bottom-inset-bar"></div>;
const ResetBtn = () => (
  <div onClick={() => console.log("RESET CLICK")} className="reset-btn">
    R
  </div>
);

const Button = ({ children, ...props }) => (
  <button className="button" {...props}>
    <div className="button-text">{children}</div>
  </button>
);

const ControlPad = () => (
  <div className="d-pad-container">
    <div className="d-pad">
      <div className="d-pad-horizontal"></div>
      <div className="d-pad-vertical"></div>
      <div className="d-pad-center"></div>
      <div
        className="d-pad-button d-pad-up"
        onClick={() => console.log("UP")}
      ></div>
      <div
        className="d-pad-button d-pad-down"
        onClick={() => console.log("DOWN")}
      ></div>
      <div
        className="d-pad-button d-pad-left"
        onClick={() => console.log("LEFT")}
      ></div>
      <div
        className="d-pad-button d-pad-right"
        onClick={() => console.log("RIGHT")}
      ></div>
    </div>
  </div>
);

const ActionButtons = () => (
  <div className="action-buttons-container">
    <div className="action-buttons">
      <Button onClick={() => console.log("clicked A")}>A</Button>
      <Button onClick={() => console.log("clicked B")}>B</Button>
    </div>
  </div>
);

const StartSelectButtons = ({ setScreenOn }) => (
  <div className="start-select-buttons">
    <div
      className="select-button"
      onClick={(e) => {
        if (!e.target.classList.contains("button-label")) {
          console.log("Clicked Select");
        }
      }}
    >
      <div className="button-label">Select</div>
    </div>
    <div
      className="start-button"
      onClick={(e) => {
        if (!e.target.classList.contains("button-label")) {
          console.log("Clicked Start");
          setScreenOn(true);
        }
      }}
    >
      <div className="button-label">Start</div>
    </div>
  </div>
);

const SpeakerGrill = () => (
  <div className="speaker-grill">
    {[...Array(5)].map((_, index) => (
      <div key={index} className="speaker-grill-line-container">
        <div className="speaker-grill-line"></div>
      </div>
    ))}
  </div>
);

const OrangeCircle = ({ style }) => (
  <div className="orange-dot" style={style}></div>
);

const CircleContainer = () => {
  const circlePositions = [
    { top: "30px", right: "50px" },
    { top: "30px", left: "50px" },
    { bottom: "480px", right: "50px" },
    { bottom: "480px", left: "50px" },
  ];

  return (
    <>
      {circlePositions.map((pos, index) => (
        <OrangeCircle key={index} style={pos} />
      ))}
    </>
  );
};

const GameBoy = () => {
  const [isScreenOn, setScreenOn] = useState(false);

  return (
    <div className="gameboy">
      <TopInsetBar />
      <Screen isOn={isScreenOn} />
      <ResetBtn />
      <CircleContainer />
      <ActionButtons />
      <ControlPad />
      <StartSelectButtons setScreenOn={setScreenOn} />
      <SpeakerGrill />
      <BottomInsetBar />
    </div>
  );
};

export default GameBoy;
