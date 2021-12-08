import React, { useEffect, useState } from "react";
import { searchApiUrl, apiKey } from "../helpers/helper";
import Giphs from "./Giphs";
const Home = () => {
  const [searchText, setSearchText] = useState("");
  const [searchResult, setSearchResult] = useState([]);
  const [message, setMessage] = useState("");
  useEffect(() => {
    setMessage("Search for a gif");
    return () => {
      setMessage("");
    };
  }, []);
  let handleChange = (e) => {
    setSearchText(e.target.value);
  };
  let handleClick = () => {
    fetch(`${searchApiUrl}?api_key=${apiKey}&q=${searchText}`)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setSearchResult(data.data);
        if (data.data.length === 0) {
          setMessage("No results found...");
        }
      });
  };
  return (
    <>
      <div className="searchBox">
        <input type="text" onChange={handleChange} placeholder="Search Gifs" />{" "}
        <i className="fas fa-search fa-2x color1" onClick={handleClick}></i>
      </div>
      <div className="d-flex align-center da-center ">
        <i className="fas fa-angle-double-left fa-2x color1 pr1"></i>{" "}
        <h2 className="t-center pr1 ">Search Result</h2>
        <i className="fas fa-angle-double-right fa-2x color1"></i>
      </div>
      <div className="gifsSection">
        {searchResult.length > 0 ? (
          searchResult.map((gif) => <Giphs gif={gif} />)
        ) : (
          <h2>{message}</h2>
        )}
      </div>
    </>
  );
};

export default Home;
