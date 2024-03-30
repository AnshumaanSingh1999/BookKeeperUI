import React from "react";
import { Pseudo_Nav } from "../Components/pseudo_nav";
import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


const Search=()=> {

  const[book,setbook]=useState({
    book_name:"", 
  })

const navigate=useNavigate()

const handlechange=e=>{
  setbook(prev=>({...prev,[e.target.name]:e.target.value}))
}
const handleclick=async e=>{
  e.preventDefault()
  try{
    await axios.post("http://localhost:8800/search_book",book)
    navigate("/")

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

        <h1>Search Book Details</h1>

            <div class="row">
            <div class="col-sm-3 item"><b>Book Name</b></div>
            </div>

            <div class="row">
            <form>
            <div class="col-sm-3 item"><input type="text" onChange={handlechange} name="book_name" required></input></div>
            <div class="col-sm-3 item"><button onClick={handleclick}>Submit</button></div>
            </form>
            </div>


            </div>           
            

                
      </div>
    )
  }
  
  export default Search;
  