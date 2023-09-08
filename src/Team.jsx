import {useState} from "react";

export default function Team(){
    const [team, setTeam] = useState(0);

    const handleAdd = ()=>{
        // const newTeam = team + 1;
        setTeam(team + 1);
    }

   function handleRemove (){
       setTeam(team -1);
    }
 return (

    <div style={{border: "2px solid pink", marginTop: "15px"}}>
           <h3>Team: {team}</h3>
           <button onClick={handleAdd}>Add</button>
           <button onClick={handleRemove}>Remove</button>
    </div>
 )
}


