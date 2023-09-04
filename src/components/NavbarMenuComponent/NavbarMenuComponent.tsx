import { NavLink } from "react-router-dom"


export const NavbarMenuComponent:React.FC=()=>{
    return (
        <div>
            <ul className="flex text-white gap-6 ">
                <div className="flex gap-6 md:hidden">
                    <NavLink to='/Home'>
                        Home
                    </NavLink>
                    <NavLink to='/Favourite'>
                        Favourites
                    </NavLink>
                </div>
                
                <li>Movies</li>
                <li>Series</li>
                <li className="hidden md:inline">Documentaries</li>
            </ul>
        </div>
    )
}