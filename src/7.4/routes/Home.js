import { useEffect, useState } from "react/cjs/react.development";
import Movie from "../components/Movie";

function Home() {
    const [loading, setLoading] = useState(true);
    const [movies, setmovies] = useState([]);
    const getMovies = async () => {
        const json = await (
            await fetch(
                `https://yts.mx/api/v2/list_movies.json?minimum_rating=9&sort_by=year`
            )
        ).json();
        setmovies(json.data.movies);
        setLoading(false);
    };
    useEffect(() => { getMovies() }, []);

    return <div>
        {loading ? <h1>Loding...</h1> :
            <div>
                {movies.map(movie => (
                    <Movie
                        key={movie.id}
                        medium_cover_image={movie.medium_cover_image}
                        title={movie.title}
                        year={movie.year}
                        summary={movie.summary}
                        genres={movie.genres}
                    />
                ))}
            </div>
        }
    </div>;
}

export default Home;
