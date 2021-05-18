import {useState, useEffect} from 'react'
import {Button} from './Button'
import { api } from '../services/api';


interface SideBarProps {
  genres: GenreResponseProps[];
  setSelectedGenreId: any;
  selectedGenreId: number;
}
interface GenreResponseProps {
  id: number;
  name: 'action' | 'comedy' | 'documentary' | 'drama' | 'horror' | 'family';
  title: string;
}

export function SideBar({genres, setSelectedGenreId, selectedGenreId}: SideBarProps) {
  // Complete aqui


  
  function handleClickButton(id: number) {
    setSelectedGenreId(id);
  }

  
  return(
    <nav className="sidebar">
    <span>Watch<p>Me</p></span>

    <div className="buttons-container">
      {genres.map(genre => (
        <Button
          key={String(genre.id)}
          title={genre.title}
          iconName={genre.name}
          onClick={() => handleClickButton(genre.id)}
          selected={selectedGenreId === genre.id}
        />
      ))}
    </div>

  </nav>
    
  )
}