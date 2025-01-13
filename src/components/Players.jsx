import Player from "./Player.jsx";

function Players(){
    return (<ol id="players">
          <Player initialName="Player1" symbol="X" />
          <Player initialName="Player2" symbol="O" />
        </ol>);
}

export default Players;