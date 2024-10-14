import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const BreakingNews = () => {
  return (
    <div className="bg-gray-100 flex items-center justify-center my-4">
      <button className="btn btn-info">Breking News</button>
      <Marquee pauseOnHover={true} speed={200}>
        <Link className="mr-10" to='/'> Match Highlights: Germany vs Spain — as it happened</Link>
        <Link to='/'> Match Highlights: Germany vs Spain — as it happened</Link>
        <Link className="mr-10" to='/'> Match Highlights: Germany vs Spain — as it happened</Link>
      </Marquee>
    </div>
  )
}

export default BreakingNews