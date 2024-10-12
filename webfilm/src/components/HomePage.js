import React, { useState,useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import "../style/Home.css";
import { Container, Button, Modal } from "react-bootstrap";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import { FaPlay, FaInfo } from "react-icons/fa";
import MovieCard from "./MovieCard";
import Footer from "./Footer/Footer";

const HomePage = () => {
  const [videoUrl, setVideoUrl] = useState("");
  const [show, setShow] = useState(false);
  const [popularMovies, setPopularMovies] = useState([]);
  const [topratedMovies, settopRatedMovies] = useState([]);
  const [upcomingMovies, setUpcomingMovies] = useState([]);
  const [topMovies, setTopMovies] = useState([]); // State untuk menyimpan top movies

  const navigate = useNavigate();

  const handlePlay = (url) => {
    setVideoUrl(url);
    setShow(true);
  };

  const handleClose = () => {
    setShow(false);
    setVideoUrl("");
  };

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

  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/movies/popular');
        const data = await res.json();
        if (data.length) { // Memastikan data ada dan array tidak kosong
          setPopularMovies(data);
        } else {
          console.log("No popular movies found.");
        }
      } catch (err) {
        console.error("Failed to fetch popular movies:", err);
      }
    };

    fetchMovies();
  }, []);

  useEffect(() => {
    const fetchTopMovies = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/movies/top_rated');
        const data = await res.json();
        if (data.length) { // Memastikan data ada dan array tidak kosong
          settopRatedMovies(data);
        } else {
          console.log("No topRated movies found.");
        }
      } catch (err) {
        console.error("Failed to fetch top rated movies:", err);
      }
    };

    fetchTopMovies();
  }, []);

  useEffect(() => {
    const fetchUpCoMovies = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/movies/upcoming');
        const data = await res.json();
        if (data.length) { // Memastikan data ada dan array tidak kosong
          setUpcomingMovies(data);
        } else {
          console.log("No upcoming movies found.");
        }
      } catch (err) {
        console.error("Failed to fetch upcoming movies:", err);
      }
    };

    fetchUpCoMovies();
  }, []);

  // useEffect untuk mengambil top movies
  useEffect(() => {
    const fetchTopMovies = async () => {
      try {
        const res = await fetch('http://localhost:5000/api/movies/top_movie');
        const data = await res.json();
        console.log("Top Movies Data:", data); // Pastikan ini menampilkan data
        setTopMovies(data); // Pastikan data diatur ke state
      } catch (err) {
        console.error("Failed to fetch top movies:", err);
      }
    };
  
    fetchTopMovies();
  }, []);
  
  
  
  return (
    <div className="slider-area bg-black">
      <Container fluid className="p-0">
        <Slider {...settings}>
          {topMovies && topMovies.length > 0 ? (
            topMovies.map(movie => (
              <div key={movie.id} className="single-slider" style={{ backgroundImage: `url(${movie.poster})` }}>
                <div className="slider-overlay"></div>
                <div className="slider-content">
                  <h1 className="title">{movie.title}</h1>
                  <div className="sub-title">{movie.synopsis}</div>
                  <Button variant="success" onClick={() => handlePlay(movie.trailer)}>
                    <FaPlay /> Play
                  </Button>
                  <Button variant="secondary">
                    <FaInfo /> More Info
                  </Button>
                </div>
              </div>
            ))
          ) : (
            <p>No movies to display</p>
          )}
        </Slider>

        {/* Modal untuk menampilkan video trailer */}
        <Modal show={show} onHide={handleClose} size="lg" centered>
          <Modal.Body className="bg-dark p-0">
            <iframe
              width="100%"
              height="400px"
              src={videoUrl}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </Modal.Body>
          <Modal.Footer className="bg-dark">
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>

        <MovieCard title={"Popular"} movies={popularMovies} />
        <MovieCard title={"Top Rated"} movies={topratedMovies} />
        <MovieCard title={"Upcoming"} movies={upcomingMovies} />
        <Footer/>
      </Container>
    </div>
  );
};

export default HomePage;
