import { useState } from "react";
import { Toggle, RockBtn, PaperBtn, ScissorsBtn } from "./Buttons";

import Logo from "../img/logo.svg";
import TriangleBackground from "../img/bg-triangle.svg";
import RockImg from "../img/icon-rock.svg";
import PaperImg from "../img/icon-paper.svg";
import ScissorsImg from "../img/icon-scissors.svg";
import RulesImg from "../img/image-rules.svg";
import CloseBtn from "../img/icon-close.svg";

const EasyMode = ({ easyMode, setEasyMode }) => {
  const [userChoice, setUserChoice] = useState("");
  const [computerChoice, setComputerChoice] = useState("");
  const [score, setScore] = useState(0);
  const [userWinLose, setUserWinLose] = useState("");
  const [showRules, setShowRules] = useState(false);
  const [active, setActive] = useState("lose");
  const [scoringReady, setScoringReady] = useState(false);
  const [ready, setReady] = useState(false);
  const [userHalo, setUserHalo] = useState("");
  const [computerHalo, setComputerHalo] = useState("");

  const choices = ["rock", "paper", "scissors"];

  const computerChoose = () => {
    const index = Math.floor(Math.random() * choices.length);
    setComputerChoice(choices[index]);
    return choices[index];
  };

  const play = async (e) => {
    setReady(true);
    setUserChoice(e.target.dataset.value);
    scoring(e.target.dataset.value, computerChoose());
  };

  const scoring = (userChoice, computerChoice) => {
    if (
      (userChoice === "paper" && computerChoice === "rock") ||
      (userChoice === "rock" && computerChoice === "scissors") ||
      (userChoice === "scissors" && computerChoice === "paper")
    ) {
      setUserWinLose("WIN");
      setScore(score + 1);
      setScoringReady(true);
    } else if (
      (userChoice === "rock" && computerChoice === "paper") ||
      (userChoice === "scissors" && computerChoice === "rock") ||
      (userChoice === "paper" && computerChoice === "scissors")
    ) {
      setUserWinLose("LOSE");
      setScore(score - 1);
      setScoringReady(true);
    } else if (userChoice === computerChoice || computerChoice === userChoice) {
      setUserWinLose("DRAW");
      setScore(score);
      setScoringReady(true);
    }
  };

  const reset = () => {
    setUserChoice("");
    setComputerChoice("");
    setScoringReady(false);
    setReady(false);
  };

  const Rules = () => {
    return (
      <div className="rules-overlay">
        <div className="overlay"></div>
        <div className="rules">
          <div className="rules-header">
            <h2>RULES</h2>
            <img
              className="close-icon"
              src={CloseBtn}
              alt="close"
              onClick={() => {
                setShowRules(false);
              }}
            />
          </div>
          <img className="rules-img" src={RulesImg} alt="rules" />
        </div>
      </div>
    );
  };

  const GameHome = () => {
    return (
      <div className="game-buttons-wrapper choose">
        <div className="game-triangle game-bg">
          <img src={TriangleBackground} alt="background" />
        </div>

        <div
          className="game-button rock"
          data-value="rock"
          onClick={(e) => {
            play(e);
          }}
        >
          <div className="icon-bg" data-value="rock">
            <img src={RockImg} alt="rock" data-value="rock" />
          </div>
        </div>

        <div
          className="game-button paper"
          data-value="paper"
          onClick={(e) => {
            play(e);
          }}
        >
          <div className="icon-bg" data-value="paper">
            <img src={PaperImg} alt="paper" data-value="paper" />
          </div>
        </div>

        <div
          className="game-button scissors"
          data-value="scissors"
          onClick={(e) => {
            play(e);
          }}
        >
          <div className="icon-bg" data-value="scissors">
            <img src={ScissorsImg} alt="scissors" data-value="scissors" />
          </div>
        </div>
      </div>
    );
  };

  const Placeholder = () => {
    return <div className="placeholder"></div>;
  };

  const Results = () => {
    userWinLose === "LOSE" ? setActive("lose") : setActive("win");

    return (
      <div className="results">
        {userWinLose === "DRAW" ? (
          <h1>{userWinLose}</h1>
        ) : (
          <h1>YOU {userWinLose}</h1>
        )}
        <div className={`reset ${active}`} onClick={reset}>
          PLAY AGAIN
        </div>
      </div>
    );
  };

  const GameStart = () => {
    if (userWinLose === "WIN") {
      setUserHalo("show");
      setComputerHalo("hide");
    } else if (userWinLose === "LOSE") {
      setUserHalo("hide");
      setComputerHalo("show");
    } else {
      setUserHalo("hide");
      setComputerHalo("hide");
    }

    return (
      <div>
        <div className="game-start desktop">
          <div className={`user players ${userHalo}`}>
            <h2 className="title">YOU PICKED</h2>
            {userChoice === "rock" ? <RockBtn /> : null}
            {userChoice === "paper" ? <PaperBtn /> : null}
            {userChoice === "scissors" ? <ScissorsBtn /> : null}
            {userChoice === "" ? <Placeholder /> : null}
          </div>
          {scoringReady ? <Results /> : null}
          <div className={`computer players ${computerHalo}`}>
            <h2 className="title">THE HOUSE PICKED</h2>
            {computerChoice === "rock" ? <RockBtn /> : null}
            {computerChoice === "paper" ? <PaperBtn /> : null}
            {computerChoice === "scissors" ? <ScissorsBtn /> : null}
            {computerChoice === "" ? <Placeholder /> : null}
          </div>
        </div>

        <div className="game-start mobile">
          <div className="player-container">
            <div className={`user players ${userHalo}`}>
              {userChoice === "rock" ? <RockBtn /> : null}
              {userChoice === "paper" ? <PaperBtn /> : null}
              {userChoice === "scissors" ? <ScissorsBtn /> : null}
              {userChoice === "" ? <Placeholder /> : null}
              <h2 className="title">YOU PICKED</h2>
            </div>
            <div className={`computer players ${computerHalo}`}>
              {computerChoice === "rock" ? <RockBtn /> : null}
              {computerChoice === "paper" ? <PaperBtn /> : null}
              {computerChoice === "scissors" ? <ScissorsBtn /> : null}
              {computerChoice === "" ? <Placeholder /> : null}
              <h2 className="title">THE HOUSE PICKED</h2>
            </div>
          </div>
          {scoringReady ? <Results /> : null}
        </div>
      </div>
    );
  };

  return (
    <div class="EasyMode">
      {showRules ? <Rules /> : null}
      <div className="container">
        <header>
          <div className="header">
            <img className="logo" src={Logo} alt="Rock, Paper, Scissors" />
            <div className="score-container">
              <div className="label">SCORE</div>
              <div className="score">{score}</div>
            </div>
          </div>
          <Toggle easyMode={easyMode} setEasyMode={setEasyMode} />
        </header>

        <main>
          {ready ? <GameStart /> : <GameHome />}

          <div
            className="rules-button"
            onClick={() => {
              setShowRules(true);
            }}
          >
            RULES
          </div>
        </main>
      </div>
    </div>
  );
};

export default EasyMode;
