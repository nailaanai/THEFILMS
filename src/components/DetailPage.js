import { Container, Row, Col, Card, Image, Form, Button, ListGroup } from 'react-bootstrap';
import MOVIE1 from "../assets/infinite.jpg";
import IMG2 from "../assets/actor2.jpeg";
import IMG3 from "../assets/actor3.jpg";
import IMG4 from "../assets/actor4.jpg";
import IMG5 from "../assets/actor5.jpg";
import Slider from "react-slick";
import ActorCard from "./ActorCard";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const DetailPage = () => {
    const actors = [
        { image: IMG2, name: 'Actor 1' },
        { image: IMG2, name: 'Actor 2' },
        { image: IMG3, name: 'Actor 3' },
        { image: IMG4, name: 'Actor 4' },
        { image: IMG5, name: 'Actor 5' },
        { image: IMG4, name: 'Actor 6' },
        { image: IMG3, name: 'Actor 3' },
        { image: IMG4, name: 'Actor 4' },
        { image: IMG5, name: 'Actor 5' },
        { image: IMG4, name: 'Actor 6' },
        { image: IMG3, name: 'Actor 7' },
        { image: IMG4, name: 'Actor 8' },
    ];

    return (
        <div className="myDP">
            <Container className="text-white">
                <Row>
                    <Col md={12} className='mt-4 mb-5' id='\page'>
                        <h1>My Hero Academia (2024)</h1>
                        <h5 className="text-white">Other titles: Dune, Joker, Toy story</h5>
                    </Col>
                </Row>
                {/* trailer */}
                <Row>
                    <Col md={3}>
                        <Card.Img variant="top" src={MOVIE1} style={{ width: '250px', height: '300px' }} />
                    </Col>
                    <Col md={8}>
                        {/* <Card className="bg-dark text-white"> */}
                            {/* <Card.Img variant="top" src={MOVIE1} style={{ width: '250px',height: '300px' }} /> */}
                            <Card.Body>
                                <Card.Text>
                                    <b style={{ fontSize: '32px'}}>Synopsis:</b><br />
                                    Sometimes unhelpful. I don't read it thoroughly. But what helps me is the genres. I need to see genres and actors. That is what I want.
                                </Card.Text>
                                <Card.Text>
                                    Genre: Drama, Thriller, Sci-fi<br />
                                    Rating: 3.5/5<br />
                                    Availability: Fansub: @otaksub on X
                                </Card.Text>
                            </Card.Body>
                        {/* </Card> */}
                        
                    </Col>
                    {/* penilaian */}
                    
                </Row>
                {/* actors */}
                <Row className="g-1 mt-5">
                    {/* <h2 className='mt-4 mb-2'>ACTOR</h2> */}
                    {actors.map((actor, index) => (
                        <ActorCard key={index} image={actor.image} name={actor.name} />
                    ))}
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