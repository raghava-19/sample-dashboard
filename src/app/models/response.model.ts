export interface GameDetails{
    developer: string;
    freetogame_profile_url: string
    game_url: string
    genre:string
    id: 1
    platform: string
    publisher: string
    release_date:string
    short_description: string
    thumbnail: string
    title: string
}

export interface APIresponse<T> {
    results: Array<T>
}