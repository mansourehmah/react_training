import React, { Component, Fragment } from 'react';
import FontAwesome from 'react-fontawesome'

class Filter extends Component {
    constructor() {
        super()
        this.state = {
            filter: {
                name: ['online', 'offline', 'registering', 'updating', 'sending', 'finished', 'cancled', 'all'],
                value: [false, false, false, false, false, false, false, true],
                title: ['پرداخت آنلاین',
                    'پرداخت در محل',
                    'سفارشات ثبت شده',
                    'سفارشات در حال آماده سازی',
                    'سفارشات در حال ارسال',
                    'سفارشات ارسال شده',
                    'سفارشات لغو شده',
                    'همه محصولات'
                ]
            },
            value: null,
            obj: null,
        }
    }
    handleClick = () => {
        document.getElementById('filters-wraper').classList.toggle('active')
    }
    editFilter = (index) => { }

    filterOrders = (order) => {
        switch (this.state.obj) {
            case 'order_status': return (Number(order.order_status === this.state.value))
            case 'payment_method': return (Number(order.payment_method === this.state.value))
            case 'payment_status': return (Number(order.payment_status === this.state.value))
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
                            {/* {this.state.filter.value.map((filter, index) => {
                                return (
                                    <span key={filter}>
                                        <label htmlFor={'filter_' + filter.name}>{this.state.filter.title[index]}</label>
                                        <input
                                            type="checkbox"
                                            id={'filter_' + filter.name}
                                            checked={this.state.filter.value[index]}
                                            value={this.state.filter.value[index]}
                                            onChange={()=>{this.setState({ filter : !this.state.filter.value[index]})}}
                                        />
                                    </span>
                                )
                            })} */}
                        </div>
                        <button onClick={this.handleFilter}>عمال فیلتر</button>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Filter;