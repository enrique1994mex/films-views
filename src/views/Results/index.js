import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom"; 

import movieImage from "../../assets/movie-theater.png"; 
import { useFetchMoviesQuery } from "../../redux/api/movies";
import Loading from "../../components/Loading";
import List from "./components/List";

const Results = () => {

    const {title} = useParams(); 
    const navigate = useNavigate(); 
    const {data: movies, isLoading, isSuccess, isFetching, error} = useFetchMoviesQuery(title); 

    const handleListItemClick = (movieId) => {
        navigate(`/detail/${movieId}`);  
    };

    const renderContent = () => {
        if (error) {
            return (
                <div className="flex items-center justify-center h-full">
                    <p className="text-xl">{error.error}</p>;
                </div>
            )
        } else if (isLoading || isFetching) {
            return  <Loading message={"Buscando peliculas..."}/>;
        } else if (isSuccess && movies?.results) {
            return <List data={movies?.results} onListItemClick={handleListItemClick}/>;  
        } 
    }; 

    return(
        <div className="flex flex-col-reverse sm:flex-row h-screen"> 
            <div className="sm:w-3/5 sm:h-full h-2/3 overflow-y-auto px-10">
                {renderContent()}
            </div>
            <div className="sm:w-2/5 w-full h-1/3">
                <img src={movieImage}  alt="Movies" className="w-full h-full sm:h-screen object-cover"/>
            </div>
        </div>
    )
};

export default Results; 