import React, { useState, useEffect} from 'react';

import logo from './logo.svg';
import './App.css';
import IMovie from './interface/Movie.interface';
import MoviesList from './components/MovieList';

interface Props{
  title: string;
}

export function App({title}:Props) {

  const [movies, setMovies] = useState<IMovie[]>([]);

  const VoteMovie = (id: number): void =>
  setMovies(movies.filter((movie) => movie.id !== id));

  return (
    <div className="bg-dark text-white" style={{height:'100vh'}}>

      <nav className='navbar navbar-dark bg-primary'>
        <div className='container'>
          <a href='/' className='navbar-brand'>  
            <img src={logo} alt='logo App' style={{width:'4rem'}}></img>
            {title}
          </a>
        </div>
      </nav>

      <div className="container p-4 text-center"><h1>Movie Awards</h1></div>

      <form className="d-flex container p-4">
        <input className="form-control me-sm-2" type="text" placeholder="Search a movie title..."/>
        <button className="btn btn-secondary my-2 my-sm-0" type="submit">Search </button>
      </form>
      
      <div className="container p-4"><h2>Categoria Accion</h2></div>

    <main className='container p-4'>
      <div className='col-md-8'>
          <div className='row'> 
            <MoviesList/> 
          </div>
      </div>        
      </main>   
    </div>
  );
}

export default App;
