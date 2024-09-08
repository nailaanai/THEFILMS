import { Card, Dropdown, Form, Row, Col, Image } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faStar } from '@fortawesome/free-solid-svg-icons';
// import MOVIE1 from "../assets/img-1.png";
import { Link } from "react-router-dom";
import IMG7 from "../assets/img-1.png";


const GenrePage = () => {
    const genres = [
        "Action", "Adventure", "Comedy", "Drama",
        "Fantasy", "Horror", "Mystery", "Parody",
        "Romance", "Sci-Fi", "Sports", "Thriller"
    ];
    const countries = [
        "Indonesia", "Korea", "Japan", "China",
        "USA"
    ];
    const year = [
        "2024", "2023", "2022", "2021",
        "2020", "2019"
    ];
    const status = [
        "Ongoing", "Completed", "Upcoming"
    ];

    return (
        <section className="trending p-40 mySearch">
            <div className="container-fluid">
                <Row>
                    <Col md={3}>
                        <div className="filter mb-32">
                            <h2 className="h-30 bold color-white mb-32" style={{ marginBottom: '25px' }}>Filtered By:</h2>
                            <ul className="filter-block unstyled mb-32" style={{ listStyleType: 'none', paddingLeft: 0 }}>
                                <div style={{ display: 'grid', gridTemplateColumns: '1fr', rowGap: '10px' }}>
                                    {/* genre */}
                                    <li style={{ marginBottom: '15px' }}>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="dark" id="dropdown-basic" style={{ width: '150px' }}>
                                                Genre
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu style={{ width: '360px' }}>
                                                <Row>
                                                    {genres.map((genre, index) => (
                                                        <Col xs={4} key={index}>
                                                            <Form.Check
                                                                type="checkbox"
                                                                id={`genre-${index}`}
                                                                label={genre}
                                                                style={{ color: 'black' }}
                                                            />
                                                        </Col>
                                                    ))}
                                                </Row>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </li>
                                    {/* country */}
                                    <li style={{ marginBottom: '15px' }}>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="dark" id="dropdown-basic" style={{ width: '150px' }}>
                                                Country
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu style={{ width: '240px' }}>
                                                <Row>
                                                    {countries.map((country, index) => (
                                                        <Col xs={6} key={index}>
                                                            <Form.Check
                                                                type="checkbox"
                                                                id={`country-${index}`}
                                                                label={country}
                                                                style={{ color: 'black' }}
                                                            />
                                                        </Col>
                                                    ))}
                                                </Row>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </li>
                                    {/* year */}
                                    <li style={{ marginBottom: '15px' }}>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="dark" id="dropdown-basic" style={{ width: '150px' }}>
                                                Year
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu style={{ width: '160px' }}>
                                                <Row>
                                                    {year.map((year, index) => (
                                                        <Col xs={6} key={index}>
                                                            <Form.Check
                                                                type="checkbox"
                                                                id={`year-${index}`}
                                                                label={year}
                                                                style={{ color: 'black' }}
                                                            />
                                                        </Col>
                                                    ))}
                                                </Row>
                                            </Dropdown.Menu>
                                        </Dropdown>
                                    </li>
                                    {/* status */}
                                    <li style={{ marginBottom: '15px' }}>
                                        <Dropdown>
                                            <Dropdown.Toggle variant="dark" id="dropdown-basic" style={{ width: '150px' }}>
                                                Status
                                            </Dropdown.Toggle>
                                            <Dropdown.Menu style={{ width: '150px' }}>
                                                <Row>
                                                    {status.map((status, index) => (
                                                        <Col xs={7} key={index}>
                                                            <Form.Check
                                                                type="checkbox"
                                                                id={`status-${index}`}
                                                                label={status}
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
                            <a href='#' className='cus-btn primary mb-50' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '10px 20px', backgroundColor: '#28a745', borderRadius: '10px', color: 'white', textDecoration: 'none', width: '90px' }}>
                                Filter
                                <FontAwesomeIcon icon={faFilter} style={{ marginLeft: '8px' }} />
                            </a>
                        </div>
                    </Col>

                    {/* Top Movie Section */}
                    <Col md={9} style={{ color: 'white' }}>
                        <h2>Top Movie</h2>
                        <h4 style={{ fontSize: '16px', marginBottom: '30px' }}>Based on your filter</h4> {/* Added marginBottom */}
                        
                        {/* Row for Movie Cards */}
                        <Row>
                            {/* First Movie */}
                            <Col md={6}>
                                <div className="movieCardSearch mb-30" style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                                    <Image
                                        style={{ width: '60px' }}
                                        src={IMG7}
                                        alt="My Hero Academia"
                                        className="br-12"
                                    />
                                    <div className="content" style={{ marginLeft: '10px' }}>
                                        <Link to="/detail" className="card-link h-30 color-white mb-8 hero">
                                            <Card.Title className="text-left">
                                                <h4>My Hero Academia</h4>
                                            </Card.Title>
                                        </Link>
                                        <ul className="tag-unstyled mb-16" style={{ display: 'flex', gap: '5px' }}>
                                            <li>2019</li>
                                            <li>|</li>
                                            <li>4 Seasons</li>
                                            <li>|</li>
                                            <li>Action</li>
                                            <li>|</li>
                                            <li className="justify-content-end" style={{ display: 'flex', alignItems: 'center' }}>
                                                <FontAwesomeIcon icon={faStar} style={{ color: '#FFD700' }} />
                                                <span style={{ marginLeft: '4px' }}>8.5</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>

                            {/* Second Movie */}
                            <Col md={6}>
                                <div className="movieCardSearch mb-30" style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                                    <Image
                                        style={{ width: '60px' }}
                                        src={IMG7}
                                        alt="My Hero Academia"
                                        className="br-12"
                                    />
                                    <div className="content" style={{ marginLeft: '10px' }}>
                                        <Link to="/detail" className="card-link h-30 color-white mb-8 hero">
                                            <Card.Title className="text-left">
                                                <h4>My Hero Academia</h4>
                                            </Card.Title>
                                        </Link>
                                        <ul className="tag-unstyled mb-16" style={{ display: 'flex', gap: '5px' }}>
                                            <li>2019</li>
                                            <li>|</li>
                                            <li>4 Seasons</li>
                                            <li>|</li>
                                            <li>Action</li>
                                            <li>|</li>
                                            <li className="justify-content-end" style={{ display: 'flex', alignItems: 'center' }}>
                                                <FontAwesomeIcon icon={faStar} style={{ color: '#FFD700' }} />
                                                <span style={{ marginLeft: '4px' }}>8.5</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>

                            {/* Third Movie */}
                            <Col md={6}>
                                <div className="movieCardSearch mb-30" style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                                    <Image
                                        style={{ width: '60px' }}
                                        src={IMG7}
                                        alt="Attack on Titan"
                                        className="br-12"
                                    />
                                    <div className="content" style={{ marginLeft: '10px' }}>
                                        <Link to="/detail" className="card-link h-30 color-white mb-8 hero">
                                            <Card.Title className="text-left">
                                                <h4>Attack on Titan</h4>
                                            </Card.Title>
                                        </Link>
                                        <ul className="tag-unstyled mb-16" style={{ display: 'flex', gap: '5px' }}>
                                            <li>2013</li>
                                            <li>|</li>
                                            <li>4 Seasons</li>
                                            <li>|</li>
                                            <li>Action</li>
                                            <li>|</li>
                                            <li className="justify-content-end" style={{ display: 'flex', alignItems: 'center' }}>
                                                <FontAwesomeIcon icon={faStar} style={{ color: '#FFD700' }} />
                                                <span style={{ marginLeft: '4px' }}>9.0</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>

                            {/* Fourth Movie */}
                            <Col md={6}>
                                <div className="movieCardSearch mb-30" style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                                    <Image
                                        style={{ width: '60px' }}
                                        src={IMG7}
                                        alt="Demon Slayer"
                                        className="br-12"
                                    />
                                    <div className="content" style={{ marginLeft: '10px' }}>
                                        <Link to="/detail" className="card-link h-30 color-white mb-8 hero">
                                            <Card.Title className="text-left">
                                                <h4>Demon Slayer</h4>
                                            </Card.Title>
                                        </Link>
                                        <ul className="tag-unstyled mb-16" style={{ display: 'flex', gap: '5px' }}>
                                            <li>2019</li>
                                            <li>|</li>
                                            <li>2 Seasons</li>
                                            <li>|</li>
                                            <li>Action</li>
                                            <li>|</li>
                                            <li className="justify-content-end" style={{ display: 'flex', alignItems: 'center' }}>
                                                <FontAwesomeIcon icon={faStar} style={{ color: '#FFD700' }} />
                                                <span style={{ marginLeft: '4px' }}>8.7</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            {/* Fourth Movie */}
                            <Col md={6}>
                                <div className="movieCardSearch mb-30" style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                                    <Image
                                        style={{ width: '60px' }}
                                        src={IMG7}
                                        alt="Demon Slayer"
                                        className="br-12"
                                    />
                                    <div className="content" style={{ marginLeft: '10px' }}>
                                        <Link to="/detail" className="card-link h-30 color-white mb-8 hero">
                                            <Card.Title className="text-left">
                                                <h4>Demon Slayer</h4>
                                            </Card.Title>
                                        </Link>
                                        <ul className="tag-unstyled mb-16" style={{ display: 'flex', gap: '5px' }}>
                                            <li>2019</li>
                                            <li>|</li>
                                            <li>2 Seasons</li>
                                            <li>|</li>
                                            <li>Action</li>
                                            <li>|</li>
                                            <li className="justify-content-end" style={{ display: 'flex', alignItems: 'center' }}>
                                                <FontAwesomeIcon icon={faStar} style={{ color: '#FFD700' }} />
                                                <span style={{ marginLeft: '4px' }}>8.7</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            {/* Fourth Movie */}
                            <Col md={6}>
                                <div className="movieCardSearch mb-30" style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                                    <Image
                                        style={{ width: '60px' }}
                                        src={IMG7}
                                        alt="Demon Slayer"
                                        className="br-12"
                                    />
                                    <div className="content" style={{ marginLeft: '10px' }}>
                                        <Link to="/detail" className="card-link h-30 color-white mb-8 hero">
                                            <Card.Title className="text-left">
                                                <h4>Demon Slayer</h4>
                                            </Card.Title>
                                        </Link>
                                        <ul className="tag-unstyled mb-16" style={{ display: 'flex', gap: '5px' }}>
                                            <li>2019</li>
                                            <li>|</li>
                                            <li>2 Seasons</li>
                                            <li>|</li>
                                            <li>Action</li>
                                            <li>|</li>
                                            <li className="justify-content-end" style={{ display: 'flex', alignItems: 'center' }}>
                                                <FontAwesomeIcon icon={faStar} style={{ color: '#FFD700' }} />
                                                <span style={{ marginLeft: '4px' }}>8.7</span>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </Col>
                            
                        </Row>
                    </Col>
                </Row>
            </div>
        </section>
    );
}

export default GenrePage;
