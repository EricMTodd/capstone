import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import Games from '../Games/games.jsx';



class LandingPage extends Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <div>
                            <h1>Welcome to fragtrak</h1>
                            <p>fragtrak houses details of your favorite esports so you're never out of the loop.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>
                            <p>This is a list of games. You can click on any one of them to see what tournaments are available.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>
                            <Games />
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    };
};


export default LandingPage;