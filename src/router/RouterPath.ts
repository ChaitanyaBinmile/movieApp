
import { HomepageComponent } from "../pages/HomepageComponent/HomepageComponent";
import { DetailPageComponent } from "../pages/DetailPageComponent/DetailPageComponent";
import { RouteType } from "../type";
import LoginPageComponent from "../pages/LoginPageComponent/LoginPageComponent";

export const RouterPath:RouteType={
    Home:{
        path: "/",
        Component: HomepageComponent
    },
    Favourites:{
        path: "/Favourite",
        Component: DetailPageComponent
    },
    Trending:{
        path: "/Trending",
        Component: DetailPageComponent
    },
    Calender:{
        path: "/Calender",
        Component: DetailPageComponent
    },
    Login:{
        path: "/Login",
        Component: LoginPageComponent
    }

}