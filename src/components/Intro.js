import { Card, Col, Container, Row, Dropdown, Button, Image } from "react-bootstrap";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import trailer from "../assets/bgcnth.jpeg";
import { FaPlay, FaInfo } from "react-icons/fa";
import MovieCard from "./MovieCard";
import IMG1 from "../assets/dune.jpg";
import IMG2 from "../assets/everything.jpg";
import IMG3 from "../assets/infinite.jpg";
import IMG4 from "../assets/joker.jpg";
import IMG5 from "../assets/lightyear.jpg";
import IMG6 from "../assets/morbius.jpg";
import IMG7 from "../assets/img-1.png";
import Slider from "react-slick";

const Intro = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 5,  
    slidesToScroll: 2,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
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

  const movies = [
    { image: IMG1, title: "My Hero Academia", genre: "Drama, Thriller, Sci-fi", views: 19, rating: 8.5, year: 2024 },
    { image: IMG2, title: "Everything Everywhere All at Once", genre: "Sci-fi, Adventure", views: 23, rating: 9.0, year: 2022 },
    { image: IMG3, title: "Infinite", genre: "Action, Sci-fi", views: 15, rating: 7.2, year: 2021 },
    { image: IMG4, title: "Joker", genre: "Drama, Thriller", views: 42, rating: 8.9, year: 2019 },
    { image: IMG5, title: "Lightyear", genre: "Animation, Adventure", views: 32, rating: 7.8, year: 2022 },
    { image: IMG6, title: "Morbius", genre: "Horror, Thriller", views: 28, rating: 5.4, year: 2022 },
  ];

  return (
    <div className="intro">
      <Container className="text-white">
        <Row>
          <Col className="banner p-4">
            <div className="container-fluid">
              <div className="row">
                <div className="col-xxl-9 mb-xxl-0">
                  <div className="anime-card">
                    <div className="content m-2">
                      <h2 className="h-40 bold color-white mb-3" style={{paddingTop: '180px'}}>
                        Demon Slayer:<br />
                        Kimetsu no Yaiba
                      </h2>
                      <ul className="tag unstyled mb-2 d-flex">
                        <li className="me-2">18+</li>
                        <li className="me-2">HD</li>
                        <li className="me-2">2029</li>
                        <li className="me-2">Anime</li>
                        <li>1hr 45m</li>
                      </ul>
                      <p className="color-white mb-2">
                        <b className="color-medium-gray">Starting:</b> Natsuki Hanae, Akari Kito, Hiro Shimono
                      </p>
                      <div className="btn-block">
                        <Button href="#" variant="success" className="me-2">
                          <FaPlay id="play-icon"/> Play
                        </Button>
                        <Button href="#" variant="secondary">
                          <FaInfo id="info-icon"/> More Info
                        </Button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Col>
        </Row>
        <div class="row">
          <div className="col-xxl-12 col-xl-6 col-12">
            <div className="movieCard mb-30">
              <img 
                src={IMG7}
                alt="My Hero Academia" 
                className="br-12"
              />
              <div className="content ">
                <h4 className="h-30 color-white mb-8 hero">My Hero Academia</h4>
                <ul className="tag-unstyled mb-16">
                  <li>2019</li>
                  <li 
                    className="sec" 
                    style={{ 
                      display: 'inline-block', 
                      padding: '2px 6px', 
                      border: '1px solid #b0b0b0', 
                      borderRadius: '5px', 
                      fontSize: '0.9rem', 
                      color: '#b0b0b0', 
                      backgroundColor: 'transparent', 
                      lineHeight: '1.2' 
                    }}
                  >
                    18+
                  </li>
                  <li>4 Seasons</li>
                  <li>Anime</li>
                </ul>
                <p></p>
                <p className="sm color-medium-gray">
                  Sentenced to death, ninja Gabimaru the Hollow finds himself apathetic.
                </p>
                <a 
                  href="#" 
                  data-bs-toggle="modal" 
                  data-bs-target="#videoModal" 
                  className="cus-btn primary"
                >
                <FaPlay id="play-icon"/> Play
                </a>
              </div>
            </div>
          </div>
          <div className="col-xxl-12 col-xl-6 col-12">
            <div className="movieCard mb-30">
              <img 
                src={IMG7}
                alt="My Hero Academia" 
                className="br-12"
              />
              <div className="content ">
                <h4 className="h-30 color-white mb-8 hero">My Hero Academia</h4>
                <ul className="tag-unstyled mb-16">
                  <li>2019</li>
                  <li 
                    className="sec" 
                    style={{ 
                      display: 'inline-block', 
                      padding: '2px 6px', 
                      border: '1px solid #b0b0b0', 
                      borderRadius: '5px', 
                      fontSize: '0.9rem', 
                      color: '#b0b0b0', 
                      backgroundColor: 'transparent', 
                      lineHeight: '1.2' 
                    }}
                  >
                    18+
                  </li>
                  <li>4 Seasons</li>
                  <li>Anime</li>
                </ul>
                <p></p>
                <p className="sm color-medium-gray">
                  Sentenced to death, ninja Gabimaru the Hollow finds himself apathetic.
                </p>
                <a 
                  href="#" 
                  data-bs-toggle="modal" 
                  data-bs-target="#videoModal" 
                  className="cus-btn primary"
                >
                <FaPlay id="play-icon"/> Play
                </a>
              </div>
            </div>
          </div>
        </div>
        <Row className="justify-content-center g-4 m-2">
          <h2>Recently Views</h2>
          <Col md={15} className="slide-container">
            <Slider {...settings}>
              {movies.map((movie, index) => (
                <div key={index}>
                  <MovieCard
                    image={movie.image}
                    title={movie.title}
                    genre={movie.genre}
                    views={movie.views}
                    rating={movie.rating}
                    year={movie.year}
                  />
                </div>
              ))}
            </Slider>
          </Col>
        </Row>       
      </Container>
    </div>
  );
};

export default Intro;
