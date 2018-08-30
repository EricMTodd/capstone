import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';


class OverwatchMatches extends Component {
    render() {
        const matches = this.props.matches.matches;
        console.log("matches:", matches);
        return(
            <Container>
                <Row>
                    <Col>
                        <h1>This is the OverwatchMatches Container!</h1>
                    </Col>
                </Row>
            </Container>
        )
    }
}


export default OverwatchMatches