import { FavouritesComponent } from "../../../components/CommonComponents/FavouritesComponent/FavouritesComponent"
import { WatchbuttonComponent } from "../../../components/WatchbuttonComponent/WatchbuttonComponent"
import { NavbarComponent } from "../../../components/CommonComponents/NavbarComponent/NavbarComponent"


// const {like} = useContext(LikeContext)
export const TitleComponent:React.FC = () => {

    return (

        <div className="flex flex-col text-white items-start px-6 justify-between h-[400px]" >
            <NavbarComponent/>

            <div className="flex flex-col items-start gap-2 mb-2 ">
                <h1 className="text-[48px] font-[550] m-0">Insider</h1>
                <p> 2022 | Comedy horror | Season</p>
                <div className="flex gap-4">
                    <WatchbuttonComponent/>
                    <FavouritesComponent size="medium" like={false}/>
                </div>
            </div>
        </div>
    )
}