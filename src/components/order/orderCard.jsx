import React, { Component, Fragment } from 'react';

class OrderCard extends Component {
    state = {}
    render() {
        return (
            <Fragment>
                <div className="orderCard">
                    <div className="orderList">
                        <span className="orderList-title"> : محصولات سفارش داده شده</span>
                        <div className="orderList-wraper">
                            {this.props.order.orderList.map((order, index) => {
                                return (
                                    <span key={'orderlist-' + index}>
                                        {order}
                                    </span>
                                )
                            })}
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default OrderCard;