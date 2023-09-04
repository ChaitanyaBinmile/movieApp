import React, { useState } from "react";
import { white, purple } from "../../../assets"; // Update the path to your purple image
import { FavouriteType } from "../FavouritesComponent/type";
import { MovieList } from "../../../utilities/constant/MovielistData";
import { MovieType } from "../../../type";

interface ContextType {
  favArr: MovieType[];
}

export const LikeContext = React.createContext<ContextType>({
  favArr: MovieList,
});



export const FavouritesArray: React.FC<FavouriteType> = ({ like, size, id }) => {
  const [favourite, setFavourite] = useState<MovieType[]>(MovieList);
  const [liked, setLike] = useState(like);

  const toggleLike = (movieId: string) => {
    setLike((prevLiked) => !prevLiked);


    const movieIndex = favourite.findIndex((movie) => movie.id === movieId);

    if (movieIndex !== -1) {

      const updatedFavourite = [...favourite];
      updatedFavourite[movieIndex].like = !updatedFavourite[movieIndex].like;


      setFavourite(updatedFavourite);
      console.log(favourite)
    }
  };

  return (
    <div>
      <LikeContext.Provider value={{ favArr: favourite }}>
        <button onClick={() => toggleLike(id)}>
          <img className={size === "medium" ? "h-[45px]" : ""} src={liked ? purple : white} />
        </button>
      </LikeContext.Provider>
    </div>
  );
};
