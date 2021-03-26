import React, { Component, Fragment } from 'react';

class OrderCart extends Component {
    state = {}
    render() {
        return (
            <Fragment>
                <div className="orderCard">{this.props.order.name}</div>
            </Fragment>
        );
    }
}

export default OrderCart;