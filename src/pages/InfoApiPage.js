import React, { Component } from 'react';
import { Container, Row, Col} from 'reactstrap';
import ReactJSON from 'react-json-view';
import { withRouter } from "react-router";
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar'

class InfoApiPage extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                name: PropTypes.string
            })
        }).isRequired
    };

    render () {
        return (
            <div> 
                <NavBar />
                <Container>
                    <Row>
                        <Col>
                            <ReactJSON src=""/>
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default withRouter(InfoApiPage)