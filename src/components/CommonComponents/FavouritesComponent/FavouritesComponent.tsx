import React, { useState } from "react";
import { white,purple} from "../../../assets"// Update the path to your purple image
import { favouriteType } from "./type";




export const FavouritesComponent: React.FC<favouriteType> = ({ like, size }) => {



  const [liked, setLike] = useState(like);
  const toggleLike = () => {
    setLike((prevLiked) => !prevLiked);
  };

  return (
    <div>

            <button onClick={toggleLike}>
                    <img className={size==='medium'?"h-[45px]":''} src={liked?purple:white} />
            </button>

    </div>
  );
};
