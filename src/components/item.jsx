import React, { Component } from 'react';

const axios = require('axios');

class Item extends Component {
    constructor() {
        super()
        this.state = {
            food: [],
        }
    }
    componentDidMount() {
        axios.get('http://localhost:4000/foods')
            .then(res => {
                console.log(res)
                this.state.food = res.data
                console.log(this.state.food)

            })
            .catch(err => {
                console.log(err)
            })
    }

    add = () => {
        this.state.food.push({ food: 'burger', price: '10$' })
        console.log(this.state.food)
        axios({
            method: "post",
            url: 'http://localhost:4000/foods',
            data: this.state.para
          })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        return (<div>
            <h1 onClick={this.add}>item</h1>
        </div>);
    }
}

export default Item;