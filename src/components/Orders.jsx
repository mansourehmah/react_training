import React, { Component, Fragment } from 'react';
import OrderCard from './order/orderCard'
import '../assets/css/order.css'
import PopUp from './order/popUp'
import FontAwesome from 'react-fontawesome'
import Filter from './order/filrer'

const axios = require('axios');
class Orders extends Component {
    constructor() {
        super()
        this.state = {
            orders: [],
            index: null,
            openPopUP: false,
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

    updateData = (val) => {
        this.setState({ orders: val })
    }

    handlePopUp = (index) => {
        this.setState({ index: index, openPopUP: !this.state.openPopUP })
    }
    closePopUp = () => {
        this.setState({ openPopUP: !this.state.openPopUP })
    }
    render() {
        return (
            <Fragment>
                <div className="orders">
                    <div>
                        <h2 className="title">سفارشات</h2>
                    </div>
                    <Filter orders={this.state.orders}/>
                    <div className="orders-wraper">
                        {this.state.orders.map((order, index) => {
                            return (
                                <div key={'index-' + index} className="order">
                                    <FontAwesome
                                        onClick={() => this.handlePopUp(index)}
                                        id="order-edit-icon"
                                        name="edit"
                                        size="2x"
                                    />
                                    <OrderCard order={order} />
                                </div>
                            )
                        })}
                        {(this.state.openPopUP) ? <PopUp editLoading={this.props.editLoading} updateData={this.updateData} closePopUp={this.closePopUp} order={this.state.orders[this.state.index]} /> : ''}
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Orders;