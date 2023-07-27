import { useState, useEffect } from "react";

import "./App.css";
import { Routes, Route } from "react-router-dom";
import LandingPage from "./Components/LandingPage";
import CreateForm from "./Components/CreateForm";
import ResponsiveAppBar from "./Components/NavBar";
import { MovieDataContext } from "./MovieDataContext";
import { moviesData } from "./moviesData";
import CardList from "./Components/CardList";

function App() {
  const value = moviesData;

  const [data, setData] = useState([]); //must set data type in useState to proper object type aka array string so on so forth

  useEffect(() => {
    fetch("http://localhost:3000/api/movies")
      .then((response) => response.json())
      .then((json) => {
        setData(json.result);
      });
  }, []); // open array here is called a dependency array
  //dependency array is telling our useEffect to track any changes

  return (
    <>
      <MovieDataContext.Provider value={data}>
        <ResponsiveAppBar />
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/post" element={<CreateForm />} />
          <Route path="/card" element={<CardList />} />
          {/* <Route path="/blog" element={<Blog />} /> */}
        </Routes>
      </MovieDataContext.Provider>
    </>
  );
}

export default App;
