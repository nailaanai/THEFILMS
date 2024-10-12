import Slider from "react-slick";
import ActorCard from './ActorCard';
import { Container } from 'react-bootstrap';
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { NextArrow, PrevArrow } from './CustomArrows';

const AllActor = ({ actors = [] }) => { // Default value untuk actors adalah array kosong
  if (!actors.length) {
    return <p>No actors available.</p>;  // Jika tidak ada aktor
  }

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        }
      }
    ]
  };

  return (
    <Container className="mt-5">
      <Slider {...settings}>
        {actors.map((actor, index) => (
          <div key={index}>
            <ActorCard image={actor.image} name={actor.name} />
          </div>
        ))}
      </Slider>
    </Container>
  );
};

export default AllActor;
