import { useState, useEffect } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap'; 
import { useParams } from 'react-router-dom';
import AllActor from './AllActor'; 
import Footer from "./Footer/Footer";

const DetailPage = () => {
    const { id } = useParams();
    const [movie, setMovie] = useState(null);
    const [comments, setComments] = useState([]); 
    const [newComment, setNewComment] = useState({
        user: '',
        rating: 1,
        text: ''
    });
    
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewComment({ ...newComment, [name]: value });
    };
    
    const handleCommentSubmit = (e) => {
        e.preventDefault();
    
        const newReview = {
            user: newComment.user,
            rating: newComment.rating,
            text: newComment.text,
            date: new Date().toLocaleDateString()
        };
    
        // Simpan review di state lokal
        setComments([...comments, newReview]);
        
        // Reset form setelah submit
        setNewComment({
            user: '',
            rating: 1,
            text: ''
        });
    };    

    useEffect(() => {
        // Ambil data film dari API
        fetch(`http://localhost:5000/api/movies/${id}`)
            .then((res) => res.json())
            .then((data) => {
                console.log(data); // Cek data yang diterima dari API
                setMovie(data); // Data film, aktor, genre, review
                setComments(data.reviews); // Isi review dari response API
            })
            .catch((err) => console.error('Error fetching movie:', err));
    }, [id]);

    const getEmbedUrl = (url) => {
        const videoId = url.split('v=')[1]; 
        return `https://www.youtube.com/embed/${videoId}`; 
    };
      
    if (!movie) {
        return <h2>Loading...</h2>; 
    }

    return (
        <div className="myDP">
            <Container className="text-white">
                <Row>
                    <Col md={4} className="d-flex justify-content-center align-items-start mt-5">
                        <img
                            src={movie.poster} 
                            style={{ width: '300px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }}
                            alt="Movie Poster"
                        />
                    </Col>
                    <Col md={8}>
                        <div style={{ marginTop: '50px' }}>
                            <h1 style={{ fontSize: '35px', fontFamily: "'Bebas Neue', sans-serif", color: 'white' }}>{movie.title}</h1>

                            <div style={{ marginTop: '30px' }}>
                                <strong>Synopsis:<br /> </strong>{movie.synopsis}
                            </div>
                            <div style={{ marginTop: '10px' }}>
                                <strong>Year: </strong>{movie.year}
                            </div>
                            <div style={{ marginTop: '10px' }}>
                                <strong>Genre: </strong>{movie.genres.join(', ')} 
                            </div>
                            <div style={{ marginTop: '10px' }}>
                                <strong>Rating: </strong>{movie.rating}
                            </div>
                            <div style={{ marginTop: '10px' }}>
                                <strong>Status: </strong>{movie.status}
                            </div>
                            <div style={{ marginTop: '10px' }}>
                                <strong>Country: </strong>{movie.countries ? movie.countries.join(', ') : 'Tidak ada negara terkait'}
                            </div>
                        </div>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col md={12}>
                        <h2 className="review-title mb-4">Trailer</h2>
                        <div style={{ width: "100%", height: "400px" }}>
                            <iframe
                                width="100%"
                                height="100%"
                                src={getEmbedUrl(movie.trailer)}
                                title="Movie Trailer"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen
                            ></iframe>
                        </div>
                    </Col>
                </Row>

                <Row className="mt-5">
                    <Col md={12}>
                        <h2 className="review-title mb-4">Actors</h2>
                        {movie.actors && movie.actors.length > 0 ? (
                            <AllActor actors={movie.actors} />
                        ) : (
                            <p>Belum ada aktor yang terkait.</p> 
                        )}
                    </Col>
                </Row>

                {/* Bagian Review */}
                <Row className="mt-5">
                    <Col md={12}>
                        <h2 className="review-title mb-4">Reviews</h2> 
                        {comments && comments.length > 0 ? (
                            comments.map((review, index) => (
                                <div key={index} style={{
                                    marginBottom: "10px", 
                                    color: '#cccccc',
                                    backgroundColor: review.isNew ? '#333333' : 'transparent', 
                                    padding: review.isNew ? '10px' : '0',
                                    border: review.isNew ? '2px solid #FFD700' : 'none'
                                }}>
                                    <strong style={{ color: "white" }}>{review.user || review.author}</strong> - {review.date || 'N/A'}
                                    <br />
                                    {review.text || review.content}
                                    <br />
                                    <span style={{ color: "gold" }}>{'★'.repeat(review.rating)}</span>
                                </div>
                            ))
                        ) : (
                            <p>Belum ada review.</p>
                        )}
                    </Col>
                </Row>

                {/* Tambah Review */}
                <Row className="mb-4 mt-4">
                    <Col md={12}>
                        <div className="bg-dark text-white p-3 mb-4">
                            <h4 className='mb-4'>Add Your Review!</h4>
                            <Form onSubmit={handleCommentSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter Your Name" 
                                        name="user"
                                        value={newComment.user}
                                        onChange={handleInputChange} 
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicRating">
                                    <Form.Label>Rating</Form.Label>
                                    <Form.Control 
                                        as="select"
                                        name="rating"
                                        value={newComment.rating}
                                        onChange={handleInputChange}>
                                        {[1, 2, 3, 4, 5].map(star => (
                                            <option key={star} value={star}>{star} Star</option>
                                        ))} 
                                    </Form.Control>
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicThoughts">
                                    <Form.Label>Your Review</Form.Label>
                                    <Form.Control 
                                        as="textarea" 
                                        rows={3} 
                                        name="text"
                                        value={newComment.text}
                                        onChange={handleInputChange} 
                                    />
                                </Form.Group>

                                <Button variant="warning" type="submit">
                                    Submit
                                </Button>
                            </Form>
                        </div>
                    </Col>
                </Row>

                <Footer/>
            </Container>
            
        </div>
    );
};

export default DetailPage;
