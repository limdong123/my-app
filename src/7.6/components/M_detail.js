import propTypes from "prop-types";

function M_detail({ rating,medium_cover_image, title, year, genres, runtime, description_full}) {  //id 추가
    return <div>
        <img src={medium_cover_image} alt={title} />
        <h2>{title} ({year}) </h2>
        <p>{rating}</p>
        <h1>{runtime}</h1>
        <ul>
            {genres.map((g) => (
                <li key={g}>{g}</li>
            ))}
        </ul>
        <h3>{description_full}</h3>
    </div>;
}

M_detail.propTypes = {
    rating: propTypes.number.isRequired,
    runtime: propTypes.number.isRequired,
    description_full: propTypes.string.isRequired,
    medium_cover_image: propTypes.string.isRequired,
    title: propTypes.string.isRequired,
    year: propTypes.number.isRequired,
    genres: propTypes.arrayOf(propTypes.string).isRequired,
}
export default M_detail;