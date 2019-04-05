import { TrendingMovie, TrendingSerie } from './trending.model';

export interface DiscoverMovie extends TrendingMovie {

}

export interface DiscoverSerie extends TrendingSerie{
  name: string;
  first_air_date: string;
}
