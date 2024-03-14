import { useAppSelector } from "../../app/hooks";
import { message_circle, users } from "../../assets"
import lang from "../../assets/lang/lang"
import { DashBoardItem } from "../CommonComponents/DashboardItem/DashBoardItem"

export function Social_IconComponent(){
    const langKey = useAppSelector(store=> store.Lang.lang);

    return (
        <div>
            <ul className="flex flex-col gap-[20px]">
                <DashBoardItem logo={users} text={lang[langKey].COMMUNITY}></DashBoardItem>
                <DashBoardItem logo={message_circle} text={lang[langKey].SOCIAL}></DashBoardItem>
            </ul>
            

        </div>
    )
}