import { NavbarComponent } from "../../components/CommonComponents/NavbarComponent/NavbarComponent"

import MovieDetail from "../../components/CommonComponents/MovieDetail/MovieDetail"
import { FavouritecardComponent } from "../../components/CommonComponents/FavouritecardComponent/FavouritecardComponent"


export const DetailPageComponent: React.FC = () => {

   

    return (
        <div className="bg-black w-screen overflow-scroll">
            <div className="p-8">
            <NavbarComponent/>
            </div>
            <FavouritecardComponent/>

          <MovieDetail/>

        </div>
    )
}