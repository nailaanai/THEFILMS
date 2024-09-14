import { Card, Col } from "react-bootstrap";

const ActorCard = ({ image, name }) => {
    return (
        <Col md={1} className="mb-2">
            <Card className="text-white text-center actorIMG" style={{ border: 'none', background: 'transparent' }}>
                <Card.Img variant="top" src={image} className="actor-img" style={{ borderRadius: '10px' }} />
                <div className="overlay-text" style={{ position: 'absolute', bottom: '0', background: 'rgba(0, 0, 0, 0.7)', width: '100%', textAlign: 'center' }}>
                    <Card.Text style={{ margin: 2, background: 'transparent' }}>{name}</Card.Text>
                </div>
            </Card>
        </Col>
    );
};

export default ActorCard;
