
export default function MovieList({movies, sort}){
    let sortedMovies = [...movies]; 

    if (sort === "Release Date (Asc)"){
        sortedMovies.sort((a, b) => a.release_date.localeCompare(b.release_date));
    }
    
    if (sort === "Release Date (Desc)"){
        sortedMovies.sort((a, b) => b.release_date.localeCompare(a.release_date));
    }

    if (sort === "Rating (Asc)"){
        sortedMovies.sort((a, b) => a.vote_average - b.vote_average);
    } 

    if (sort === "Rating (Desc)"){
        sortedMovies.sort((a, b) => b.vote_average - a.vote_average);
    }

    return (

        <div className = "movieContainer">
           {sortedMovies.map((movie, index) => (
            <div key = {movie.id || index} className = "movieItems">
                <img src= {`https://image.tmdb.org/t/p/w200${movie.poster_path}`} alt={movie.title}/>
                <h3> {movie.title} </h3>
                <p> Release Date: {movie.release_date} </p>
                <p> Rating: {movie.vote_average} </p>

                {index === 19 && (
                    <div style={{ marginBottom: "200px" }}></div>
                )}

            </div>
           ))}

      
            <div style={{ marginBottom: "20px" }}></div>
        </div>
    );
}