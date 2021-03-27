import React, { Component, Fragment } from 'react';
import { Scrollbars } from 'react-custom-scrollbars';


class OrderCard extends Component {
    constructor(props) {
        super(props)
        this.state = {
            order_status: '',
        }
    }
    render() {
        return (
            <Fragment>
                <div className="orderCard" onClick={() => { this.setState({ openPopUP: !this.state.openPopUP }) }}>
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
                                    <span>
                                        {(this.props.order.order_status === 0) ? 'ثبت شده' : ''}
                                        {(this.props.order.order_status === 1) ? 'در حال آماده سازی' : ''}
                                        {(this.props.order.order_status === 2) ? 'ارسال توسط پیک' : ''}
                                        {(this.props.order.order_status === 3) ? 'تحویل داده شده' : ''}
                                        {(this.props.order.order_status === 4) ? 'لغو شده' : ''}
                                    </span>
                                </div>
                            </div>
                            <div className="status">
                                <span className="order-title">: جزئیات پرداخت</span>
                                <div className="order-wraper">
                                    <span> نحوه پرداخت : {(this.props.order.payment_method) ? 'آنلاین' : 'در محل '}
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