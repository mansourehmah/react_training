import React, { Component, Fragment } from 'react';
import FontAwesome from 'react-fontawesome'

class Filter extends Component {
    constructor() {
        super()
        this.state = {
            filter: {
                obj: ['payment_method', 'payment_method', 'order_status', 'order_status', 'order_status', 'order_status', 'order_status', 'payment_status', 'payment_status', 'all'],
                value: [true, false, 0, 1, 2, 3, 4, true, false, null],
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
            checked: [false, false, false, false, false, false, false, false, false, true],
            value: null,
            obj: null,
        }
    }
    handleClick = () => {
        document.getElementById('filters-wraper').classList.toggle('active')
    }
    handleChecked = (index) => {
        this.setState(state => {
            const checked = state.checked.map((item, i) => {
                if (i === index) {
                    return !this.state.checked[index]
                } else {
                    return item;
                }
            });
            return {
                checked,
            }
        });
        console.log('hi')
    }

    filterOrders = (order) => {
        switch (this.state.obj) {
            case 'order_status': return (Number(order.order_status) === this.state.value)
            case 'payment_method': return (order.payment_method === this.state.value)
            case 'payment_status': return (order.payment_status === this.state.value)
            default: return (order)
        }
    }
    handleFilter = () => {
        console.log(this.props.orders.filter(this.filterOrders))
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
                        <button onClick={this.handleFilter}>عمال فیلتر</button>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Filter;