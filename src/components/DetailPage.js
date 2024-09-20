import { useState } from 'react';
import { Container, Row, Col, Form, Button } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import cards_data from '../../src/components/CardData'; // Import data movie
import ActorData from '../../src/components/ActorData';  // Import ActorData
import ActorCard from './ActorCard'; 

const DetailPage = () => {
    const { id } = useParams(); // Ambil ID dari URL
    const movie = cards_data.find((card) => card.id === parseInt(id)); // Temukan movie berdasarkan ID

    const [comments, setComments] = useState(movie.comments || []); // State untuk menyimpan komentar
    const [newComment, setNewComment] = useState({
        user: '',
        text: '',
        rating: 1,
        date: new Date().toLocaleDateString()
    }); // State untuk komentar baru

    if (!movie) {
        return <h2>Movie not found</h2>; // Jika movie tidak ditemukan
    }

    // Data aktor
    const actors = movie.actors.map(actorId => ActorData.find(actor => actor.id === actorId));

    // Fungsi untuk handle submit komentar
    const handleCommentSubmit = (e) => {
        e.preventDefault();
        setComments([...comments, newComment]); // Tambahkan komentar baru ke state
        setNewComment({
            user: '',
            text: '',
            rating: 1,
            date: new Date().toLocaleDateString()
        }); // Reset form setelah submit
    };

    // Fungsi untuk mengupdate nilai input form
    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setNewComment(prevComment => ({
            ...prevComment,
            [name]: value
        }));
    };

    // Fungsi untuk menampilkan bintang sesuai rating
    const renderStars = (rating) => {
        let stars = '';
        for (let i = 0; i < rating; i++) {
            stars += '★';
        }
        for (let i = rating; i < 5; i++) {
            stars += '☆';
        }
        return stars;
    };

    return (
        <div className="myDP">
            <Container className="text-white">
                {/* Trailer dan informasi film */}
                <Row>
                    <Col md={4} className="d-flex justify-content-center align-items-start mt-5">
                        <img 
                            src={movie.image} 
                            style={{ width: '300px', borderRadius: '10px', boxShadow: '0 4px 8px rgba(0,0,0,0.2)' }} 
                            alt="Movie Poster"
                        />
                    </Col>
                    <Col md={8}>
                        <div style={{ marginTop: '30px' }}>
                            <h1 style={{ fontSize: '35px', fontFamily: 'Georgia, serif', color: 'white' }}>{movie.name}</h1>
                            <div style={{ marginTop: '10px' }}>
                                <strong>Other titles: </strong>{movie.otherTitles}
                            </div>
                            <div style={{ marginTop: '10px' }}>
                                <strong>Year: </strong>{movie.year}
                            </div>
                            <div style={{ marginTop: '10px' }}>
                                <strong>Synopsis: </strong>{movie.synopsis}
                            </div>
                            <div style={{ marginTop: '10px' }}>
                                <strong>Genre: </strong>{movie.genre}
                            </div>
                            <div style={{ marginTop: '10px' }}>
                                <strong>Rating: </strong>{movie.rating}
                            </div>
                            <div style={{ marginTop: '10px' }}>
                                <strong>Availability: </strong>{movie.availability}
                            </div>
                        </div>
                    </Col>
                </Row>

                {/* Actor Cards */}
                <Row className="g-3 mt-5 justify-content-center">
                    {actors.map((actor, index) => (
                        <ActorCard key={index} image={actor.image} name={actor.name} />
                    ))}
                </Row>

                {/* Menampilkan Komentar dari User */}
                <Row className="mt-5">
                    <Col md={12}>
                        <h3>Comments</h3>
                        {comments.length > 0 ? (
                            comments.map((comment, index) => (
                                <div key={index} style={{ marginBottom: '10px', color: '#cccccc' }}>
                                    <strong style={{ color: 'white' }}>{comment.user}</strong> - {comment.date}
                                    <br />
                                    {comment.text}
                                    <br />
                                    {/* Menampilkan rating dengan simbol bintang */}
                                    <span style={{ color: 'gold' }}>{renderStars(comment.rating)}</span>
                                </div>
                            ))
                        ) : (
                            <p>No comments yet.</p>
                        )}
                    </Col>
                </Row>

                {/* Tambahkan Ulasan Anda */}
                <Row className="mb-4">
                    <Col md={12}>
                        <div className="bg-dark text-white p-3 mb-4">
                            <h4>Add your review!</h4>
                            <Form onSubmit={handleCommentSubmit}>
                                <Form.Group className="mb-3" controlId="formBasicName">
                                    <Form.Label>Name</Form.Label>
                                    <Form.Control 
                                        type="text" 
                                        placeholder="Enter name" 
                                        name="user"
                                        value={newComment.user}
                                        onChange={handleInputChange} 
                                    />
                                </Form.Group>

                                <Form.Group className="mb-3" controlId="formBasicRating">
                                    <Form.Label>Rate</Form.Label>
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
                                    <Form.Label>Your thoughts</Form.Label>
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
            </Container>
        </div>
    );
};

export default DetailPage;
