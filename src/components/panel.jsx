import React, { Component, Fragment } from 'react';
import Navbar from './Navbar'
import TopBarProgress from "react-topbar-progress-indicator";

TopBarProgress.config({
    barColors: {
        "0": "#ef8354",
        "0.5": "#798baa",
        "1.0": "#2d3142",
    },
    shadowBlur: 5
});

class Panel extends Component {
    constructor() {
        super()
        this.state = {
            loading: false
        }
    }
    editLoading = (value) => {
        this.setState({ loading: value })
    }
    render() {
        console.log(this.state.loading)
        return (
            <Fragment>
                <div>{this.state.loading && <TopBarProgress />}</div>
                <Navbar loading={this.state.loading} editLoading={this.editLoading}></Navbar>
            </Fragment>
        );
    }
}

export default Panel;