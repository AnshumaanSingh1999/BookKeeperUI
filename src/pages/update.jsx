import React from "react";
import { Link } from "react-router-dom";
import { Pseudo_Nav } from "../Components/pseudo_nav";


const Update=()=> {
    return (
      <div>
        <Pseudo_Nav/>
        <div class="container">


        <h1>Update Book Details</h1>

            <div class="row">
            <div class="col-sm-3 item"><b>Books</b></div>
            <div class="col-sm-3 item"><b>Add</b></div>
            <div class="col-sm-3 item"><b>Update</b></div>
            <div class="col-sm-3 item"><b>Delete</b></div>
            </div>

            <div class="row">
            <form>
            <div class="col-sm-3 item"><input type="text" ></input></div>
            <div class="col-sm-3 item"><input type="text" ></input></div>
            <div class="col-sm-3 item"><input type="text" ></input></div>
            <div class="col-sm-3 item"><input type="text" ></input></div>
            </form>
            </div>
            </div>
       
      </div>
    )
  }
  
  export default Update;
  