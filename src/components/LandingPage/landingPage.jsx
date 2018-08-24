import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';



class LandingPage extends Component {
    constructor() {
        super()
        this.state = {
            "games": [],
            "tournaments": [],
            "matches": [],
            "teams": [],
            "players": []
        }
    }
    render() {
        return (
            <Container>
                <Row>
                    <Col>
                        <div>
                            <h1>Welcome to fragtrak</h1>
                            <p>fragtrak tracks all the details of your favorite esports in real time, so you're never out of the loop.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>
                            <p>This is a list of games we have live updates for. You can click on any one of them to see what tournaments are available.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>
                            <Link to="/games" >GamesList</Link>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>
                            <p>This is a list of tournaments we have live updates for. You can click on any one of them to see what matches are available.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>
                            <Link to="/tournaments" >TournamentsList</Link>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>
                            <p>This is a list of matches we have live updates for. You can click on any one of them to see what teams are available.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>
                            <Link to="/matches" >MatchesList</Link>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>
                            <p>This is a list of teams we have live updates for. You can click on any one of them to see what players are on that team.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>
                            <Link to="teams" >TeamsList</Link>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>
                            <p>This is a list of players we have live updates for. You can click on any one of them to see their specific stats.</p>
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <div>
                            <Link to="players" >PlayersList</Link>
                        </div>
                    </Col>
                </Row>
            </Container>
        );
    };
};


export default LandingPage;