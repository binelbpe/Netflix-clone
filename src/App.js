import React from "react";
import NavBar from "./components/NavBar/NavBar";
import './App.css'
import RowPost from "./components/RowPost/RowPost";
import Banner from "./components/Banner/Banner"
import { originals,action,ComedyMovies,HorrorMovies,ActionMovies,RomanceMovies } from "./urls";
function App() {
  return (
    <div className="App">
      <NavBar/>
      <Banner/>
      <RowPost url={originals} title='Netflix Originals'/>
      <RowPost url={action} title='Action' isSmall/>
      <RowPost url={ComedyMovies} title='ComedyMovies' isSmall/>
      <RowPost url={HorrorMovies} title='HorrorMovies' isSmall/>
      <RowPost url={ActionMovies} title='ActionMovies' isSmall/>
      <RowPost url={RomanceMovies} title='RomanceMovie' isSmall/>
    </div>
  );
}

export default App;
