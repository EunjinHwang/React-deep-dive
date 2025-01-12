import { useState } from "react";

function Player({name, symbol}) {
    const [isEditing, setIsEditing] = useState(false);
    
    function HandleEditClick(){
        setIsEditing(!isEditing);
    }

    let playerName = <span className="player-name">{name}</span>
    let btnCaption = 'Edit';

    if(isEditing){
        playerName = <input type="text" required />
        btnCaption="Save"
    }

    return (
    <li>
        <span className="player">
            {playerName}
            <span className="player-symbol">{symbol}</span>
        </span>
        <button onClick={HandleEditClick}>{btnCaption}</button>
    </li>);
}

export default Player;