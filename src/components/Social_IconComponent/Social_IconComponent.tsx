import { message_circle, users } from "../../assets"
import { DashBoardItem } from "../CommonComponents/DashboardItem/DashBoardItem"

export function Social_IconComponent(){
    return (
        <div>
            <ul className="flex flex-col gap-[20px]">
                <DashBoardItem logo={users} text='Community'></DashBoardItem>
                <DashBoardItem logo={message_circle} text='Social'></DashBoardItem>
            </ul>
            

        </div>
    )
}