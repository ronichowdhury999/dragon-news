import { Link } from "react-router-dom"
import PropTypes from 'prop-types';

const NewsCard = ({ aNews }) => {
    const { title, image_url, details, _id } = aNews
    return (
        <div>
            <div className="card bg-base-100 w-full shadow-xl">
                <figure>
                    <img
                        src={image_url}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{title}</h2>

                    {
                        details.length > 200 ? <p>{details.slice(0, 200)}<br />
                            <Link to={`/newsDetails/${_id}`}
                                className="text-sky-400 font-bold">Read more ...</Link></p>
                            : <p>{details}</p>

                    }

                </div>
            </div>
        </div>
    )
}

export default NewsCard

NewsCard.propTypes = {
    aNews: PropTypes.object.isRequired
}

