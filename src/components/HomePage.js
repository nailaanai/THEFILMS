import React from "react";
import "../style/Home.css";
import { Container, Button } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaPlay, FaInfo } from "react-icons/fa";
import MovieCard from "./MovieCard";
// import Navbar from "../components/Navbar/NavigationBar";
import Footer from "./Footer/Footer";
import IMG1 from "../assets/gede2.jpeg";
import IMG2 from "../assets/gede1.jpeg";

const HomePage = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 700,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: true,
    prevArrow: <FaArrowLeft className="slick-prev" />, 
    nextArrow: <FaArrowRight className="slick-next" />,
  };

  const movieSettings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4, // Menampilkan 4 film dalam satu baris
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
    ],
    nextArrow: <FaArrowRight className="slick-next" />,
    prevArrow: <FaArrowLeft className="slick-prev" />,
  };
  

  return (
    <div className="slider-area bg-black">
      <Container fluid className="p-0">
        <Slider {...settings}>
          <div className="single-slider">
            <div
              className="hero-slider"
              style={{
                backgroundImage: `url(${IMG1})`,
              }}
            >
              <div className="slider-overlay"></div> {/* Overlay untuk visibilitas teks */}
              <div className="slider-content">
                <h1 className="title">Queen Of Tears</h1>
                <div className="sub-title">
                    <span>18+ | 45 Mins | HD | 2029 | Drama</span>
                    <br></br>
                    <b className="color-medium-gray">Starting:</b> Kim Ji-Won, Kim Soo-Hyun, Park Sung-hoon
                </div>
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

          {/* Slider 2 */}
          <div className="single-slider">
            <div
              className="hero-slider"
              style={{
                backgroundImage: `url(${IMG2})`,
              }}
            >
              <div className="slider-overlay"></div> {/* Overlay untuk visibilitas teks */}
              <div className="slider-content">
                <h1 className="title">Weighlifting Fairy Kim Bok Joo</h1>
                <div className="sub-title">
                    <span>18+ | 45Mins | HD | 2029 | Drama</span>
                    <br></br>
                    <b className="color-medium-gray">Starting:</b> Nam Joo-Hyuk, Lee Sung-Kyung, Lee Jae-Yoon
                </div>
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
        </Slider>
        {/* list 1 */}
        <MovieCard/>
        <div id="trending" className="more-cards">
          <MovieCard title={"Trending"} />
        </div>
        <div id="upcoming" className="more-cards">
          <MovieCard title={"Upcoming Movies"} />
        </div>
        {/* <div className="more-cards">
          <MovieCard title={"Trending"}/>
          <MovieCard title={"Upcoming Movies"}/>
        </div> */}
        <Footer/>
      </Container>
    </div>
  );
};

export default HomePage;
