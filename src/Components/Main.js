import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
export default function Main() {
  const [name, setname] = useState("");
  const [result, setresult] = useState([]);

  useEffect(async () => {
    await axios
      .get(
        "https://pixabay.com/api/?key=22107302-4d47c8df59e1008c129d324a9"
      )
      .then((response) => setresult(response.data.hits));
  }, []);



  // .data.hits

  const submitHandler = async() => {
    await axios.get(`https://pixabay.com/api/?key=22107302-4d47c8df59e1008c129d324a9&q=${name}`).then(response => setresult(response.data.hits)).catch(error => console.log(error))
    setname("");
  };

  

  return (
    <div style={{display:'flex', height:'100vh', width:'100vw', flexDirection:'column',justifyContent:'center',alignItems:'center', overflow:'hidden'}}>
      <h1>Image-Finder</h1>
      <div>
      <input
        type="text"
        placeholder="Search"
        value={name}
        style={{margin:'10px'}}
        onChange={(e) => setname(e.target.value)}
      />
      <button onClick={submitHandler}>Search</button>
      </div>

      <div style={{display:'flex', flexWrap:'wrap',height:'100%', width:'100vw', overflow:'auto'}}>
      {result.map((img, index) => (
        <img src={img.largeImageURL} style={{height:'300px', width:"500px"}} key={index} />
      ))}
      </div>
    </div>
  );
}
