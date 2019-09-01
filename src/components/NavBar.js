import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { getCurrentUser } from '../redux/actions/users';
import { Collapse, Navbar, NavbarToggler, Nav, NavItem, NavLink, UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { withRouter } from "react-router";

class NavBar extends Component {
    static propTypes = {
        dispatch: PropTypes.func,
        users: PropTypes.arrayOf(PropTypes.object),
        currentUser: PropTypes.number,
        history: PropTypes.object.isRequired,
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
        this.props.dispatch(getCurrentUser(id))
        this.props.history.push(`/dashboards`);
    }
    logout = () => {
        localStorage.removeItem('Token');
    }
    render() {
        const { users, currentUser } = this.props;
        console.log(users[currentUser - 1], currentUser)
        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarToggler onClick={this.toggle} />
                    <Collapse isOpen={this.state.isOpen} navbar>
                        <Nav className="ml-auto" navbar>
                            <NavItem>
                                <NavLink href="/dashboards">To dashboards</NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink href="/settings">To settings</NavLink>
                            </NavItem>
                            <UncontrolledDropdown nav inNavbar>
                                <DropdownToggle nav caret>
                                    {(currentUser && users[currentUser - 1].name) || "Choose User"}
                                </DropdownToggle>
                                <DropdownMenu right>
                                    {users && users.map(user => (
                                        <DropdownItem key={user.id} onClick={() => this.onClick(user.id)}>
                                            {`${user.name} ${user.secondName}`}
                                        </DropdownItem>))
                                    }
                                    <DropdownItem divider />
                                    <DropdownItem href="/" onClick={this.logout}>Logout</DropdownItem>
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
    const { users } = state.pages;
    return {
        users: users.users,
        currentUser: users.currentUser
    }
}

export default withRouter(connect(mapStateToProps)(NavBar))