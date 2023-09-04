type RoutePath = {
	path: string;
	Component: React.JSX;
};

export interface DashboardType{
    logo: ReactPropTypes.FC
    text: string
}

export type MovieType={
    id: string,
    name: string,
    image: string,
    year: string,
    genre: string,
    like: boolean
}

export type RouteType = Record<string, RoutePath>;