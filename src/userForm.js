import React, { Component } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter, Form, FormGroup, Label, Input } from 'reactstrap';
import PropTypes from 'prop-types';

export default class userForm extends Component {
    static propTypes = {
        modal: PropTypes.bool,
        onSave: PropTypes.func.isRequired,
        toggle: PropTypes.func.isRequired,
        isEdit: PropTypes.bool.isRequired,
        user: PropTypes.object,
    };

    static defaultProps = {
        modal: false,
        user: {},
    };

    state = {
        user: {
            name: "",
            secondName: "",
            birthDate: "",
            about: "",
        },
    }

    onChangeName = (event) => {
        event.preventDefault();
        this.setState({
            user: {
                ...this.state.user,
                name: event.target.value
            },
        });
    }

    onClick = () => {
        if (this.props.isEdit) {
            this.props.onEdit(this.state.user, this.props.user.id);
        }
        else {
            this.props.onSave(this.state.user)
        }
    }

    onChangeSecondName = (event) => {
        event.preventDefault();
        this.setState({
            user: {
                ...this.state.user,
                secondName: event.target.value
            },
        });
    }

    onChangeDate = (event) => {
        event.preventDefault();
        this.setState({
            user: {
                ...this.state.user,
                birthDate: event.target.value
            },
        });
    }

    onChangeAbout = (event) => {
        event.preventDefault();
        this.setState({
            user: {
                ...this.state.user,
                about: event.target.value
            },
        });
    }
    render() {
        const {isEdit, user} = this.props
        return(
        <Modal isOpen={this.props.modal} toggle={this.toggle} className={this.props.className}>
            <ModalHeader toggle={this.toggle}>New User</ModalHeader>
            <ModalBody>
                <Form>
                    <FormGroup>
                        <Label for="exampleEmail">Name</Label>
                        <Input name="name" id="exampleEmail" placeholder="Enter your name" onChange={this.onChangeName} defaultValue={(isEdit && user.name) || ""}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Second Name</Label>
                        <Input name="secondName" id="examplePassword" placeholder="Enter your second name" onChange={this.onChangeSecondName} defaultValue={(isEdit && user.secondName) || ""}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleDate">Add Birth Date</Label>
                        <Input type="date" name="date" id="exampleDate" onChange={this.onChangeDate} defaultValue={(isEdit && user.birthDate) || ""}/>
                    </FormGroup>
                    <FormGroup>
                        <Label for="exampleAbout">About</Label>
                        <Input type="textarea" name="about" id="exampleAbout" placeholder="Enter something about you" onChange={this.onChangeAbout} defaultValue={(isEdit && user.about) || ""}/>
                    </FormGroup>
                </Form>
            </ModalBody>
            <ModalFooter>
                <Button color="primary" onClick= {this.onClick}>
                        {(isEdit && "Save") || "Add"} 
                    </Button>
                <Button color="secondary" onClick={this.props.toggle}>Cancel</Button>
            </ModalFooter>
        </Modal>)
    }
}

