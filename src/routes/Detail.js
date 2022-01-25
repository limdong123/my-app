//영화 디테일 넣어보기

import { useParams } from "react-router-dom";     //useparams 가지고 오기
import { useEffect, useState } from "react/cjs/react.development";
import M_detail from "../components/M_detail";

function Detail() {
    const { id } = useParams(); //URL의 변경된 파라미터 값을 불러오는 함수
    const [loading, setLoading] = useState(true);
    const [detail, setDetail] = useState([]);

    const getMovie = async () => {
        const json = await (
            await fetch(`https://yts.mx/api/v2/movie_details.json?movie_id=${id}`)
        ).json();
        setDetail(json.data.movie);
        setLoading(false);
    };
    useEffect(() => {
        getMovie()
    }, []);

    return ( <div>
        {loading ? <h1>Loading...</h1> :
            <div>
            <img src={detail.medium_cover_image} alt={detail.title} />
            <h2>{detail.title} ({detail.year}) </h2>
            <p>{detail.rating}</p>
            <h1>{detail.runtime}</h1>
            <ul>
                {detail.genres.map((g) => (
                    <li key={g}>{g}</li>
                ))}
            </ul>
            <h3>{detail.description_full}</h3>
        </div>
}</div>)
}
export default Detail;