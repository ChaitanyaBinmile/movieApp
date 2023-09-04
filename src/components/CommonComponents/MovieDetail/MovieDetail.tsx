import { movie4, star } from "../../../assets"
import { WatchbuttonComponent } from "../../WatchbuttonComponent/WatchbuttonComponent"
import { FavouritesComponent } from "../FavouritesComponent/FavouritesComponent"

function MovieDetail() {
  return (
    <div>
         <div className="flex flex-col mx-20 my-10 items-start gap-6 lg:flex-row lg:items-center  ">
                <img  className="my-6 w-[380px] h-[380px]" src={movie4}/>
                <div className="flex flex-col text-white gap-4 items-start ">
                    <div className="flex items-center justify-between w-[40vw]  max-w-lg">
                    <h1 className= " font-bold text-[30px]">House of Wealth</h1>
                    <img className=" h-6" src={star}/>

                    </div>
                    <div className="flex gap-10">
                        <p>2023 </p>
                        <p>Drama</p>
                        <p>2hr 38min</p>
                    </div>
                    <p className="flex text-left max-w-lg">
                    The movie follows the lives of a wealthy family, the Johnsons,
                     who appear to have it all: a grand mansion, luxurious cars, and 
                     expensive designer clothing. However, behind the facade of their 
                     lavish lifestyle, there are deep-seated tensions and secrets that
                      threaten to tear the family apart.
                    </p>
                    <div className="flex gap-6">
                        <WatchbuttonComponent/>
                        <FavouritesComponent like={false} size='medium'/>
                    </div>

                </div>
           </div>
    </div>
  )
}

export default MovieDetail