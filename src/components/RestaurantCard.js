import { CDN_BASE_URL } from "../utils/constants";

const RestaurantCard = ({ restaurant }) => {
  const { name, cuisines, avgRating, costForTwo, sla, cloudinaryImageId } =
    restaurant?.info;
  const styleCard = {
    backgroundColor: "#f0f0f0",
  };
  return (
    <div style={styleCard} className="res-card">
      <img
        draggable={false}
        className="res-logo"
        height={200}
        style={{ objectFit: "cover" }}
        alt="res-logo"
        src={`${CDN_BASE_URL}${cloudinaryImageId}`}
      />
      <h3>{name}</h3>
      <h4>{cuisines.join(", ")}</h4>
      <h4>{avgRating} stars</h4>
      <h4>{costForTwo}</h4>
      <h4>{sla.slaString}</h4>
    </div>
  );
};

export default RestaurantCard;
