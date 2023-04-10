import  React from 'react';
import { useQuery } from '@apollo/client';
import { GET_ANIME } from './queries';

export const AnimeDetails = ({animeID}) => {
    const {loading, error, data} = useQuery(GET_ANIME, {
        variables: {id: animeID}
    });

    if (loading) return <p>Loading....</p>
    if (error) return <p>Something went wrong {error.message}</p>
    
    const {anime} = data;

    return (
        <div className="anime-details">
        <h1 className="anime-title">{anime.title}</h1>
        <img src={anime.images.jpg.large_image_url} alt={anime.title} />
        <div className="anime-info">
          <p className="anime-episodes">Episodes: {anime.episodes}</p>
          <p className="anime-synopsis">{anime.synopsis}</p>
          <ul className="anime-genres">
            {anime.genres && anime.genres.map((genre) => (
              <li key={genre.name} className="anime-genre">{genre.name}</li>
            ))}
          </ul>
        </div>
      </div>
    )
}