import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';

const headers = {
    'X-RapidAPI-Host': 'online-movie-database.p.rapidapi.com',
	'X-RapidAPI-Key': '4ed93a4b95msh7d29be24e6213c6p163dc2jsn904345c342e3'
}

export const moviesApi = createApi({
    reducerPath: 'moviesApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://online-movie-database.p.rapidapi.com'}),
    endpoints: (builder) => ({
        fetchMovies: builder.query({
            query: (title) => ({
                url: `/title/find?q=${title}`,
                method: 'GET',
                headers
            })
        })
    })
}); 

export const {useFetchMoviesQuery} = moviesApi; 
