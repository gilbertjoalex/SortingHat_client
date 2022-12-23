import DetailsBox from "../components/DetailsBox";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";

// Selectors
import { useEffect } from "react";
import { selectAllHogwartHouses } from "../store/hoghouse/selector";
import { allHogwartsHouses } from "../store/hoghouse/thunk";
import SortingHat from "../components/SortHat";

const HomePage = () => {
  const dispatch = useDispatch();
  const hogwarthouses = useSelector(selectAllHogwartHouses);
  // const profile = useSelector(selectProfile);
  // const user = useSelector(selectUser);
  console.log(hogwarthouses, "YIPPPEE");

  //Testing
  // console.log(artwork); // SUCCESSFUL REDUX STATE SELECTION/FORCING ON ARTWORKPAGE -- ALL ARTWORKS

  //Setting State

  useEffect(() => {
    dispatch(allHogwartsHouses()); // STEP 2. Dispatch the API call to local state at refresh. The information is now at the page. Go to slice.
  }, []);

  return (
    <div>
      <SortingHat />
      <h2> Hogwarts Houses</h2>
      {hogwarthouses &&
        hogwarthouses.map((hog) => {
          return (
            <DetailsBox
              key={hog.id}
              id={hog.id}
              name={hog.name}
              founder={hog.founder}
              members={hog.members}
              symbol={hog.symbol}
            />
          );
        })}
    </div>
  );
};

export default HomePage;
