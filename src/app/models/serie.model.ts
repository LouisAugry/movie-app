export interface Serie {
  id: number;
  name: string;
  episode_run_time: Array<number>;
  first_air_date: string;
  genres: SerieGenre[];
  in_production: boolean;
  last_episode_to_air: SerieLastEpisode;
  number_of_episodes: number;
  number_of_seasons: number;
  poster_path: string;
  seasons: SerieSeasons[];
  vote_average: number;
  vote_count: number;
  credits: SerieCredits;
}

export interface SerieGenre {
  id: number;
  name: string;
}

export interface SerieLastEpisode {
  id: number;
  name: string;
  overview: string;
  season_number: number;
}

export interface SerieSeasons {
  id: number;
  air_date: string;
  episode_count: number;
  name: string;
  overview: string;
  poster_path?: string;
  season_number: number;
}

export interface SerieCredits {
  cast: SerieCreditsCast[];
}

export interface SerieCreditsCast {
  id: number;
  character: string;
  name: string;
  profile_path: string;
}
