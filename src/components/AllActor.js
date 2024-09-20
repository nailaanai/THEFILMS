import { Container, Row } from 'react-bootstrap';
import ActorCard from './ActorCard';

const AllActor = ({ actors }) => {
  return (
    <Container>
      <Row className="justify-content-center">
        {actors.map((actor, index) => (
          <ActorCard key={index} image={actor.image} name={actor.name} />
        ))}
      </Row>
    </Container>
  );
};

export default AllActor;
