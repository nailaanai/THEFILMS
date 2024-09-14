import React from 'react';
import { Link } from 'react-router-dom';
import "../style/AllMovies.css";
import Footer from "./Footer/Footer";
import cards_data from '../../src/components/CardData';

const AllMovie = () => {
  return (
    <div className="all-movies-page">
      <h1>All Movies</h1>
      <div className="all-movies-grid">
        {cards_data.map((card, index) => (
          <div className="movie-card" key={index}>
            <img src={card.image} alt={card.name} />
            {/* Gunakan Link di sini agar judul bisa diarahkan ke halaman detail */}
            <Link to={`/detail/${card.id}`} style={{ textDecoration: 'none', color: 'white' }}>
              <h4>{card.name}</h4>
            </Link>
          </div>
        ))}
      </div>
      <Footer/>
    </div>
  );
};

export default AllMovie;
