import React, { Component } from 'react';
import { Container, Row, Col } from 'reactstrap';
import ReactJSON from 'react-json-view';
import axios from 'axios';
import { withRouter } from "react-router";
import PropTypes from 'prop-types';
import listApi from '../ListApi';
import NavBar from '../components/NavBar'

class InfoApiPage extends Component {
    static propTypes = {
        match: PropTypes.shape({
            params: PropTypes.shape({
                name: PropTypes.string
            })
        }).isRequired
    };

    state = {
        data: {},
    }

    componentDidMount() {
        const api = listApi.filter(api => api.name === this.props.match.params.name)
        axios.get(api[0].apiPath)
            .then((response) => {
                // handle success
                this.setState({
                    data: response.data,
                });
                console.log(response);
            })
            .catch(function (error) {
                // handle error
                console.log(error);
            })

    }

    render() {
        return (
            <div>
                <NavBar />
                <Container>
                    <Row>
                        <Col>
                            <ReactJSON src={this.state.data} />
                        </Col>
                    </Row>
                </Container>
            </div>
        )
    }
}

export default withRouter(InfoApiPage)