import React, { useEffect, useRef, useState } from "react";
import { Link } from 'react-router-dom';
import "../style/MovieCard.css";
import cards_data from '../../src/components/CardData';

const MovieCard = ({ title }) => {
  const cardsRef = useRef();
  const [hoveredIndex, setHoveredIndex] = useState(null); // Menyimpan index card yang di-hover

  const handleWheel = (event) => {
    event.preventDefault();
    cardsRef.current.scrollLeft += event.deltaX; // Scroll secara horizontal
  };

  useEffect(() => {
    const refCurrent = cardsRef.current;
    if (refCurrent) {
      refCurrent.addEventListener("wheel", handleWheel);
    }

    return () => {
      if (refCurrent) {
        refCurrent.removeEventListener("wheel", handleWheel);
      }
    };
  }, []);

  return (
    <div className="movie-cards">
      <h2>{title ? title : "Popular"}</h2>
      <div className="card-list" ref={cardsRef}>
        {cards_data.slice(0, 9).map((card, index) => {
          return (
            <div
              className="card"
              key={index}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              style={{ position: "relative", margin: "10px" }}
            >
              <img src={card.image} alt={card.name} style={{ width: "100%", borderRadius: "10px" }} />

              {hoveredIndex === index && (
                <div className="content">
                  <Link to={`/detail/${card.id}`} style={{ color: '#fff', textDecoration: 'none' }}>
                    <h4>{card.name}</h4>
                  </Link>
                </div>
              )}
            </div>
          );
        })}
      </div>
      {/* Tombol See More */}
      <div className="see-more">
        <Link to="/all-movies" className="see-more-link">
          See More
        </Link>
      </div>
    </div>
  );
};

export default MovieCard;
