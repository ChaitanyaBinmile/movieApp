import { TrendingcardComponent } from "../../components/CommonComponents/TrendingardComponent/TrendingcardComponent";
import { TitleComponent } from "./TitleComponent/TitleComponent";
import { WatchingcardComponent } from "../../components/WatchingcardComponent/Watchingcardcomponent";

export const HomepageComponent:React.FC=()=>{
    return (
        <div className=" overflow-x-hidden  w-[100%] ">
            <div className="flex bg-home bg-no-repeat bg-cover pt-8 ">
                <TitleComponent/>
            </div>
            <div className="flex flex-col">
                <TrendingcardComponent/>
                <WatchingcardComponent/>
            </div>
        </div>
    )
}
