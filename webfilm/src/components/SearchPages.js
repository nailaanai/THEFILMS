import { Dropdown, Form, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from 'react';
import Footer from "./Footer/Footer";
import "../style/searchPage.css";

const SearchPages = () => {
  const location = useLocation(); 
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('query') || '';

  const [movies, setMovies] = useState([]);
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedYears, setSelectedYears] = useState([]);
  const [selectedStatuses, setSelectedStatuses] = useState([]);
  const [genres, setGenres] = useState([]);
  const [countries, setCountries] = useState([]);
  const [years, setYears] = useState([]);
  const [statuses, setStatuses] = useState([]);

  // Fetch genres, countries, years, and statuses from backend
  useEffect(() => {
    fetch('http://localhost:5000/genre')
      .then(res => res.json())
      .then(data => setGenres(data))
      .catch(err => console.error('Failed to fetch genres:', err));

    fetch('http://localhost:5000/country')
      .then(res => res.json())
      .then(data => setCountries(data))
      .catch(err => console.error('Failed to fetch countries:', err));

    fetch('http://localhost:5000/api/movies/years')
      .then(res => res.json())
      .then(data => setYears(data))
      .catch(err => console.error('Failed to fetch years:', err));

    fetch('http://localhost:5000/api/movies/statuses')
      .then(res => res.json())
      .then(data => setStatuses(data))
      .catch(err => console.error('Failed to fetch statuses:', err));
  }, []);

  // Fungsi untuk fetch film dengan filter
  const fetchMovies = async () => {
    try {
      // Buat query string berdasarkan filter yang dipilih
      const queryString = `http://localhost:5000/api/movies/search?query=${query}&genres=${selectedGenres.join(',')}&countries=${selectedCountries.join(',')}&years=${selectedYears.join(',')}&statuses=${selectedStatuses.join(',')}`;
      
      const response = await fetch(queryString);
      const data = await response.json();
      setMovies(data);  // Update state movies dengan hasil
    } catch (err) {
      console.error('Failed to fetch movies:', err);
    }
  };

  // Handle filter change
  const handleFilterChange = (setSelected, value) => {
    setSelected(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
  };
  
  // Memanggil fetchMovies saat query atau filter diubah
  useEffect(() => {
    if (selectedGenres.length > 0 || selectedCountries.length > 0 || selectedYears.length > 0 || selectedStatuses.length > 0) {
      fetchMovies();
    } else {
      // Jika tidak ada filter yang dipilih, fetch semua movie
      fetchAllMovies();
    }
  }, [query, selectedGenres, selectedCountries, selectedYears, selectedStatuses]);

  const fetchAllMovies = async () => {
    try {
      const response = await fetch(`http://localhost:5000/api/movies`);
      const data = await response.json();
      setMovies(data); // Pastikan data yang diset adalah array
    } catch (err) {
      console.error('Failed to fetch all movies:', err);
    }
  };

  // Pastikan movies adalah array sebelum melakukan operasi slice
  const limitedMovies = Array.isArray(movies) ? movies.slice(0, 100) : [];

  return (
    <section className="trending p-40 mySearch" style={{ paddingTop: '120px' }}>
      <div className="container-fluid">
        <Row>
          {/* Filter Section */}
          <Col md={3} sm={12}>
            <div className="filter mb-32">
              <h4 className="h-30 bold color-white mb-32 mt-3">Filtered By:</h4>
              <ul className="filter-block unstyled mb-32">
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', rowGap: '10px' }}>
                  {/* Filter Genre */}
                  <li>
                    <Dropdown>
                      <Dropdown.Toggle variant="dark" id="dropdown-basic">Genre</Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Row>
                          {genres.map((genre, index) => (
                            <Col xs={6} key={index}>
                              <Form.Check
                                type="checkbox"
                                label={genre.name}
                                checked={selectedGenres.includes(genre.name)}
                                onChange={() => handleFilterChange(setSelectedGenres, genre.name)}
                                style={{ color: 'black' }}
                              />
                            </Col>
                          ))}
                        </Row>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>

                  {/* Filter Country */}
                  <li>
                    <Dropdown>
                      <Dropdown.Toggle variant="dark" id="dropdown-basic">Country</Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Row>
                          {countries.map((country, index) => (
                            <Col xs={6} key={index}>
                              <Form.Check
                                type="checkbox"
                                label={country.name}
                                checked={selectedCountries.includes(country.name)}
                                onChange={() => handleFilterChange(setSelectedCountries, country.name)}
                                style={{ color: 'black' }}
                              />
                            </Col>
                          ))}
                        </Row>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>

                  {/* Filter Year */}
                  <li>
                    <Dropdown>
                      <Dropdown.Toggle variant="dark" id="dropdown-basic">Year</Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Row>
                          {years.map((year, index) => (
                            <Col xs={6} key={index}>
                              <Form.Check
                                type="checkbox"
                                label={year}
                                checked={selectedYears.includes(year)}
                                onChange={() => handleFilterChange(setSelectedYears, year)}
                                style={{ color: 'black' }}
                              />
                            </Col>
                          ))}
                        </Row>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>

                  {/* Filter Status */}
                  <li>
                    <Dropdown>
                      <Dropdown.Toggle variant="dark" id="dropdown-basic">Status</Dropdown.Toggle>
                      <Dropdown.Menu>
                        <Row>
                          {statuses.map((status, index) => (
                            <Col xs={6} key={index}>
                              <Form.Check
                                type="checkbox"
                                label={status}
                                checked={selectedStatuses.includes(status)}
                                onChange={() => handleFilterChange(setSelectedStatuses, status)}
                                style={{ color: 'black' }}
                              />
                            </Col>
                          ))}
                        </Row>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                </div>
              </ul>
            </div>
          </Col>

          {/* Search Results Section */}
          <Col md={9} sm={12} >
            <h5 style={{ marginBottom: '50px', textAlign: 'center' }}>Search Results for: {query}</h5>
            <Row className='movie-container'>
              {limitedMovies.length > 0 ? limitedMovies.map((movie, index) => (
                <Col key={index} md={3} sm={6} className="text-center">
                  <Link to={`/detail/${movie.id}`}>
                    <Image src={movie.poster} alt={movie.title} className="br-12" />
                    <h5>{movie.title}</h5>
                  </Link>
                </Col>
              )) : <p>No movies found</p>}
            </Row>
          </Col>
        </Row>
        <Footer />
      </div>
    </section>
  );
}

export default SearchPages;
