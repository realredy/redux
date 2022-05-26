import React, { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { experimenta } from "../redux/game/reducerGame";
import "./conecta.css";

function Conecta() {
  const [turnplayer, setTurnplayer] = useState(true);
  const [playerone, setPlayerone] = useState([]);
  const [playertwo, setPlayertwo] = useState([]);

  const dispach = useDispatch();
  const couterGame = useSelector((state) => state.game.counterGame);

  if (turnplayer && playertwo.length > 2) {
    dispach(experimenta(playertwo));
  }

  if (!turnplayer && playerone.length > 2) {
    dispach(experimenta(playerone));
  }

  const checkActualPlayer = (e) => {
    if (e.target.value === "") {
      if (turnplayer) {
        e.target.value = "+";
        setPlayerone(playerone.concat([Number(e.target.name)]));

        setTurnplayer(() => {
          return !turnplayer;
        });
      } else {
        e.target.value = "O";
        setPlayertwo(playertwo.concat([Number(e.target.name)]));
        setTurnplayer(() => {
          return !turnplayer;
        });
      }
    }
  };

  if (couterGame === 7) {
    return (
      <>{!turnplayer ? <h2>+ Has Ganado...</h2> : <h2>0 Has Ganado...</h2>}</>
    );
  }
  return (
    <>
      <div className="wrapperMarkers">
        <ul>
          <li>
            <input
              onClick={(e) => {
                checkActualPlayer(e);
              }}
              type="text"
              name="1"
            />
          </li>
          <li>
            <input
              onClick={(e) => {
                checkActualPlayer(e);
              }}
              type="text"
              name="2"
            />
          </li>
          <li>
            <input
              onClick={(e) => {
                checkActualPlayer(e);
              }}
              type="text"
              name="3"
            />
          </li>
          <li>
            <input
              onClick={(e) => {
                checkActualPlayer(e);
              }}
              type="text"
              name="4"
            />
          </li>
          <li>
            <input
              onClick={(e) => {
                checkActualPlayer(e);
              }}
              type="text"
              name="5"
            />
          </li>
          <li>
            <input
              onClick={(e) => {
                checkActualPlayer(e);
              }}
              type="text"
              name="6"
            />
          </li>
          <li>
            <input
              onClick={(e) => {
                checkActualPlayer(e);
              }}
              type="text"
              name="7"
            />
          </li>
          <li>
            <input
              onClick={(e) => {
                checkActualPlayer(e);
              }}
              type="text"
              name="8"
            />
          </li>
          <li>
            <input
              onClick={(e) => {
                checkActualPlayer(e);
              }}
              type="text"
              name="9"
            />
          </li>
        </ul>
      </div>
    </>
  );
}

export default Conecta;
