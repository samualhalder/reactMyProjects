import React, { useState } from "react";
const apikey = "d750010dae19fc48195cde07a186c260";
const apiurl =
  "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

function Card() {
  const [city, setCity] = useState("");
  const [data, setData] = useState(null);
  const handleClick = async () => {
    if (city.length) {
      fetch(apiurl + city + `&appid=${apikey}`)
        .then((res) => {
          return res.json();
        })
        .then((apidata) => {
          setData(apidata);
          console.log("new data arrives", data);
        });
    }
  };
  return (
    <div className="m-3 p-4">
      <div>
        <input
          type="text"
          name=""
          id=""
          value={city}
          className="w-[80%] m-4 h-10 rounded-lg outline-none p-2"
          onChange={(e) => setCity(e.target.value)}
        />
        <button
          className="bg-white rounded-[50%] h-10 w-10"
          onClick={handleClick}
        >
          🔍
        </button>
      </div>

      {data && data.cod === "404" && (
        <div>
          <h1 className="text-red-500">Wops!! {data.message}</h1>
        </div>
      )}

      {data && data.cod === 200 && (
        <div className="bg-blue-800 text-white m-5 p-4">
          <div className="text-center justify-center">
            <h1>{data.main.temp}°C</h1>
            <h1>{data.name}</h1>
          </div>
          <div className="m-5 p-4">
            <div className="justify-between flex">
              <h1>{data.main.temp_max}°C MAX</h1>
              <h1>{data.main.temp_min}°C MIN</h1>
            </div>
            <div className="flex justify-between">
              <h1>{data.weather[0].main}</h1>
              <h1>{data.main.humidity}%</h1>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Card;
