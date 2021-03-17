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
    }
    submite = () => {
        axios.post(`http://localhost:4000/foods`, this.state.food)
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
            <div>
                <div>
                    <input type="text" value={this.state.food.title} onChange={(e) => this.changeValue(e.target.value, 'title')} />
                    <input type="text" value={this.state.food.price} onChange={(e) => this.changeValue(e.target.value, 'price')} />
                    <button onClick={this.submite}>ثبت محصول</button>
                </div>
            </div>
        </Fragment>);
    }
}

export default AddItem;