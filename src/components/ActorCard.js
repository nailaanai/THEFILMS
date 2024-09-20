import { Card, Col } from "react-bootstrap";
import "../style/ActorCard.css";

const ActorCard = ({ image, name }) => {
    return (
        <Col md="auto" className="mb-2">
            <Card className="text-white text-center actor-card" style={{ border: 'none', background: 'transparent' }}>
                <Card.Img variant="top" src={image} className="actor-img" />
                <Card.Body>
                    <Card.Title style={{ color: 'white', fontSize: '16px', textAlign: 'center' }}>{name}</Card.Title>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ActorCard;
