// src/utils/types.ts

export interface Movie {
  id: number;
  original_title: string;
  overview: string;
  poster_path: string | null;
  backdrop_path: string | null;
  release_date?: string;
}

export interface VideoBackgroundProps {
  movieId: number;
}

export interface MovieListProps {
  title: string;
  movies: Movie[] | null;
}

export interface MovieCardProps {
  posterPath: string | null;
}