import { Container, Row, Col, Card, Image, Form, Button, ListGroup } from 'react-bootstrap';
import IMG1 from "../assets/actor1.jpg"
import IMG2 from "../assets/actor2.jpeg"
import IMG3 from "../assets/actor3.jpg"
import IMG4 from "../assets/actor4.jpg"
import IMG5 from "../assets/actor5.jpg"

const DetailPage = () => {
    return (
        <div className="myDP">
            <Container className="text-white">
                <Row>
                    <Col md={12} className='mt-4' id='\page'>
                        <h1>My Hero Academia (2024)</h1>
                        <h5 className="text-white">Other titles: Dune, Joker, Toy story</h5>
                    </Col>
                </Row>
                {/* trailer */}
                <Row>
                    <Col md={8}>
                        <Card className="bg-dark text-white">
                            <Card.Img variant="top" src={IMG1} style={{ height: '300px' }} />
                            <Card.Body>
                                <Card.Text>
                                    <b className='text-warning'>Synopsis:</b><br />
                                    Sometimes unhelpful. I don't read it thoroughly. But what helps me is the genres. I need to see genres and actors. That is what I want.
                                </Card.Text>
                                <Card.Text>
                                    Genre: Drama, Thriller, Sci-fi<br />
                                    Rating: 3.5/5<br />
                                    Availability: Fansub: @otaksub on X
                                </Card.Text>
                            </Card.Body>
                        </Card>
                        
                    </Col>
                    {/* penilaian */}
                    <Col md={4}>
                        {/* aktor */}
                        <Row className="mb-4">
                            <Col xs={4}>
                                <Card className="bg-dark text-white text-center m-1" style={{ height: '163px' }}>
                                    <Card.Img src={IMG1} style={{ height: '100px' }} />
                                    <Card.Body>
                                        <Card.Text>Actor 1</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={4}>
                                <Card className="bg-dark text-white text-center m-1" style={{ height: '163px' }}>
                                    <Card.Img src={IMG2} style={{ height: '100px' }} />
                                    <Card.Body>
                                        <Card.Text>Actor 2</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={4}>
                                <Card className="bg-dark text-white text-center m-1" style={{ height: '163px' }}>
                                    <Card.Img src={IMG3} style={{ height: '100px' }} />
                                    <Card.Body>
                                        <Card.Text>Actor 3</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={4}>
                                <Card className="bg-dark text-white text-center m-1" style={{ height: '163px' }}>
                                    <Card.Img src={IMG4} style={{ height: '100px' }} />
                                    <Card.Body>
                                        <Card.Text>Actor 4</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={4}>
                                <Card className="bg-dark text-white text-center m-1" style={{ height: '163px' }}>
                                    <Card.Img src={IMG5} style={{ height: '100px' }} />
                                    <Card.Body>
                                        <Card.Text>Actor 5</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={4}>
                                <Card className="bg-dark text-white text-center m-1" style={{ height: '163px' }}>
                                    <Card.Img src={IMG1} style={{ height: '100px' }} />
                                    <Card.Body>
                                        <Card.Text>Actor 6</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={4}>
                                <Card className="bg-dark text-white text-center m-1" style={{ height: '163px' }}>
                                    <Card.Img src={IMG2} style={{ height: '100px' }} />
                                    <Card.Body>
                                        <Card.Text>Actor 7</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={4}>
                                <Card className="bg-dark text-white text-center m-1" style={{ height: '163px' }}>
                                    <Card.Img src={IMG3} style={{ height: '100px' }} />
                                    <Card.Body>
                                        <Card.Text>Actor 8</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                            <Col xs={4}>
                                <Card className="bg-dark text-white text-center m-1" style={{ height: '163px' }}>
                                    <Card.Img src={IMG4} style={{ height: '100px' }} />
                                    <Card.Body>
                                        <Card.Text>Actor 9</Card.Text>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </Row>
                    </Col>
                </Row>
                {/* komentar reviwer */}
                <Row className="mt-5">
                    <Col md={12}>
                        <h3>User Reviews
                            <Button variant="link" className="text-light">See all &gt;&gt;</Button>
                        </h3>
                    </Col>
                </Row>
                {/* kolom komentarnya */}
                <Row className="mb-4">
                    <Col md={6}>
                        <Card className="bg-dark p-3 mb-3 text-white">
                        <Card.Body>
                            <Card.Title>Nara (4/4/2014) said:</Card.Title>
                            <Card.Text>
                                It is a wonderful drama! I love it so much!!!
                            </Card.Text>
                            <Card.Text>
                                In the quiet embrace of ink and page, a story unfolded, timeless and sage, through the lines of a filmmaker's artistry, its essence soared, a masterpiece for all to see.
                            </Card.Text>
                            <Card.Text>
                                <strong>Rating:</strong> ⭐ 8.5/10
                            </Card.Text>
                        </Card.Body>

                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card className="bg-dark p-3 mb-3 text-white">
                            <Card.Body>
                            <Card.Title>Nara (4/4/2014) said:</Card.Title>
                            <Card.Text>
                                It is a wonderful drama! I love it so much!!!
                            </Card.Text>
                            <Card.Text>
                                In the quiet embrace of ink and page, a story unfolded, timeless and sage, through the lines of a filmmaker's artistry, its essence soared, a masterpiece for all to see.
                            </Card.Text>
                            <Card.Text>
                                <strong>Rating:</strong> ⭐ 8.5/10
                            </Card.Text>
                        </Card.Body>
                        </Card>
                    </Col>
                    <Card className="bg-dark text-white p-3 mb-4">
                            <Card.Body>
                                <h4>Add yours!</h4>
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
                </Row>
            </Container>
        </div>
    );
};

export default DetailPage;