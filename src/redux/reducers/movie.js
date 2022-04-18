import {startFetchMovieRatings, 
    successFetchMovieRatings, 
    errorFetchMovieRatings,
    startFetchMovieDetail,
    successFetchMovieDetail,
    errorFetchMovieDetail} from "../actions/movies";

const initialState = {
    isFetchingMovieRatings: false,
    isFetchingMovieDetails: false, 
    isLoading: true,
    errorFetchingMovieDetail: null,
    errorFetchingMovieRatings: null,
    successFetchingMovieDetail: null,
    successFetchingMovieRatings: null,
    success: null,
    ratings: {}, 
    movieDetail: {}
};

const moviesReducer = (state = initialState, action) => {
    switch (action.type) {
        case startFetchMovieRatings.toString(): 
            return {
                ...state,
                isLoading: false,
                isFetchingMovieRatings: true
            };
        case successFetchMovieRatings.toString():
            return {
                ...state,
                isLoading: false,
                isFetchingMovieRatings: false,
                ratings: action.payload.data, 
                successFetchingMovieRatings: true,
                errorFetchingMovieRatings: null 
            };
        case errorFetchMovieRatings.toString():
            return {
                ...state,
                isLoading: false,
                isFetchingMovieRatings: false,
                ratings: {}, 
                successFetchingMovieRatings: false,
                errorFetchingMovieRatings: action.payload.error
            };
        case startFetchMovieDetail.toString():
            return {
                ...state,
                isFetchingMovieDetails: true, 
            };
        case successFetchMovieDetail.toString():
            return {
                ...state,
                successFetchingMovieDetail: true, 
                errorFetchingMovieDetail: null, 
                movieDetail: action.payload,
                isFetchingMovieDetails: false,  
            };
        case errorFetchMovieDetail.toString():
            return {
                ...state,
                isFetchingMovieDetails: false,  
                successFetchingMovieDetail: false, 
                errorFetchingMovieDetail: action.payload.error,
                movieDetail: {}
            }; 
        default:
            return state;
    }
};

export default moviesReducer;