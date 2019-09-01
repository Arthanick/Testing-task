import React, { Component } from 'react';
import { Button, Row, Col } from 'reactstrap';
import PropTypes from 'prop-types';
import NavBar from '../components/NavBar'
import UserForm from '../userForm'
import { connect } from 'react-redux';
import { newUser, editUser } from '../redux/actions/users';

class SettingsPage extends Component {
    static propTypes = {
        dispatch: PropTypes.func,
        users: PropTypes.arrayOf(PropTypes.object),
        currentUser: PropTypes.number,
    };

    static defaultProps = {
        dispatch: () => { },
        users: [],
        currentUser: null,
    };

    state = {
        modal: false,
        isEdit: false,
    }

    toggle = () => {
        this.setState(prevState => ({
            modal: !prevState.modal,
            user: {
                name: "",
                secondName: "",
                birthDate: "",
                about: "",
            },
            isEdit: false,
        }));
    }

    onSave = (user) => {
        this.props.dispatch(newUser(user));
        this.toggle()
    }

    onEdit = (user, id) => {
        this.props.dispatch(editUser({...user, id}));
        this.toggle()
    }

    onModalEdit = () => {
        this.toggle()
        this.setState({isEdit:true})
    }

    render() {
        return (
            <div>
                <NavBar />
                <div className="App-header">
                    <Row>
                        <Col xs="4">
                            <Button color="primary" onClick={this.toggle}> Add User</Button>
                        </Col>
                        <Col xs="4">
                            <Button color="danger" onClick={this.onModalEdit} disabled={!this.props.currentUser}> Edit User</Button>
                        </Col>
                    </Row>
                    <UserForm 
                        modal={this.state.modal} 
                        onSave={this.onSave} 
                        toggle={this.toggle} 
                        user={this.props.users[this.props.currentUser - 1]} 
                        isEdit={this.state.isEdit} 
                        onEdit={this.onEdit}
                        />
                </div>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const { users } = state.pages;
    return {
        users: users.users,
        currentUser: users.currentUser
    }
}

export default connect(mapStateToProps)(SettingsPage)