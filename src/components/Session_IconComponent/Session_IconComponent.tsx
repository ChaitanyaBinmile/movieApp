import { signOut } from "firebase/auth";
import { useAppSelector } from "../../app/hooks";
import { log_out, sliders } from "../../assets"
import lang from "../../assets/lang/lang";
import { auth } from "../../utilities/firebase";
import { DashBoardItem } from "../CommonComponents/DashboardItem/DashBoardItem"

export function Session_IconComponent(){
    const langKey = useAppSelector(store=> store.Lang.lang);

    const handleLogout=()=>{
        signOut(auth).then(() => {
            // Sign-out successful.
          })
    }

    return (
        <div>
            <ul className="flex flex-col gap-[20px]">
                <DashBoardItem logo={sliders} text={lang[langKey].SETTINGS}></DashBoardItem>
                <div onClick={()=>handleLogout()} className="cursor-pointer">

                <DashBoardItem  logo={log_out} text={lang[langKey].LOG_OUT}></DashBoardItem>
                </div>
            </ul>
        </div>
    )
}