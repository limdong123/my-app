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

    return (<div>
        {loading ? <h1>Loading...</h1> :
            <div>
                {detail(item => (
                    <M_detail
                        key={item.id}
                        medium_cover_image={item.medium_cover_image}
                        title={item.title}
                        year={item.year}
                        rating={item.rating}
                        runtime={item.runtime}
                        description_full={item.description_full}
                        genres={item.genres} />
                ))}
            </div>}
    </div>)
}
export default Detail;