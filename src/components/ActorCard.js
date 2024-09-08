import { Card, Col } from "react-bootstrap";

const ActorCard = ({ image, name }) => {
    return (
        <Col md={1} className="mb-2">
            <Card className="actor-card bg-dark text-white text-center actorIMG">
                <Card.Img variant="top" src={image} className="actor-img" />
                <Card.Body>
                    <Card.Text>{name}</Card.Text>
                </Card.Body>
            </Card>
        </Col>
    );
};

export default ActorCard;
