interface IMovie {
    id: number;
    name: string;
    category: string;
    duration: number;
    price: number
}

type IMovieRequest = Omit<IMovie, 'id'>

export {IMovie, IMovieRequest}