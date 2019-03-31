export interface Actor {
  id: number;
  birthday: string;
  deathday?: string | null;
  name: string;
  biography: string;
  place_of_birth: string;
  profile_path: string;
  movie_credits: ActorMovies;
}

export interface ActorMovies {
  cast: ActorMovieCast[];
}

export interface ActorMovieCast {
  id: number;
  poster_path: string;
  title: string;
}
