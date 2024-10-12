const connection = require('../config/db');

// Fetch all movies
exports.getMovies = (req, res) => {
  const sql = 'SELECT * FROM movies';
  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
};

// Fetch movie by ID with actors
exports.getMovieById = (req, res) => {
  const { id } = req.params;
  
  const movieQuery = 'SELECT m.*, m.category AS status, m.trailer FROM movies m WHERE m.id = ?';
  const genreQuery = `
    SELECT g.name 
    FROM genres g 
    INNER JOIN movie_genres mg ON g.id = mg.genre_id 
    WHERE mg.movie_id = ?
  `;
  const actorQuery = `
    SELECT a.id, a.name, a.profile_path AS image 
    FROM actors a 
    INNER JOIN movie_actors ma ON a.id = ma.actor_id 
    WHERE ma.movie_id = ?
  `;
  const reviewQuery = 'SELECT * FROM reviews WHERE movie_id = ?';
  const countryQuery = `
    SELECT c.name 
    FROM countries c 
    INNER JOIN movie_countries mc ON c.id = mc.country_id 
    WHERE mc.movie_id = ?
  `;

  connection.query(movieQuery, [id], (err, movieResult) => {
    if (err) return res.status(500).json({ error: err.message });
    if (movieResult.length === 0) return res.status(404).json({ message: 'Movie not found' });

    const movie = movieResult[0];

    // Fetch genres related to the movie
    connection.query(genreQuery, [id], (genreErr, genreResults) => {
      if (genreErr) return res.status(500).json({ error: genreErr.message });

      movie.genres = genreResults.map(genre => genre.name);

      // Fetch actors related to the movie
      connection.query(actorQuery, [id], (actorErr, actorResults) => {
        if (actorErr) return res.status(500).json({ error: actorErr.message });

        movie.actors = actorResults;

        // Fetch reviews related to the movie
        connection.query(reviewQuery, [id], (reviewErr, reviewResults) => {
          if (reviewErr) return res.status(500).json({ error: reviewErr.message });

          movie.reviews = reviewResults;

          // Fetch countries related to the movie
          connection.query(countryQuery, [id], (countryErr, countryResults) => {
            if (countryErr) return res.status(500).json({ error: countryErr.message });

            movie.countries = countryResults.map(country => country.name); // Get country names

            res.status(200).json(movie); // Return movie details with genres, actors, reviews, and countries
          });
        });
      });
    });
  });
};


// fetch popular movie
exports.getPopularMovies = (req, res) => {
  const sql = 'SELECT * FROM movies WHERE category = "popular"';
  connection.query(sql, (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json(results);
  });
};

// fetch top rated movie
exports.getTopRatedMovies = (req, res) => {
  const sql = 'SELECT * FROM movies WHERE category = "top_rated"';
  connection.query(sql, (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json(results);
  });
};

// fetch up coming movie
exports.getUpcomingMovies = (req, res) => {
  const sql = 'SELECT * FROM movies WHERE category = "upcoming"';
  connection.query(sql, (err, results) => {
      if (err) return res.status(500).json({ error: err.message });
      res.status(200).json(results);
  });
};

exports.getTopMovies = (req, res) => {
  const sql = 'SELECT * FROM movies WHERE category = "top_movie"';
  connection.query(sql, (err, results) => {
    if (err) {
      console.error('Error fetching top movies:', err);
      return res.status(500).json({ error: 'Internal Server Error', message: err.message });
    }
    res.status(200).json(results);
  });
};

exports.searchMovies = (req, res) => {
  const { query, genres = '', countries = '', years = '', statuses = '' } = req.query;

  let sql = `
    SELECT DISTINCT m.*
    FROM movies m
    LEFT JOIN movie_genres mg ON m.id = mg.movie_id
    LEFT JOIN genres g ON mg.genre_id = g.id
    LEFT JOIN movie_countries mc ON m.id = mc.movie_id
    LEFT JOIN countries c ON mc.country_id = c.id
    WHERE 1=1
  `;

  const queryParams = [];

  // Filter berdasarkan genre
  if (genres) {
    const genreList = genres.split(',');
    sql += ` AND g.name IN (${genreList.map(() => '?').join(',')})`;
    queryParams.push(...genreList);
  }

  // Filter berdasarkan negara
  if (countries) {
    const countryList = countries.split(',');
    sql += ` AND c.name IN (${countryList.map(() => '?').join(',')})`;
    queryParams.push(...countryList);
  }

  // Filter berdasarkan tahun
  if (years) {
    const yearList = years.split(',');
    sql += ` AND m.year IN (${yearList.map(() => '?').join(',')})`;
    queryParams.push(...yearList);
  }

  // Filter berdasarkan status (category)
  if (statuses) {
    const statusList = statuses.split(',');
    sql += ` AND m.category IN (${statusList.map(() => '?').join(',')})`;
    queryParams.push(...statusList);
  }

  // Jalankan query
  connection.query(sql, queryParams, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    res.status(200).json(results);
  });
};



exports.getDistinctYears = (req, res) => {
  const sql = 'SELECT DISTINCT year FROM movies ORDER BY year DESC';
  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    const years = results.map(row => row.year);
    res.status(200).json(years);
  });
};

exports.getDistinctStatuses = (req, res) => {
  const sql = 'SELECT DISTINCT category FROM movies';
  connection.query(sql, (err, results) => {
    if (err) return res.status(500).json({ error: err.message });
    const statuses = results.map(row => row.category);
    res.status(200).json(statuses);
  });
};

