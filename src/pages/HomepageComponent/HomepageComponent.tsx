import { TrendingcardComponent } from "../../components/CommonComponents/TrendingardComponent/TrendingcardComponent";
import { TitleComponent } from "./TitleComponent/TitleComponent";
import { WatchingcardComponent } from "../../components/WatchingcardComponent/Watchingcardcomponent";
import { Player } from "video-react";

export const HomepageComponent: React.FC = () => {

  return (
    <div className=" overflow-x-hidden  w-[100%] ">
      <div className="relative flex pt-8">
        <div className="absolute top-0  ">
          <Player className="!pt-0 z-10 bg-opacity-20" width={20} muted={true} autoPlay={true}>
            <source src="https://media.w3.org/2010/05/sintel/trailer_hd.mp4" />
          </Player>
        </div>
        <TitleComponent />
      </div>
      <div className="flex flex-col">
        <TrendingcardComponent />
        <WatchingcardComponent />
      </div>
    </div>
  );
};
