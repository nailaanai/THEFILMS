import { Card, Image } from "react-bootstrap";
import { Link } from "react-router-dom";

const MovieCard = ({ image, title, genre, views, rating, year }) => {
  return (
    <Card className="movieIMG">
      <Image src={image} alt="POSTER" className="images"/>
      <div className="bg-dark">
        <div className="p-2 m-1 text-white">
        <Link to="/detail" className="card-link">
            <Card.Title className="text-left text-warning">{title}</Card.Title>
        </Link>

          <Card.Text className="text-left">{genre}</Card.Text>
          <Card.Text className="text-right">⭐ {rating} | {views} views | {year}</Card.Text>
        </div>
      </div>
    </Card>
  );
};

export default MovieCard;
