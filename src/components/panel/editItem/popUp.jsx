import React, { Component } from 'react';
const axios = require('axios');

class PopUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            food: {
                id: this.props.foods[this.props.foodIndex].id,
                image: this.props.foods[this.props.foodIndex].image,
                title: this.props.foods[this.props.foodIndex].title,
                price: this.props.foods[this.props.foodIndex].price,
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
    }

    submite = () => {
        axios.put(`http://api.mocki.io/v1/754fda57/${this.state.food.id}`, this.state.food)
            .then(res => console.log(res.data));
        let foods = this.props.foods
        foods[this.props.foodIndex] = this.state.food
        console.log(foods)
        this.props.updateData(foods)
    }
    render() {
        return (<div className="popUp">
            <div className="close" onClick={this.props.closePopUp}></div>
            <div className="popUp-wraper">
                <label htmlFor="editTitle">عنوان محصول</label>
                <input type="text" id="editTitle" value={this.state.food.title} onChange={(e) => this.changeValue(e.target.value, 'title')} />
                <label htmlFor="editPrice">قیمت</label>
                <input type="text" id="editPrice" value={this.state.food.price} onChange={(e) => this.changeValue(e.target.value, 'price')} />
                <button onClick={this.submite}>ثبت تغییرات</button>
            </div>

        </div>);
    }
}

export default PopUp;