import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { Card, CardImg, CardBody, CardTitle, CardSubtitle, } from 'reactstrap';
import { withRouter } from "react-router";


class ApiCard extends Component {
    static propTypes = {
        name: PropTypes.string.isRequired,
        icon: PropTypes.string.isRequired,
        desc: PropTypes.string.isRequired,
        history: PropTypes.object.isRequired
    };
    onClick = (name) => {
        this.props.history.push(`/api/${name}`)
    };
    
    render() {
        const {name, icon, desc,} = this.props
        return (
            <div>
                <Card className="Api-card" onClick={() => this.onClick(name)}>
                    <CardImg top width="100%" src={icon} alt="Card image cap" />
                    <CardBody>
                        <CardTitle>{name || "ASDASDASD"}</CardTitle>
                        <CardSubtitle>{desc || "UIJASFDHJKS"}</CardSubtitle>
                    </CardBody>
                </Card>
            </div>)
    };
}

export default withRouter(ApiCard)