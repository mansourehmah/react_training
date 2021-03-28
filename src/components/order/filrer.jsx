import React, { Component, Fragment } from 'react';
import FontAwesome from 'react-fontawesome'

class Filter extends Component {
    constructor() {
        super()
        this.state = {
            filter: {
                obj: ['0payment_method', '1payment_method', '2order_status', '3order_status', '4order_status', '5order_status', '6order_status', '7payment_status', '8payment_status', '9all'],
                value: [true, false, 0, 1, 2, 3, 4, true, false, true],
                title: ['پرداخت آنلاین',
                    'پرداخت در محل',
                    'سفارشات ثبت شده',
                    'سفارشات در حال آماده سازی',
                    'سفارشات در حال ارسال',
                    'سفارشات ارسال شده',
                    'سفارشات لغو شده',
                    'سفارشات پرداخت شده',
                    'سفارشات پرداخت نشده',
                    'همه محصولات'
                ],
            },
            checked: [false, false, false, false, false, false, false, false, false, false],
            value: [],
            obj: [],
        }
    }
    handleClick = () => {
        document.getElementById('filters-wraper').classList.toggle('active')
    }
    handleChecked = (index) => {
        this.setState(state => {
            let value = []
            let obj = state.obj
            const checked = state.checked.map((item, i) => {
                if (i === index) {
                    //add
                    if (!this.state.checked[index]) {
                        value = [...this.state.value, this.state.filter.value[index]]
                        obj = [...this.state.obj, this.state.filter.obj[index]]
                    }
                    //remove
                    else if (this.state.checked[index]) {
                        obj = state.obj.filter((objitem, objindex) => {
                            if (index !== parseInt(objitem)) {
                                value.push(this.state.value[objindex])
                                return objitem
                            }
                        })
                    }
                    return !this.state.checked[index]
                } else {
                    return item
                }
            })
            return {
                checked, value, obj
            }
        })
    }
    filterOrders = (order, index) => {
        let orders = []
        this.state.obj.map((obj, i) => {
            console.log(obj, this.state.value[i], index)
            switch (true) {
                case (obj.indexOf('order_status') >= 0): if (Number(order.order_status) === this.state.value[i]) orders.push(order); break
                case (obj.indexOf('payment_method') >= 0): if (order.payment_method === this.state.value[i]) orders.push(order); break
                case (obj.indexOf('payment_status') >= 0): if (order.payment_status === this.state.value[i]) orders.push(order); break
                case (obj.indexOf('all') >= 0): orders.push(order); break
            }
        })
        for (let order of orders.values()) {
            return order
        }
    }
    handleFilter = () => {
        console.log(this.state.checked)
        console.log(this.state.obj)
        console.log(this.state.value)
        let orders = this.props.orders_for_filter.filter(this.filterOrders)
        console.log(orders)
        this.props.updateData(orders)
    }

    render() {
        return (
            <Fragment>
                <div className="filters">
                    <div className="filter-btn" onClick={this.handleClick}>
                        <FontAwesome
                            name="filter"
                            size="2x"
                        />
                        <span>فیلتر </span>
                    </div>
                    <div className="filters-wraper" id="filters-wraper">
                        <p>فیلتر کردن سفارشات بر اساس : </p>
                        <div className="filterBox">
                            {this.state.filter.title.map((filter, index) => {
                                return (
                                    <span key={filter}>
                                        <label htmlFor={'filter_' + index}>{filter}</label>
                                        <input
                                            type="checkbox"
                                            id={'filter_' + index}
                                            checked={this.state.checked[index]}
                                            value={this.state.checked[index]}
                                            onChange={() => { this.handleChecked(index) }}
                                        />
                                    </span>
                                )
                            })}
                        </div>
                        <button id="filter-btn" onClick={this.handleFilter}>جستجو</button>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Filter;