import React, { useState, useEffect, ChangeEvent } from "react";
import MovieDataService from "../services/MovieService";
import IMovie from "../interface/Movie.interface";
import { Link } from "react-router-dom";
import {MovieCard} from "./MovieCard";

interface Props {
  movies: IMovie[];
  voteMovie: (id: number) => any;
}
//id,title,photoUrL,category
export const MoviesList: React.FC = () => {
//export const MoviesList = ({ movies, voteMovie }: Props): JSX.Element => {
  const [movies, setMovies] = useState<Array<IMovie>>([]);
  const [votemovies, voteMovie] = useState<number>(-1);
  const [currentMovie, setCurrentMovie] = useState<IMovie  | null>(null);
  const [currentIndex, setCurrentIndex] = useState<number>(-1);
  const [searchTitle, setSearchTitle] = useState<string>("");
  useEffect(() => {
    retrieveMovies();
  }, []);
  const onChangeSearchTitle = (e: ChangeEvent<HTMLInputElement>) => {
    const searchTitle = e.target.value;
    setSearchTitle(searchTitle);
  };
  const retrieveMovies = () => {
    MovieDataService.getAll()
      .then((response: any) => {
        console.log('Movies info RJGB: ',response.data);
        setMovies(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };
  const refreshList = () => {
    retrieveMovies();
    setCurrentMovie(null);
    setCurrentIndex(-1);
  };
  const setActiveMovie = (movie: IMovie, index: number) => {
    setCurrentMovie(movie);
    setCurrentIndex(index);
  };

  const findByTitle = () => {
    MovieDataService.findByTitle(searchTitle)
      .then((response: any) => {
        setMovies(response.data);
        setCurrentMovie(null);
        setCurrentIndex(-1);
        console.log(response.data);
      })
      .catch((e: Error) => {
        console.log(e);
      });
  };
  return (
        <>
          {movies &&
             movies.map((movie) => (
              <div className="col-md-4 mt-2">
              <MovieCard key={movie.id} movie={movie} voteMovie={voteMovie} />
                key={movie.id}
                {movie.title}
                {movie.photoUrL}
                {movie.category}
              </div>
            ))}
        </>
  );
};
export default MoviesList;
