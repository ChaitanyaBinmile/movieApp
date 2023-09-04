import { log_out, sliders } from "../../assets"
import { DashBoardItem } from "../CommonComponents/DashboardItem/DashBoardItem"

export function Session_IconComponent(){
    return (
        <div>
            <ul className="flex flex-col gap-[20px]">
                <DashBoardItem logo={sliders} text='Settings'></DashBoardItem>
                <DashBoardItem logo={log_out} text='Logout'></DashBoardItem>
            </ul>
            

        </div>
    )
}