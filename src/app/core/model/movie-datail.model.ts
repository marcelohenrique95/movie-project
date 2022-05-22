import { Company } from "./company.model";
import { Country } from "./country.model";

export interface MovieDetail {
    id: number;
    adult: boolean;
    backdrop_path: string;
    belongs_to_collection: any;
    budget: number;
    genres: Genre[];
    homepage: string;
    imdb_id: number;
    original_language: string;
    original_title: string;
    overview: string;
    popularity: number;
    poster_path: string;
    production_companies: Company[];
    production_countries: Country[];
    release_date: string;
    revenue: number;
    runtime: number;
    spoken_languages: SpokeLanguage[];
    status: string;
    tagline: string;
    title: string;
    video: boolean;
    vote_average: number;
    vote_count: number;
    profit?: number;
}

export interface Genre {
    id: number;
    name: string;
}

export interface SpokeLanguage {
    english_name: string;
    iso_639_1: string;
    name: string;
}