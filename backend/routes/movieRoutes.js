const express = require('express');
const { getMovies, getMovieById, getPopularMovies, getTopRatedMovies, getUpcomingMovies, getTopMovies, searchMovies, getDistinctYears, getDistinctStatuses} = require('../controllers/movieController');
// const { getGenre } = require('../controllers/genreController');
const router = express.Router();

// Get all movies
router.get('/movies', getMovies);
router.get('/movies/popular',getPopularMovies);
router.get('/movies/top_rated',getTopRatedMovies);
router.get('/movies/upcoming',getUpcomingMovies);
router.get('/movies/top_movie',getTopMovies);
router.get('/movies/search', searchMovies);
router.get('/movies/years', getDistinctYears);
router.get('/movies/statuses', getDistinctStatuses);
// Get movie by ID
router.get('/movies/:id', getMovieById);


module.exports = router;
