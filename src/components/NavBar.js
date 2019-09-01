import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrentUser } from '../redux/actions/users';
import { Collapse, Navbar, NavbarToggler, NavbarBrand, Nav, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';

class NavBar extends Component {
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
        isOpen: false,
    };
    toggle = () => {
        this.setState({
            isOpen: !this.state.isOpen
        });
    }
    onClick = (id) => {
        console.log("choosen id:" + id)
        this.props.dispatch(getCurrentUser(id));
    }
    render() {
        const { users } = this.props;
        console.log(users)
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand >Dashboard Test</NavbarBrand>
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    Users
                                </DropdownToggle>
                                <DropdownMenu right>
                                    {users && users.map(user => (
                                        <DropdownItem key={user.id} onClick = {() => this.onClick(user.id)}>
                                            {`${user.name} ${user.secondName}`}
                                        </DropdownItem>))
                                    }
                                </DropdownMenu>
                            </UncontrolledDropdown>
                        </Nav>
                    </Collapse>
                </Navbar>
            </div>
        );
    }
}

function mapStateToProps(state) {
    const {users} = state.pages; 
    return { 
        users: users.users,
        currenUser: users.currenUser}
}
export default connect(mapStateToProps)(NavBar)