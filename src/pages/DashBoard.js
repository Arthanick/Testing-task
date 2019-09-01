import React, { Component } from 'react';
import { Col, Row, Container } from 'reactstrap';
import NavBar from '../components/NavBar';
import ApiCard from "../components/ApiCard";
import listApi from "../ListApi";

export default class Dashboard extends Component {
    render() {
        const apis = listApi.sort(() => 0.5 - Math.random()).slice(0,4)
        return (
            <div>
                <NavBar />
                <Container className="App-header">
                    <Row>
                        <Col xs="12" md="6" lg="6"><ApiCard {...apis[0]} /></Col>
                        <Col xs="12" md="6" lg="6"><ApiCard {...apis[1]} /></Col>
                    </Row>
                    <Row>
                        <Col xs="12" md="6" lg="6"><ApiCard {...apis[2]} /></Col>
                        <Col xs="12" md="6" lg="6"><ApiCard {...apis[3]} /></Col>
                    </Row>
                </Container>
            </div>
        )
    }
}