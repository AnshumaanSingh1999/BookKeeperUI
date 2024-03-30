import axios from "axios";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Pseudo_Nav } from "../Components/pseudo_nav";


const Books=()=> {
  const [books,setbooks]=useState([])
  useEffect(()=>{
    const fetchAllBooks=async()=>{
      try{
        const res=await axios.get("http://localhost:8800/books")
        console.log(res)
        setbooks(res.data)
      }
      catch(err){
        console.log(err)
      }
    }
  },[]  )
    return (
      <div>
        
        <Pseudo_Nav/>

        <p>Books</p>
        
        
      </div>
    )
  }
  
  export default Books;
  