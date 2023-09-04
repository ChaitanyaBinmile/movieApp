import { movieList } from "../../utilities/constant/MovielistData"
import { FavouritesComponent } from "../CommonComponents/FavouritesComponent/FavouritesComponent";


export const WatchingcardComponent: React.FC = () => {
    return (
        <div className="flex flex-col overflow-x-scroll items-start">
            <h1 className="text-[20px]  text-white font-semibold ml-6">Continue watching</h1>
      <div className="flex flex-col w-[100%] items-start p-6 gap-4 overflow-x-scroll">
        <div className="flex gap-4 overflow-x-scroll">
        {movieList.map(({id,image,name}) => {
          return (
            <div className="relative rounded-[20px] overflow-x-hidden" key={id} >
              <img className="min-w-[330px]" src={image}/>
              <div className="absolute h-6 w-6 top-4 right-4" >
                <FavouritesComponent like={false} size='small'/>
              </div>
              <div className="absolute  flex-col bottom-0 bg-favorite w-[100%]  flex text-black  background-blur-40 opacity-70">
                <p className="font-semibold">{name}</p>
              </div>
              
            </div>
          );
        
        })}
        </div>
      </div>
      </div>
    );
  };