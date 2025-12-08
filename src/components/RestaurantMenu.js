import { useEffect, useState } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
const RestaurantMenu = () => {
  const [restaurant,setRestaurant] = useState(null);
  const [menu,setMenu] = useState(null);

  const {resId} = useParams();
  useEffect(()=>{
    fetchMenu();
  },[])

  const fetchMenu = async()=>{
    const data = await fetch(`https://www.swiggy.com/mapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=21.99740&lng=79.00110&restaurantId=${resId}&submitAction=ENTER`)
    const json = await data.json();
    setRestaurant(json?.data?.cards?.[2]?.card?.card?.info)
    setMenu(json?.data?.cards?.[5]?.groupedCard?.cardGroupMap?.REGULAR?.cards?.[1]?.card?.card?.itemCards)
  }

  const {name,costForTwoMessage,cuisines} = restaurant??{}
  const info = menu?.map(item => item.card?.info);

  console.log(info)


  return (
    restaurant===null?<Shimmer/>:
    <div className="menu">
      <h1>{name??"unknown"}</h1>
      <h3>{cuisines?.join(", ")} - {costForTwoMessage}</h3>
      <h2>Menu</h2>

      <ul>
        {info.map((i,index)=>(
          <li key={index}>{i.name} - {i.price/100 || i.defaultPrice/100}</li>
        ))}
      </ul>
    </div>
  );
};

export default RestaurantMenu;
