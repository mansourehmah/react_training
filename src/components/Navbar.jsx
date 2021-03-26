import React, { Component, Fragment } from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Products from './Products'
import Orders from './Orders'
import './../assets/css/navbar.css'

class Navbar extends Component {
    render() {
        return (
            <Fragment>
                <Router> <div>
                    <nav className="menu">
                        <ul>
                            <li>
                                <Link to="/orders">Orders</Link>
                            </li>
                            <li>
                                <Link to="/">Products</Link>
                            </li>
                        </ul>
                    </nav>
                    <Switch>
                        <Route path="/orders">
                            <Orders />
                        </Route>
                        <Route path="/">
                            <Products loading={this.props.loading} editLoading={this.props.editLoading} />
                        </Route>
                    </Switch>
                </div>
                </Router>
            </Fragment>
        );
    }
}

export default Navbar;