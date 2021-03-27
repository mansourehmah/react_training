import React, { Component, Fragment } from 'react';
import FontAwesome from 'react-fontawesome'

class Filter extends Component {
    handleClick = () => {
        document.getElementById('filters-wraper').classList.toggle('active')
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

                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Filter;