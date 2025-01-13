import { useState } from "react";

function Player({initialName, symbol}) {
    const [playerName, setPlayerName] = useState(initialName);
    const [isEditing, setIsEditing] = useState(false);
    
    function handleEditClick(){
        setIsEditing(editing => !editing);
    }

    function handleChange(event){
        setPlayerName(event.target.value);
    }
    let editableplayerName = <span className="player-name">{playerName}</span>;
    let btnCaption = 'Edit';

    if(isEditing){
        editableplayerName = <input type="text" required value={playerName} onChange={handleChange}/>
        btnCaption="Save"
    }

    return (
    <li>
        <span className="player">
            {editableplayerName}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={handleEditClick}>{btnCaption}</button>
    </li>);
}

export default Player;