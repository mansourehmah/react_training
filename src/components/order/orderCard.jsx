import React, { Component, Fragment } from 'react';

class OrderCard extends Component {
    state = {}
    render() {
        return (
            <Fragment>
                <div className="orderCard">{this.props.order.name}</div>
            </Fragment>
        );
    }
}

export default OrderCard;