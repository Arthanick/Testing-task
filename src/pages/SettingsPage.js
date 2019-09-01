import React, {Component} from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input} from 'reactstrap';

export default class SettingsPage extends Component {
    state = {
        modal: false,
        user: {
            name: "",
            secondName: "",
            bitrhDate: "",
            about: "",
        },
    }

    toggle = () => {
        this.setState(prevState => ({
          modal: !prevState.modal,
          user: {
            name: "",
            secondName: "",
            bitrhDate: "",
            about: "",
        }
        }));
    }

    onSave = () => {
        console.log(this.state.user)
        this.toggle()
    }

    onChangeName = (event) => {
        event.preventDefault();
        this.setState({
            user:{
                ...this.state.user, 
                name: event.target.value
            },
        });
    }

    onChangeSecondName = (event) => {
        event.preventDefault();
        this.setState({
            user:{
                ...this.state.user, 
                secondName: event.target.value
            },
        });
    }

    onChangeDate = (event) => {
        event.preventDefault();
        this.setState({
            user:{
                ...this.state.user, 
                bitrhDate: event.target.value
            },
        });
    }

    onChangeAbout = (event) => {
        event.preventDefault();
        this.setState({
            user:{
                ...this.state.user, 
                about: event.target.value
            },
        });
    }
    
    render() {
        return (
          <div className="App-header">
            <Button color="danger" onClick={this.toggle}>{this.props.buttonLabel} Add User</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className={this.props.className}>
                <ModalHeader toggle={this.toggle}>New User</ModalHeader>
                <ModalBody>
                    <Form>
                        <FormGroup>
                            <Label for="exampleEmail">Name</Label>
                            <Input name="name" id="exampleEmail" placeholder="Enter your name" onChange = {this.onChangeName}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="examplePassword">Second Name</Label>
                            <Input name="secondName" id="examplePassword" placeholder="Enter your second name" onChange = {this.onChangeSecondName}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleDate">Add Birth Date</Label>
                            <Input type="date" name="date" id="exampleDate" onChange = {this.onChangeDate}/>
                        </FormGroup>
                        <FormGroup>
                            <Label for="exampleAbout">About</Label>
                            <Input type="textarea" name="about" id="exampleAbout" placeholder="Enter something about you" onChange = {this.onChangeAbout}/>
                        </FormGroup>
                    </Form>
                </ModalBody>
                <ModalFooter>
                    <Button color="primary" onClick={this.onSave}>Add</Button>{' '}
                    <Button color="secondary" onClick={this.toggle}>Cancel</Button>
                </ModalFooter>
            </Modal>
          </div>
        );
      }
}