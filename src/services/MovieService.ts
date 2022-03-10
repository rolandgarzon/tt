import http from "../http-common";
import IMovie from "../interface/Movie.interface";


const getAll = () => {
  return http.get<Array<IMovie>>("/movies");
};
const get = (id: any) => {
  return http.get<IMovie>(`/movies/${id}`);
};
const findByTitle = (title: string) => {
  return http.get<Array<IMovie>>(`/movies?title=${title}`);
};
const MovieService = {
  getAll,
  get,
  findByTitle,
};
export default MovieService;