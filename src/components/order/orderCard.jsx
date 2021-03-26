import React, { Component, Fragment } from 'react';

class OrderCard extends Component {
    state = {}
    render() {
        return (
            <Fragment>
                <div className="orderCard">
                    <div className="orderList">
                        <span className="order-title"> : محصولات سفارش داده شده</span>
                        <div className="order-wraper">
                            {this.props.order.orderList.map((order, index) => {
                                return (
                                    <span key={'orderlist-' + index}>
                                        {order}
                                    </span>
                                )
                            })}
                        </div>
                    </div>
                    <div className="time">
                        <span className="order-title">: زمان ثبت سفارش</span>
                        <div className="order-wraper">
                            <span>ساعت : {this.props.order.time}</span>
                            <span>تاریخ : {this.props.order.date}</span>
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default OrderCard;