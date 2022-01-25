import propTypes from "prop-types";
import { Link } from "react-router-dom";

function Movie({ id, medium_cover_image, title, year, summary, genres }) {  //id 추가
    return <div>
        <img src={medium_cover_image} alt={title} />
        <h2>
            <Link to={`/movie/${id}`}>{title} ({year})</Link>   {/* 코드 변경 */}
        </h2>
        <p>{summary}</p>
        <ul>
            {genres.map((g) => (
                <li key={g}>{g}</li>
            ))}
        </ul>
    </div>;
}

Movie.propTypes = {
    id: propTypes.number.isRequired,        //추가
    medium_cover_image: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    year: propTypes.number.isRequired,
    summary: propTypes.string.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired,
}
export default Movie;