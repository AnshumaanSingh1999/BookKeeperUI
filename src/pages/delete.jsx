import React from "react";
import { Pseudo_Nav } from "../Components/pseudo_nav";
import { useState } from "react";
import { Navigate } from "react-router-dom";
import axios from "axios";

const Delete=()=> {
  const[book,setbook]=useState({
    book_id:null
  })




  const handlechange=e=>{
    setbook(prev=>({...prev,[e.target.name]:e.target.value}))
  }
  const handleclick=async e=>{
    try{
      await axios.post("http://localhost:8800/delete_book",book)
  
    }
    catch(error){
      console.log(error)
    }
  
  
  }
    return (
      <div>
        <Pseudo_Nav/>
        <div class="container">


        <h1>Delete Book Details</h1>

            <div class="row">
            <div class="col-sm-3 item"><b>ID</b></div>
            
            </div>

            <div class="row">
            <form>
           
            <div class="col-sm-3 item"><input type="text" onChange={handlechange} name="book_id" required></input></div>
            <div class="col-sm-3 item"><button onClick={handleclick}>Submit</button></div>
            </form>
            </div>
            </div>
        
      </div>
    )
  }
  
  export default Delete;
  