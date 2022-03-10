import IMovie  from "../interface/Movie.interface";

interface Props{
  movie: IMovie;
  voteMovie: (id: number) => void;
}

export const MovieCard = ({ movie, voteMovie }: Props) => (
    <div className="card card-body bg-secundary rounded-0 text-dark">
    <h2>{movie.title}</h2>
    <h2>{movie.photoUrL}</h2>
    <button className="btn btn-outline-info" onClick={() => movie.id && voteMovie(movie.id)}>
      Votar                                                             
    </button>
    </div>
);

