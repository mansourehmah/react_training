import React, { Component, Fragment } from 'react';
const axios = require('axios');

class AddItem extends Component {

    constructor() {
        super()
        this.state = {
            food: {
                image: '',
                title: '',
                price: '',
            },
        }
    }

    changeValue = (value, item) => {
        if (item === 'title') {
            this.setState({
                food: {
                    ...this.state.food,
                    title: value
                }
            })
        }
        else if (item === 'price') {
            this.setState({
                food: {
                    ...this.state.food,
                    price: value
                }
            })
        }
        else if (item === 'image') {
            this.setState({
                food: {
                    ...this.state.food,
                    image: value
                }
            })
        }
    }
    submite = () => {
        if (this.state.food.image === '') {
            // this.setState({
            //     food: {
            //         ...this.state.food,
            //         image: 'https://www.iconsdb.com/icons/preview/black/error-7-xxl.png'
            //     }
            // })
            this.state.food.image = 'https://cdn4.iconfinder.com/data/icons/ui-beast-3/32/ui-49-512.png'
        }
        axios.post(`https://605cf7f76d85de00170db614.mockapi.io/api/foods/foods`, this.state.food)
            .then(res => console.log(res.data));
        let foods = this.props.foods
        foods.push(this.state.food)
        this.props.updateData(foods)
        this.setState({
            food: {
                image: '',
                title: '',
                price: ''
            }
        })
    }

    render() {
        return (<Fragment>
            <div className="add-item">
                <div className="add-wraper">
                    <label htmlFor="addTitle">عنوان محصول</label>
                    <input type="text" id="addTitle" value={this.state.food.title} onChange={(e) => this.changeValue(e.target.value, 'title')} />
                    <label htmlFor="addPrice">قیمت</label>
                    <input type="text" id="addPrice" value={this.state.food.price} onChange={(e) => this.changeValue(e.target.value, 'price')} />
                    <span>آدرس عکس را وارد کنید</span>
                    <input type="text" value={this.state.food.image} onChange={(e) => this.changeValue(e.target.value, 'image')} />
                    <button onClick={this.submite}>ثبت محصول</button>
                </div>
            </div>
        </Fragment>);
    }
}

export default AddItem;