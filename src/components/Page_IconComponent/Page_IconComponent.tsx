import { calender, film, heart, trending_up } from "../../assets"
import lang from "../../assets/lang/lang"
import { NavLink } from "react-router-dom"
import { DashBoardItem } from "../CommonComponents/DashboardItem/DashBoardItem"
import { useAppSelector } from "../../app/hooks";



export function Page_IconComponent(){
    const langKey = useAppSelector(store=> store.Lang.lang);
    return (
        <div>
            <ul className="flex flex-col gap-[20px]">
                <NavLink to='/Home' >
                    <DashBoardItem logo={film} text={lang[langKey].HOME}></DashBoardItem>
                </NavLink>
                <NavLink to='/Favourite'>
                    <DashBoardItem logo={heart} text={lang[langKey].FAVOURITES}></DashBoardItem>
                </NavLink>
                <NavLink to='/Trending'>
                    <DashBoardItem logo={trending_up} text={lang[langKey].TRENDING}></DashBoardItem>
                </NavLink>
                <NavLink to='/Calender'>
                    <DashBoardItem logo={calender} text={lang[langKey].COMING_SOON}></DashBoardItem>
                </NavLink>
            </ul>
            

        </div>
    )
}