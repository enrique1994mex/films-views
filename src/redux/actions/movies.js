import { createAction } from "@reduxjs/toolkit";

const BASE_URL = "https://online-movie-database.p.rapidapi.com/title";

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
        'X-RapidAPI-Key': '4ed93a4b95msh7d29be24e6213c6p163dc2jsn904345c342e3'
    }
};

export const startFetchMovieRatings = createAction('START_FETCH_MOVIE_RATINGS');
export const successFetchMovieRatings = createAction('SUCCESS_FETCH_MOVIE_RATINGS');
export const errorFetchMovieRatings = createAction('ERROR_FETCH_MOVIE_RATINGS');

export const fetchMovieRatings = (movieId) => async (dispatch) => {
    try {
        dispatch(startFetchMovieRatings());
        // iniciar la llamada API
        const response = await fetch(`${BASE_URL}/get-ratings?tconst=${movieId}`, options);
        const data = await response.json();

        dispatch(successFetchMovieRatings({ data }));
    } catch (error) {
        dispatch(errorFetchMovieRatings({ error }));
    }
};

export const startFetchMovieDetail = createAction('START_FETCH_MOVIE_DETAIL');
export const successFetchMovieDetail = createAction('SUCCESS_FETCH_MOVIE_DETAIL');
export const errorFetchMovieDetail = createAction('ERROR_FETCH_MOVIE_DETAIL');

export const fetchMovieDetail = (movieId) => async (dispatch) => {
    try {
        dispatch(startFetchMovieDetail());
        // iniciar la llamada a la API
        const overviewDetailsResponse = await fetch(`${BASE_URL}/get-overview-details?tconst=${movieId}`, options);
        const overviewDetailsData = await overviewDetailsResponse.json(); 

        console.log(overviewDetailsData); 

        const topCastResponse = await fetch(`${BASE_URL}/get-top-cast?tconst=${movieId}`, options);
        const topCastData = await topCastResponse.json(); 

        const detailsResponse = await fetch(`${BASE_URL}/get-details?tconst=${movieId}`, options);
        const detailsData = await detailsResponse.json(); 

        const fullCreditsResponse = await fetch(`${BASE_URL}/get-full-credits?tconst=${movieId}`, options);
        const fullCreditsData = await fullCreditsResponse.json(); 

        dispatch(successFetchMovieDetail({
            overview: overviewDetailsData,
            topCast: topCastData,
            details: detailsData,
            fullCredits: fullCreditsData,
        }));
    } catch (error) {
        dispatch(errorFetchMovieDetail({error}));
    }
};