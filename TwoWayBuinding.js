import React,{ useState, userState } from 'react'
export default function TwoWayBuinding(){
    const [name,setName]=useState("");
    const changeName =(event)=>setName(event.target.value)
    return(
        <div>TwoWayBuinding
        <input onChange={changeName} value={name}></input>
        <p>The name is {name}</p>
        </div>
    )

}