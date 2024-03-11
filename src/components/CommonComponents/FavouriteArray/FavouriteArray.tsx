import React, { useState } from "react";
import { white, purple } from "../../../assets"; // Update the path to your purple image
import { FavouriteType } from "../FavouritesComponent/type";
import { MovieList } from "../../../utilities/constant/MovielistData";
import { MovieType } from "../../../type";
import { useAppDispatch } from "../../../app/hooks";
import { setFavourite } from "../../../app/feature/likeSlice/likeSlice";

interface ContextType {
  favArr: MovieType[];
}

export const LikeContext = React.createContext<ContextType>({
  favArr: MovieList,
});



export const FavouritesArray: React.FC<FavouriteType> = ({ like, size, id }) => {
  const dispatch = useAppDispatch()
 
  const [liked, setLike] = useState(like);

  const toggleLike = (movieId: string) => {
    setLike((prevLiked) => !prevLiked);
    dispatch(setFavourite(movieId))
    }
  

  return (
    <div>
      
        <button onClick={() => toggleLike(id)}>
          <img className={size === "medium" ? "h-[45px]" : ""} src={liked ? purple : white} />
        </button>
      
    </div>
  );

  };