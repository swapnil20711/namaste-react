import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mockData/restaurants.json";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import {
  NAMASTE_REACT_BASE_URL,
  RESTAUARANT_ENDPOINT,
} from "../utils/constants";

const Body = () => {
  // Normal JS var
  // let listOfRestaurants = [restaurants[0], restaurants[1], restaurants[9]];

  // State variable -> Super power variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");

  const fetchData = async () => {
    try {
      const res = await fetch(NAMASTE_REACT_BASE_URL + RESTAUARANT_ENDPOINT, {
        method: "GET",
      });

      if (!res.ok) {
        throw new Error(`Request failed with status ${res.status}`);
      }

      const json = await res.json();

      let restaurants = [];

      json.data.data.cards.forEach((card) => {
        const restList =
          card?.card?.card?.gridElements?.infoWithStyle?.restaurants;
        if (restList) {
          restaurants = [...restaurants, ...restList];
        }
      });

      setListOfRestaurants(restaurants);
      setFilteredRestaurants(restaurants);
    } catch (err) {
      console.error("Error fetching restaurants", err);
    }
  };

  useEffect(() => {
    //After components render this will be called
    fetchData();
  }, []);

  //conditional rendering
  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      {/* <div className="search">Search</div> */}
      <div className="filter">
        <div className="search">
          <input
            value={searchText}
            type="text"
            className="search-box"
            onChange={(event) => {
              setSearchText(event.target.value);
            }}
          />
          <button
            onClick={() => {
              //filter restaurants and change the ui
              const filteredList = listOfRestaurants.filter(
                (restaurant) => restaurant.info.name.toLowerCase().includes(searchText.toLowerCase())
              );
              setFilteredRestaurants(filteredList);
            }}
          >
            Search
          </button>
        </div>
        <button
          onClick={() => {
            // filter logic here
            const filteredList = listOfRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4
            );
            setFilteredRestaurants(filteredList);
          }}
          className="filter-btn"
        >
          Top rated restaurants
        </button>
      </div>
      <div className="res-container">
        {filteredRestaurants.map((restaurant) => {
          return (
            <RestaurantCard key={restaurant.info.id} restaurant={restaurant} />
          );
        })}
      </div>
    </div>
  );
};

//default export
export default Body;
