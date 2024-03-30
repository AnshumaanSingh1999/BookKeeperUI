import { render } from "@testing-library/react";
import React from "react";
import { Component } from "react";


export class Pseudo_Nav extends Component{
    render(){
        return(
            <>
            <div class="container">
            <div class="row">
            <div class="col-sm-3 item"><a href="/">Books</a></div>
            <div class="col-sm-3 item"><a href="/add">Add</a></div>
            <div class="col-sm-3 item"><a href="/update">Update</a></div>
            <div class="col-sm-3 item"><a href="/delete">Delete</a></div>
            </div>
            </div>           
            </>
        )
    }
}