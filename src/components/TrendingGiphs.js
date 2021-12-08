import React, { useEffect, useState } from "react";
import { apiUrl, apiKey } from "../helpers/helper";
import Giphs from "./Giphs";

const TrendingGiphs = () => {
  const [giphs, setGiphs] = useState([]);
  useEffect(() => {
    fetch(`${apiUrl}?api_key=${apiKey}&limit=20`, {
      api_key: apiKey,
    })
      .then((res) => res.json())
      .then((data) => {
        setGiphs(data.data);
        // console.log(data);
      })
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <h2 className="t-center heading">
        <i class="fas fa-chart-line color1"></i> Trending Gifs
      </h2>
      <div className="trendingGifs">
        {giphs.map((gif) => (
          <Giphs gif={gif} />
        ))}
      </div>
    </div>
  );
};

export default TrendingGiphs;
