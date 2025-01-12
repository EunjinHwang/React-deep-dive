import Player from "./Player.jsx";

function Players(){
    return (<ol id="players">
          <Player name="Player1" symbol="X" />
          <Player name="Player2" symbol="O" />
        </ol>);
}

export default Players;