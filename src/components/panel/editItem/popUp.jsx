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
        axios.put(`http://localhost:4000/foods/${this.state.food.id}`, this.state.food)
            .then(res => console.log(res.data));
        let foods = this.props.foods
        foods[this.props.foodIndex] = this.state.food
        console.log(foods)
        this.props.updateData(foods)
    }
    render() {
        return (<div>
            <div>
                <input type="text" value={this.state.food.title} onChange={(e) => this.changeValue(e.target.value, 'title')} />
                <input type="text" value={this.state.food.price} onChange={(e) => this.changeValue(e.target.value, 'price')} />
                <button onClick={this.submite}>ثبت تغییرات</button>
            </div>

        </div>);
    }
}

export default PopUp;