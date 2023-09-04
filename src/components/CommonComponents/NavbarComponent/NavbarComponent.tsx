import { NavbarMenuComponent } from "../../NavbarMenuComponent/NavbarMenuComponent"
import { search,bell,avatar } from "../../../assets"

export const NavbarComponent:React.FC=()=>{
    return (
        <div className="flex flex-row justify-between items-center w-[76vw]">

            <NavbarMenuComponent/>
            <div className="hidden flex-row h-6 items-center gap-5 lg:flex">
                <img src={search}/>
                <img src={bell}/>
                <img src={avatar}/>
            </div>
        </div>
    )
}