import React, {Component} from 'react';
import { Form, FormGroup, Label, Input, Container, Row, Col, Button} from 'reactstrap';

export default class LoginPage extends Component {
    state = {
        login: "", 
        password: "",
    }

    onClick = () => {
        localStorage.setItem("Token", this.state.password + this.state.login)
    }

    onChangeLogin = (event) => {
        event.preventDefault();
        const value = event.target.value;
        this.setState({
            login: value,
        });
    }
    
    onChangePass = (event) => {
        event.preventDefault();
        const value = event.target.value;
        this.setState({
            password: value,
        });
    }
    render(){
        return (
            <Container>
                <Row>
                    <Col sm-offset="4">
                        <Form>
                            <FormGroup>
                                <Label for="exampleEmail">Email</Label>
                                <Input type="email" name="email" id="exampleEmail" placeholder="Enter @email" onChange = {this.onChangeLogin}/>
                            </FormGroup>
                            <FormGroup>
                                <Label for="examplePassword">Password</Label>
                                <Input type="password" name="password" id="examplePassword" placeholder="Enter password" onChange = {this.onChangePass}/>
                            </FormGroup>
                            <Button color="primary" onClick = {this.onClick}> Login</Button> 
                        </Form>
                    </Col>
                </Row>
            </Container>)
    };
  }