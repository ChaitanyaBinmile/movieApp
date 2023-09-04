import { DashboardType } from "../../../type"

export const DashBoardItem: React.FC<DashboardType> = ({logo,text}) => {
    return(
        <div>
            <li className="flex gap-4">
                <img src={logo}/>
                <p className="text-white text-sm">{text}</p>
            </li>
        </div>
    )
}