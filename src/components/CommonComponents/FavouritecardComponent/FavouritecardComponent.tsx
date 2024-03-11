import React from "react";
import { FavouritesArray } from "../FavouriteArray/FavouriteArray";
import { useAppSelector } from "../../../app/hooks";

export const FavouritecardComponent: React.FC = () => {
  const favArr = useAppSelector((state) => state.FavArray.favArr);

  // Check if favArr is not null or undefined before logging
  if (favArr) {
    console.log(favArr);
  }

  const likedMovies = favArr?.filter((movie) => movie.like === true) || [];

  return (
    <div className="flex flex-col overflow-x-scroll items-start mt-5">
      <h1 className="text-[20px] text-white font-semibold ml-6">Favourites</h1>
      <div className="flex flex-col w-[100%] items-start p-6 gap-4 overflow-x-scroll">
        <div className="flex gap-4 overflow-x-scroll">
          {likedMovies.map(({ id, image, name, year, genre, like }) => {
            return (
              <div className="relative rounded-[20px] overflow-x-hidden" key={id}>
                <img className="min-w-[230px]" src={image} alt={name} />
                <div className="absolute h-6 w-6 top-4 right-4">
                  <FavouritesArray like={like} size="small" id={id} />
                </div>
                <div className="absolute flex-col bottom-0 w-[100%] flex text-black p-5 backdrop-blur-[90px] bg-favorite opacity-70">
                  <p className="font-semibold">{name}</p>
                  <p className="font-normal text-sm">
                    {year} | {genre}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
