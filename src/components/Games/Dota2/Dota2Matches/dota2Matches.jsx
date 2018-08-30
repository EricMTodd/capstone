import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';


class Dota2Matches extends Component {
    render() {
        const matches = this.props.matches.matches;
        console.log("matches:", matches);
        return(
            <Container>
                <Row>
                    <Col>
                        <h1>This is the dota2Matches Container!</h1>
                    </Col>
                </Row>
            </Container>
        )
    }
}


export default Dota2Matches