import { useEffect, useState } from 'react';
import { GenreResponseProps } from '../App';
import { api } from '../services/api';
import { Button } from './Button';


type SideBarProps = {
  genres: GenreResponseProps[],
  selectedGenreId: number,
  onClickButton: (id: number)=> any, 
};



export function SideBar({genres, selectedGenreId, onClickButton }: SideBarProps) {
  // const [selectedGenreId, setSelectedGenreId] = useState(1);
  const [selectedGenre, setSelectedGenre] = useState<GenreResponseProps>({} as GenreResponseProps);






  return (
    <nav className="sidebar">
      <span>Watch<p>Me</p></span>
      <div className="buttons-container">
        {genres.map(genre => (
            <Button
              key={String(genre.id)}
              title={genre.title}
              iconName={genre.name}
              onClick={() => onClickButton(genre.id)}
              selected={selectedGenreId === genre.id}
            />
          ))}
      </div>

    </nav>
  )
}