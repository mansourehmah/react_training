import React, { Component, Fragment } from 'react';
import ItemSlider from './panel/itemSlider'
import EditItem from './panel/editItem'
import DeleteItem from './panel/deleteItem'
import AddItem from './panel/addItem'

const axios = require('axios');

class Panel extends Component {
    constructor() {
        super()
        this.state = {
            foods: [],
        }
    }

    updateData = (val) => {
        this.setState({
            foods: val
        })
    }
    componentDidMount() {
        axios.get('http://localhost:4000/foods')
            .then(res => {
                console.log(res)
                this.setState({ foods: res.data })
            })
            .catch(err => {
                console.log(err)
            })
    }
    render() {
        return (
            <Fragment>
                <div>
                    <ItemSlider foods={this.state.foods} />
                </div>
                <div className="container">
                    <h2>ویراش محصولات</h2>
                    <p>To make the tabs toggleable, add the data-toggle="tab" attribute to each link. Then add a .tab-pane className with a unique ID for every tab and wrap them inside a div element with className .tab-content.</p>

                    <ul className="nav nav-tabs">
                        <li className="active"><a data-toggle="tab" href="#edit">ویرایش</a></li>
                        <li><a data-toggle="tab" href="#delete">حذف محصول</a></li>
                        <li><a data-toggle="tab" href="#add">افزودن محصول</a></li>
                    </ul>

                    <div className="tab-content">
                        <div id="edit" className="tab-pane fade in active">
                            <EditItem foods={this.state.foods} updateData={this.updateData} />
                        </div>
                        <div id="delete" className="tab-pane fade">
                            <DeleteItem foods={this.state.foods} updateData={this.updateData} />
                        </div>
                        <div id="add" className="tab-pane fade">
                            <AddItem foods={this.state.foods} updateData={this.updateData} />
                        </div>
                    </div>
                </div>
            </Fragment>
        );
    }
}

export default Panel;