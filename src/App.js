import Books from "./pages/books";
import Add from "./pages/add";
import Update from "./pages/update";
import { Route, Routes, BrowserRouter } from "react-router-dom";
import Delete from "./pages/delete";
import { Component } from "react";
import Search from "./pages/search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Books/>}/>
        <Route path="/add" element={<Add/>}/>
        <Route path="/update" element={<Update/>}/>
        <Route path="/delete" element={<Delete/>}/>
        <Route path="/search" element={<Search/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
