import { Container, Row, Col, Card, Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import cards_data from '../../src/components/CardData'; // Import data movie

const DetailPage = () => {
    const { id } = useParams(); // Ambil ID dari URL
    const movie = cards_data.find((card) => card.id === parseInt(id)); // Temukan movie berdasarkan ID

    if (!movie) {
        return <h2>Movie not found</h2>; // Jika movie tidak ditemukan
    }

    const actors = [
        { image: movie.actorImage1, name: 'Actor 1' },  // Sesuaikan dengan data actor di cards_data
        { image: movie.actorImage2, name: 'Actor 2' },
        { image: movie.actorImage3, name: 'Actor 3' },
        // Tambahkan lebih banyak data actor jika ada
    ];

    return (
        <div className="myDP">
            <Container className="text-white">
                {/* trailer */}
                <Row>
                    <Col md={3}>
                        <Card.Img variant="top" src={movie.image} style={{ width: '250px', height: '300px' }} className='mt-5'/>
                    </Col>
                    <Col md={8}>
                        <Card.Body>
                            <Card.Text style={{color:'#cccccc'}} className='mt-5'>
                                <b style={{ fontSize: '35px', color:'white'}}>{movie.name}</b>
                                <h5 className="text-white">Other titles: {movie.otherTitles}</h5>
                                <h5 className="text-white">Year: {movie.year}</h5>
                                
                                <b style={{ fontSize: '20px', color:'white'}}>Synopsis:</b><br />
                                {movie.synopsis}
                            </Card.Text>
                            <Card.Text style={{ fontSize: '18px', color:'white'}}>
                                Genre: 
                                <span style={{ fontSize: '15px',color: '#cccccc' }}>
                                    {movie.genre}
                                </span>
                                <br />
                                Rating: 
                                <span style={{ fontSize: '15px',color: '#cccccc' }}>
                                    {movie.rating}
                                </span>
                                <br />
                                Availability: 
                                <span style={{ fontSize: '15px',color: '#cccccc' }}>
                                    {movie.availability}
                                </span>
                            </Card.Text>
                        </Card.Body>
                    </Col>
                </Row>

                {/* Actors */}
                <Row className="g-1 mt-5">
                    {actors.map((actor, index) => (
                        <Col key={index} md={2}>
                            <Card className="bg-dark text-white">
                                <Card.Img variant="top" src={actor.image} />
                                <Card.Body>
                                    <Card.Title>{actor.name}</Card.Title>
                                </Card.Body>
                            </Card>
                        </Col>
                    ))}
                </Row>

                {/* Reviews */}
                <Row className="mt-5">
                    <Col md={12}>
                        <h3>User Reviews
                            <Button variant="link" className="text-light">See all &gt;&gt;</Button>
                        </h3>
                    </Col>
                </Row>

                {/* Add your review */}
                <Row className="mb-4">
                    <Col md={12}>
                        <Card className="bg-dark text-white p-3 mb-4">
                            <Card.Body>
                                <h4>Add your review!</h4>
                                <Form>
                                    <Form.Group className="mb-3" controlId="formBasicName">
                                        <Form.Label>Name</Form.Label>
                                        <Form.Control type="text" placeholder="Enter name" />
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicRating">
                                        <Form.Label>Rate</Form.Label>
                                        <Form.Control as="select">
                                            {[1, 2, 3, 4, 5].map(star => (
                                                <option key={star} value={star}>{star} Star</option>
                                            ))}
                                        </Form.Control>
                                    </Form.Group>

                                    <Form.Group className="mb-3" controlId="formBasicThoughts">
                                        <Form.Label>Your thoughts</Form.Label>
                                        <Form.Control as="textarea" rows={3} />
                                    </Form.Group>

                                    <Button variant="warning" type="submit">
                                        Submit
                                    </Button>
                                </Form>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default DetailPage;
