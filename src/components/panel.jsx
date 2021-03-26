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
        this.setState({ foods: val })

    }
    componentDidMount() {
        axios.get('https://605cf7f76d85de00170db614.mockapi.io/api/foods/foods')
            .then(res => {
                this.setState({ foods: res.data })
            })
    }
    render() {
        return (
            <Fragment>
                <div>
                    <h2 className="title">محصولات موجود</h2>
                    <ItemSlider foods={this.state.foods} />
                </div>
                <div className="container">
                    <h2 className="tab-title">ویراش محصولات</h2>
                    <p className="tab-des">در این قسمت می توانید محصولات خود را ویراش حذف و یا اضافه کنید</p>

                    <ul className="nav nav-tabs">
                        <li><a data-toggle="tab" href="#delete">حذف محصول</a></li>
                        <li><a data-toggle="tab" href="#add">افزودن محصول</a></li>
                        <li className="active"><a data-toggle="tab" href="#edit">ویرایش</a></li>
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