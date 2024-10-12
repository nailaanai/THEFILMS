import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const AllMovies = () => {
  const { category } = useParams();  // Mendapatkan parameter kategori dari URL
  const navigate = useNavigate();
  const [movies, setMovies] = useState([]);

  useEffect(() => {
    if (!category) {
      console.error("Category is undefined, redirecting...");
      navigate('/');
      return;
    }

    const fetchMoviesByCategory = async () => {
      try {
        const response = await fetch(`http://localhost:5000/api/movies/${category}`);
        if (response.ok) {
          const data = await response.json();
          setMovies(data);
        } else {
          throw new Error('Failed to fetch movies: ' + response.statusText);
        }
      } catch (error) {
        console.error('Failed to fetch movies:', error);
      }
    };

    fetchMoviesByCategory();
  }, [category, navigate]);

  return (
    <div>
      <h1>{category.replace('_', ' ').toUpperCase()} Movies</h1>
      <div>
        {movies.length > 0 ? (
          movies.map((movie) => (
            <div key={movie.id}>
              <h2>{movie.title}</h2>
              <p>{movie.description}</p>
            </div>
          ))
        ) : (
          <p>No movies found for this category.</p>
        )}
      </div>
    </div>
  );
};

export default AllMovies;
