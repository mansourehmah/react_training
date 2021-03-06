import React, { Component, Fragment } from 'react';
import FontAwesome from 'react-fontawesome';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css'

const axios = require('axios');

class PopUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            orders: this.props.orders,
            order: {
                ...this.props.order,
                order_status: this.props.order.order_status,
                payment_method: this.props.order.payment_method,
                payment_status: this.props.order.payment_status,
            },
            disable: true
        }
    }
    editOrder = (event) => {
        this.setState({
            order: {
                ...this.state.order,
                order_status: Number(event.target.value)
            },
            disable: false
        })
    }
    editMethod = (event) => {
        this.setState({
            order: {
                ...this.state.order,
                payment_method: Boolean(event.target.value === 'true')
            },
            disable: false
        })
    }
    editStatus = (event) => {
        this.setState({
            order: {
                ...this.state.order,
                payment_status: Boolean(event.target.value === 'true')
            },
            disable: false
        })
    }

    mouseHandle = (event) => {
        let x = event.clientX
        let y = event.clientY
        document.getElementById('order-close-icon').style.display = "block"
        document.getElementById('order-close-icon').style.left = x - 5 + 'px'
        document.getElementById('order-close-icon').style.top = y - 5 + 'px'
    }
    mouseLeaveHandle = () => {
        document.getElementById('order-close-icon').style.display = "none"
    }
    filterData = (value) => {
        let trueOrder = null
        this.state.orders.map((order) => {
            if (Number(order.id) === Number(value.id)) {
                trueOrder = value
            }
            return false
        })
        if (trueOrder !== null) {
            return trueOrder
        }
    }
    submite = () => {
        this.props.editLoading(true)
        axios.put(`https://605cf7f76d85de00170db614.mockapi.io/api/test/orders/${this.state.order.id}`, this.state.order)
            .then(() => {
                NotificationManager.success('?????????????? ???? ???????????? ?????????? ????')
                axios.get('https://605cf7f76d85de00170db614.mockapi.io/api/test/orders').then((res) => {
                    let _orders = res.data.filter(this.filterData)
                    this.props.updateDataForFilter(res.data)
                    this.props.updateData(_orders)
                    document.getElementById('filter-btn').click()
                    this.setState({ disable: true })
                    this.props.editLoading(false)
                })
            })
            .catch(() => {
                NotificationManager.error('?????????? ?????? ????????')
                this.props.editLoading(false)
            }
            )
    }

    render() {
        return (
            <Fragment>
                <div className="popUp">
                    <div className="close" id="close" onMouseLeave={this.mouseLeaveHandle} onMouseMove={this.mouseHandle} onClick={this.props.closePopUp}></div>
                    <FontAwesome
                        id="order-close-icon"
                        name="close"
                        size="2x"
                    />
                    <div className="popUp-wraper">
                        <div>
                            <span>
                                ?????????? ?????????? ??????????
                            </span>
                            <select name="status" id="order_status" value={this.state.order.order_status} onChange={this.editOrder}>
                                <option value={0}>?????? ??????</option>
                                <option value={1}>???? ?????? ?????????? ????????</option>
                                <option value={2}>?????????? ???????? ??????</option>
                                <option value={3}>?????????? ???????? ??????</option>
                                <option value={4}>?????? ??????</option>
                            </select>
                        </div>
                        <div>
                            <span>
                                ?????????? ???????? ????????????
                            </span>
                            <label htmlFor="payment_method_true">???????????? ????????????</label>
                            <input type="radio" id="payment_method_true" value='true' checked={this.state.order.payment_method} onChange={this.editMethod} />
                            <label htmlFor="payment_method_false">???????????? ???? ??????</label>
                            <input type="radio" id="payment_method_false" value='false' checked={!this.state.order.payment_method} onChange={this.editMethod} />
                        </div>
                        <div>
                            <span>
                                ?????????? ?????????? ????????????
                            </span>
                            <label htmlFor="payment_status_true"> ???????????? ??????</label>
                            <input type="radio" id="payment_status_true" value='true' checked={this.state.order.payment_status} onChange={this.editStatus} />
                            <label htmlFor="payment_status_false"> ???????????? ????????</label>
                            <input type="radio" id="payment_status_false" value='false' checked={!this.state.order.payment_status} onChange={this.editStatus} />
                        </div>
                        <button disabled={this.state.disable} onClick={this.submite}>?????? ??????????????</button>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default PopUp;