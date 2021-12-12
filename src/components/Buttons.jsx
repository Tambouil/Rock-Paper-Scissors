import RockImg from "../img/icon-rock.svg";
import PaperImg from "../img/icon-paper.svg";
import ScissorsImg from "../img/icon-scissors.svg";
import LizardImg from "../img/icon-lizard.svg";
import SpockImg from "../img/icon-spock.svg";

const Toggle = ({ easyMode, setEasyMode }) => {
  if (easyMode) {
    return (
      <div className="toggle easy">
        <div
          className="toggle-icon"
          onClick={() => {
            setEasyMode(true);
          }}
        >
          EASY MODE
        </div>
        <div
          className="switch"
          onClick={() => {
            setEasyMode(false);
          }}
        >
          <div className="switch-button"></div>
        </div>
        <div
          className="toggle-icon"
          onClick={() => {
            setEasyMode(false);
          }}
        >
          HARD MODE
        </div>
      </div>
    );
  } else {
    return (
      <div className="toggle advanced">
        <div
          className="toggle-icon"
          onClick={() => {
            setEasyMode(true);
          }}
        >
          EASY MODE
        </div>
        <div
          className="switch"
          onClick={() => {
            setEasyMode(true);
          }}
        >
          <div className="switch-button"></div>
        </div>
        <div
          className="toggle-icon"
          onClick={() => {
            setEasyMode(false);
          }}
        >
          HARD MODE
        </div>
      </div>
    );
  }
};

const RockBtn = () => {
  return (
    <div className="game-button rock">
      <div className="icon-bg">
        <img src={RockImg} alt="rock" />
      </div>
    </div>
  );
};

const PaperBtn = () => {
  return (
    <div className="game-button paper">
      <div className="icon-bg">
        <img src={PaperImg} alt="paper" data-value="paper" />
      </div>
    </div>
  );
};

const ScissorsBtn = () => {
  return (
    <div className="game-button scissors">
      <div className="icon-bg">
        <img src={ScissorsImg} alt="scissors" />
      </div>
    </div>
  );
};

const LizardBtn = () => {
  return (
    <div className="game-button lizard">
      <div className="icon-bg">
        <img src={LizardImg} alt="lizard" />
      </div>
    </div>
  );
};

const SpockBtn = () => {
  return (
    <div className="game-button spock">
      <div className="icon-bg">
        <img src={SpockImg} alt="spock" />
      </div>
    </div>
  );
};

export { Toggle, RockBtn, PaperBtn, ScissorsBtn, LizardBtn, SpockBtn };
