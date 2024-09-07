import { Card, Col, Container, Row, Image } from "react-bootstrap"
import IMG1 from "../assets/dune.jpg"
import IMG2 from "../assets/everything.jpg"
import IMG3 from "../assets/infinite.jpg"
import IMG4 from "../assets/joker.jpg"
import IMG5 from "../assets/lightyear.jpg"
import IMG6 from "../assets/morbius.jpg"

const Home = () => {
    return (
        <div style={{ fontSize: '14px' }}>
            <Container>
                <br />
                    <h1 className="text-white" style={{ fontSize: '28px' }}>TRENDING MOVIES</h1>
                <br />
                <Row className="justify-content-center">
                    <Col md={3} className="movieIMG" id="home">
                        <Card className="movieIMG">
                            <Image src={IMG1} alt="POSTER" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Link href="#DetailPage" className="card-link">
                                        <Card.Title className="text-left text-warning" >My Hero Academia</Card.Title>
                                    </Card.Link>
                                    {/* <Card.Text className="text-left">
                                        2024
                                    </Card.Text> */}
                                    <Card.Text className="text-left">
                                        Drama,Thriller,Sci-fi
                                    </Card.Text>
                                    <Card.Text className="text-right">
                                        ⭐ 8.5 | 19 views | 2024
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={3} className="movieIMG">
                        <Card className="movieIMG">
                            <Image src={IMG2} alt="POSTER" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Link href="#DetailPage" className="card-link">
                                        <Card.Title className="text-left text-warning" >My Hero Academia</Card.Title>
                                    </Card.Link>
                                    {/* <Card.Text className="text-left">
                                        2024
                                    </Card.Text> */}
                                    <Card.Text className="text-left">
                                        Drama,Thriller,Sci-fi
                                    </Card.Text>
                                    <Card.Text className="text-right">
                                        ⭐ 8.5 | 19 views | 2024
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={3} className="movieIMG">
                        <Card className="movieIMG">
                            <Image src={IMG3} alt="POSTER" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Link href="#DetailPage" className="card-link">
                                        <Card.Title className="text-left text-warning" >My Hero Academia</Card.Title>
                                    </Card.Link>
                                    {/* <Card.Text className="text-left">
                                        2024
                                    </Card.Text> */}
                                    <Card.Text className="text-left">
                                        Drama,Thriller,Sci-fi
                                    </Card.Text>
                                    <Card.Text className="text-right">
                                        ⭐ 8.5 | 19 views | 2024
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={3} className="movieIMG">
                        <Card className="movieIMG">
                            <Image src={IMG4} alt="POSTER" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Link href="#DetailPage" className="card-link">
                                        <Card.Title className="text-left text-warning" >My Hero Academia</Card.Title>
                                    </Card.Link>
                                    {/* <Card.Text className="text-left">
                                        2024
                                    </Card.Text> */}
                                    <Card.Text className="text-left">
                                        Drama,Thriller,Sci-fi
                                    </Card.Text>
                                    <Card.Text className="text-right">
                                        ⭐ 8.5 | 19 views | 2024
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={3} className="movieIMG">
                        <Card className="movieIMG">
                            <Image src={IMG5} alt="POSTER" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Link href="#DetailPage" className="card-link">
                                        <Card.Title className="text-left text-warning" >My Hero Academia</Card.Title>
                                    </Card.Link>
                                    {/* <Card.Text className="text-left">
                                        2024
                                    </Card.Text> */}
                                    <Card.Text className="text-left">
                                        Drama,Thriller,Sci-fi
                                    </Card.Text>
                                    <Card.Text className="text-right">
                                        ⭐ 8.5 | 19 views | 2024
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                    <Col md={3} className="movieIMG">
                        <Card className="movieIMG">
                            <Image src={IMG6} alt="POSTER" className="images"/>
                            <div className="bg-dark">
                                <div className="p-2 m-1 text-white">
                                    <Card.Link href="#DetailPage" className="card-link">
                                        <Card.Title className="text-left text-warning" >My Hero Academia</Card.Title>
                                    </Card.Link>
                                    {/* <Card.Text className="text-left">
                                        2024
                                    </Card.Text> */}
                                    <Card.Text className="text-left">
                                        Drama,Thriller,Sci-fi
                                    </Card.Text>
                                    <Card.Text className="text-right">
                                        ⭐ 8.5 | 19 views | 2024
                                    </Card.Text>
                                </div>
                            </div>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}

export default Home