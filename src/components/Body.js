import RestaurantCard from "./RestaurantCard";
import restaurants from "../utils/mockData/restaurants.json";
import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { NAMASTE_REACT_BASE_URL, RESTAUARANT_ENDPOINT } from "../utils/constants";

const Body = () => {
  // Normal JS var
  // let listOfRestaurants = [restaurants[0], restaurants[1], restaurants[9]];

  // State variable -> Super power variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

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
        <button
          onClick={() => {
            // filter logic here
            const filteredList = listOfRestaurants.filter(
              (restaurant) => restaurant.info.avgRating > 4
            );
            setListOfRestaurants(filteredList);
          }}
          className="filter-btn"
        >
          Top rated restaurants
        </button>
      </div>
      <div className="res-container">
        {listOfRestaurants.map((restaurant) => {
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
