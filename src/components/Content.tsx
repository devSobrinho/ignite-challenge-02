import { useEffect, useState } from 'react';
import { GenreResponseProps, MovieProps } from '../App';
import { api } from '../services/api';
import { MovieCard } from './MovieCard'

type ContentProps = {
  movies: MovieProps[],
  selectedGenreId: number,
}

export function Content({movies, selectedGenreId}: ContentProps) {
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);

  useEffect(() => {
    api.get<GenreResponseProps>(`genres/${selectedGenreId}`).then(response => {
      setSelectedGenre(response.data);
    })
  }, []);

  return (
    <div className="container">
        <header>
          <span className="category">Categoria:<span> {selectedGenre.title}</span></span>
        </header>

        <main>
          <div className="movies-list">
            {movies.map(movie => (
              <MovieCard key ={movie.imdbID} title={movie.Title} poster={movie.Poster} runtime={movie.Runtime} rating={movie.Ratings[0].Value} />
            ))}
          </div>
        </main>
    </div>

  )
}