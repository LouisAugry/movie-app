export interface Movie {
  id: number;
  title: string;
  status: string;
  tagline: string;
  vote_average: number;
  vote_count: number;
  runtime: number;
  release_date: string;
  poster_path: string;
  overview: string;
  genre: MovieGenre[];
  videos: MovieVideos;
  credits: MovieCredits;
}

export interface MovieGenre {
  id: number;
  name: string;
}

export interface MovieVideos {
  results: MovieVideoDetail[];
}

export interface MovieVideoDetail {
  key: string;
}

export interface MovieCredits {
  cast: MovieCreditsCast[];
}

export interface MovieCreditsCast {
  character: string;
  id: number;
  name: string;
  profile_path: string;
}
