import React from "react";
import { Link } from "react-router-dom";
import { Pseudo_Nav } from "../Components/pseudo_nav";
import { useState } from "react";
import axios from "axios";


const Update=()=> {

  const[book,setbook]=useState({
    book_name:"",
    book_description:"",
    book_author:"" ,
    book_id:null
  })

  const handlechange=e=>{
    setbook(prev=>({...prev,[e.target.name]:e.target.value}))
  }
  const handleclick=async e=>{
    try{
      await axios.post("http://localhost:8800/update_book",book)
  
    }
    catch(error){
      console.log(error)
    }
  
  
  }
  
  console.log(book)


    return (
      <div>
        <Pseudo_Nav/>
        <div class="container">


        <h1>Update Book Details</h1>

            <div class="row">
            <div class="col-sm-2 item"><b>Book Name</b></div>
            <div class="col-sm-3 item"><b>Book Description</b></div>
            <div class="col-sm-2 item"><b>Book Author</b></div>
            <div class="col-sm-3 item"><b>ID</b></div>
            </div>

            <div class="row">
            <form>
            <div class="col-sm-2 item"><input type="text" onChange={handlechange} name="book_name" required></input></div>
            <div class="col-sm-3 item"><input type="text" onChange={handlechange} name="book_description" required></input></div>
            <div class="col-sm-2 item"><input type="text" onChange={handlechange} name="book_author" required></input></div>
            <div class="col-sm-3 item"><input type="text" onChange={handlechange} name="book_id" required></input></div>
            <div class="col-sm-2 item"><button onClick={handleclick}>Submit</button></div>
            </form>
            </div>
            </div>
       
      </div>
    )
  }
  
  export default Update;
  