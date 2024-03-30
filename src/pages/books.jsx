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
    fetchAllBooks()
  },[]  )
    return (
      <div>
        
        <Pseudo_Nav/>
        <div className="container">

        <h1>Books</h1>


        <table className="table table-hover">
  <tr>
    <th>Book ID</th>
    <th>Book Name</th>
    <th>Book Author</th>
    <th>Book Description</th>
  </tr>

  





  {books.map((book) =>(
  <tr key={book.book_id}>
    <td>{book.book_id}</td>
    <td>{book.book_name}</td>
    <td>{book.book_author}</td>
    <td>{book.book_description}</td>
  </tr>
  
  

  
  ))}

</table>






        </div>
        
      </div>
    )
  }
  
  export default Books;
  