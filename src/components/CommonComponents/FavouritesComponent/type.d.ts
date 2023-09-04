import { MovieType } from "../../../type"

export type FavouriteType={
    like: boolean
    size: 'medium'|'small'
    id: string
}
export type favouriteType={
    like: boolean
    size: 'medium'|'small'
   
}


export type FavouriteContext={
    favArray: MovieType[]
}