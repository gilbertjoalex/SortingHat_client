//PACKAGES
import axios from "axios";
import { useParams } from "react-router-dom";
//CONSTANTS

// //REDUCERS
// import { reduceAllArtworks, reduceArtworkDetails } from "./slice";
import { reduceAllHouses } from "./slice";
// import { setMessage, appLoading, appDoneLoading } from "../appState/slice";
// // import { addBid } from "./slice";   //GISBERT REFORMED
// import { addHeart } from "./slice";

// //SELECTORS
// import { selectToken } from "../user/selectors";

//AXIOS REQUESTS

export const allHogwartsHouses = () => async (dispatch, getState) => {
  const response = await axios.get("http://localhost:4000/hogwarts");
  console.log(response, "This is my ALL response");
  dispatch(reduceAllHouses(response.data));
};
