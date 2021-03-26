import React, { Component, Fragment } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';

class OrderCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            order_status: '',
            payment_method: ''
        }
    }
    componentDidMount() {
        switch (this.props.order.order_status) {
            case 0: this.setState({ order_status: 'ثبت شده' }); break;
            case 1: this.setState({ order_status: 'در حال آماده سازی' }); break;
            case 2: this.setState({ order_status: 'ارسال توسط پیک' }); break;
            case 3: this.setState({ order_status: 'تحویل داده شده' }); break;
            case 4: this.setState({ order_status: 'لغو شده' }); break;
        }
    }
    render() {
        console.log(this.state.order_status)
        return (
            <Fragment>
                <div className="orderCard">
                    <Scrollbars style={{ width: 300, height: 300 }}>
                        <div className="wraper">
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
                            <div className="info">
                                <span className="order-title">: مشخصات مشتری</span>
                                <div className="order-wraper">
                                    <span>نام : {this.props.order.name}</span>
                                    <span>شماره تماس : {this.props.order.phone}</span>
                                    <span>آدرس: {this.props.order.address}</span>
                                </div>
                            </div>
                            <div className="status">
                                <span className="order-title">: وضعیت</span>
                                <div className="order-wraper">
                                    <span>{this.state.order_status}</span>
                                </div>
                            </div>
                            <div className="status">
                                <span className="order-title">: جزئیات پرداخت</span>
                                <div className="order-wraper">
                                    <span> نحوه پرداخت : {(this.props.order.payment_method) ? 'در محل' : 'آنلاین '}
                                    </span>
                                    <span> وضعیت پرداخت : {(this.props.order.payment_status) ? 'پرداخت شده ' : 'پرداخت نشده'}
                                    </span>
                                </div>
                            </div>
                        </div>
                    </Scrollbars>
                </div>
            </Fragment>
        );
    }
}

export default OrderCard;