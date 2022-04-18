const MovieImage = ({url}) => (
    <div className="sm:w-1/3 sm:h-full w-full h-1/3 flex items-center">
        <img src={url} className="h-full w-full object-cover" alt="movie-detail" />
    </div>
);

export default MovieImage;