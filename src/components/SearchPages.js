import { Dropdown, Form, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Link, useLocation } from "react-router-dom";
import { useState } from 'react';
import CardData from './CardData';
import Footer from "./Footer/Footer";

const SearchPages = () => {
  const [movies] = useState(CardData);
  const location = useLocation(); 
  const queryParams = new URLSearchParams(location.search);
  const query = queryParams.get('query');

  // State untuk menyimpan pilihan filter
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [selectedYears, setSelectedYears] = useState([]);
  const [selectedStatus, setSelectedStatus] = useState([]);

  const genres = ["Action", "Comedy", "Drama", "Fantasy", "Horror", "Mystery", "Romance", "Sci-Fi", "Sports", "Thriller"];
  const countries = ["Indonesia", "Korea", "Japan", "China", "USA"];
  const year = ["2024", "2023", "2022", "2021", "2020", "2019", "2018", "2017", "2016"];
  const status = ["Ongoing", "Completed", "Upcoming"]; 

  // Fungsi untuk filter film berdasarkan pencarian
  const filteredMovies = movies.filter(movie => {
    const matchesQuery = movie.name.toLowerCase().includes(query?.toLowerCase() || "");
    const matchesGenre = selectedGenres.length === 0 || selectedGenres.some(genre => movie.genre.includes(genre)); // Cek genre
    const matchesCountry = selectedCountries.length === 0 || selectedCountries.includes(movie.country); // Cek country
    const matchesYear = selectedYears.length === 0 || selectedYears.includes(movie.year.toString()); // Cek year
    const matchesStatus = selectedStatus.length === 0 || selectedStatus.includes(movie.status); // Cek status

    return matchesQuery && matchesGenre && matchesCountry && matchesYear && matchesStatus;
  });

  // Fungsi untuk mengubah filter (menambah/menghapus filter)
  const handleFilterChange = (setSelected, value) => {
    setSelected(prev => prev.includes(value) ? prev.filter(item => item !== value) : [...prev, value]);
  };

  return (
    <section className="trending p-40 mySearch">
      <div className="container-fluid">
        <Row>
          {/* Bagian Filter */}
          <Col md={3}>
            <div className="filter mb-32">
              <h4 className="h-30 bold color-white mb-32 mt-5" style={{ marginBottom: '25px', fontFamily: 'Monaco, monospace', fontWeight: 'bold' }}>Filtered By:</h4>
              <ul className="filter-block unstyled mb-32" style={{ listStyleType: 'none', paddingLeft: 0 }}>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr', rowGap: '10px' }}>
                  
                  {/* Filter Genre */}
                  <li style={{ marginBottom: '15px' }}>
                    <Dropdown>
                      <Dropdown.Toggle variant="dark" id="dropdown-basic" style={{ width: '150px', fontFamily:'Monaco, monospace' }}>Genre</Dropdown.Toggle>
                      <Dropdown.Menu style={{ width: '360px' }}>
                        <Row>
                          {genres.map((genre, index) => (
                            <Col xs={4} key={index}>
                              <Form.Check
                                type="checkbox"
                                id={`genre-${index}`}
                                label={genre}
                                checked={selectedGenres.includes(genre)} // Menampilkan kotak centang yang dipilih
                                style={{ color: 'black' }}
                                onChange={() => handleFilterChange(setSelectedGenres, genre)}
                              />
                            </Col>
                          ))}
                        </Row>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>

                  {/* Filter Country */}
                  <li style={{ marginBottom: '15px' }}>
                    <Dropdown>
                      <Dropdown.Toggle variant="dark" id="dropdown-basic" style={{ width: '150px', fontFamily:'Monaco, monospace' }}>Country</Dropdown.Toggle>
                      <Dropdown.Menu style={{ width: '240px' }}>
                        <Row>
                          {countries.map((country, index) => (
                            <Col xs={6} key={index}>
                              <Form.Check
                                type="checkbox"
                                id={`country-${index}`}
                                label={country}
                                checked={selectedCountries.includes(country)} // Menampilkan kotak centang yang dipilih
                                style={{ color: 'black' }}
                                onChange={() => handleFilterChange(setSelectedCountries, country)}
                              />
                            </Col>
                          ))}
                        </Row>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>

                  {/* Filter Year */}
                  <li style={{ marginBottom: '15px' }}>
                    <Dropdown>
                      <Dropdown.Toggle variant="dark" id="dropdown-basic" style={{ width: '150px', fontFamily:'Monaco, monospace' }}>Year</Dropdown.Toggle>
                      <Dropdown.Menu style={{ width: '160px' }}>
                        <Row>
                          {year.map((year, index) => (
                            <Col xs={6} key={index}>
                              <Form.Check
                                type="checkbox"
                                id={`year-${index}`}
                                label={year}
                                checked={selectedYears.includes(year)} // Menampilkan kotak centang yang dipilih
                                style={{ color: 'black' }}
                                onChange={() => handleFilterChange(setSelectedYears, year)}
                              />
                            </Col>
                          ))}
                        </Row>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>

                  {/* Filter Status */}
                  <li style={{ marginBottom: '15px' }}>
                    <Dropdown>
                      <Dropdown.Toggle variant="dark" id="dropdown-basic" style={{ width: '150px', fontFamily:'Monaco, monospace' }}>Status</Dropdown.Toggle>
                      <Dropdown.Menu style={{ width: '150px' }}>
                        <Row>
                          {status.map((status, index) => (
                            <Col xs={7} key={index}>
                              <Form.Check
                                type="checkbox"
                                id={`status-${index}`}
                                label={status}
                                checked={selectedStatus.includes(status)} // Menampilkan kotak centang yang dipilih
                                style={{ color: 'black' }}
                                onChange={() => handleFilterChange(setSelectedStatus, status)}
                              />
                            </Col>
                          ))}
                        </Row>
                      </Dropdown.Menu>
                    </Dropdown>
                  </li>
                </div>
              </ul>
              <a href='#' className='cus-btn primary mb-50' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px 20px', backgroundColor: '#28a745', borderRadius: '10px', color: 'white', textDecoration: 'none', width: '150px', fontFamily:'Monaco, monospace' }}>
                Filter
              </a>
            </div>
          </Col>

          {/* Hasil Pencarian Film */}
          <Col md={9} style={{ color: 'white' }}>
            <h5 style={{ marginTop: '50px', marginBottom: '30px', fontWeight: 'bold', fontFamily: 'Georgia, serif', textAlign: 'center' }}>
              Search Results for: {query}
            </h5>
            
            <Row className='movie-container'>
              {/* Tampilkan film yang sudah difilter atau pesan jika tidak ada */}
              {filteredMovies.length > 0 ? filteredMovies.map((movie, index) => (
                <Col key={index} className="text-center movieCardSearch" style={{ flex: '1 0 18%' }}>
                  <Link to={`/detail/${movie.id}`}>
                    <Image src={movie.image} alt={movie.name} className="br-12" style={{ width: '100%', height: '100%' }}/>
                    <h5 className="mt-2">{movie.name}</h5>
                  </Link>
                </Col>
              )) : <p>No results found</p>}
            </Row>
          </Col>
        </Row>
        <Footer/>
      </div>
    </section>
  );
}

export default SearchPages;
