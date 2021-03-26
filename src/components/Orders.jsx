import React, { Component, Fragment } from 'react';
import OrderCard from './order/orderCard'
import '../assets/css/order.css'

const axios = require('axios');
class Orders extends Component {
    constructor() {
        super()
        this.state = {
            orders: [],
        }
    }
    componentDidMount() {
        this.props.editLoading(true)
        axios.get('https://605cf7f76d85de00170db614.mockapi.io/api/test/orders')
            .then(res => {
                this.setState({ orders: res.data })
                this.props.editLoading(false)
            })
    }
    render() {
        console.log(this.state.orders)
        return (
            <Fragment>
                <div className="orders">
                    <div>
                        <h2 className="title">سفارشات</h2>
                    </div>
                    <div className="orders-wraper">
                        {this.state.orders.map((order, index) => {
                            return (
                                <div key={'index-' + index} className="order">
                                    <OrderCard order={order} />
                                </div>
                            )
                        })}
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Orders;