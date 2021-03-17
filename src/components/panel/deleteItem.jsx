import React, { Component, Fragment } from 'react';
const axios = require('axios');

class DeleteItem extends Component {

    delete = (id, index) => {
        console.log(id)
        axios.delete(`http://localhost:4000/foods/${id}`)
            .then(res => console.log(res.data));
        let foods = this.props.foods
        foods.splice(index, 1)
        this.props.updateData(foods)
    }
    render() {
        return (<Fragment>
            <div>
                {this.props.foods.map((food, index) => {
                    return (
                        <div key={'delete-' + food.id} onClick={() => this.delete(food.id, index)}>
                            <img src="" alt="" />
                            <h2>
                                {food.id}
                                {food.title}</h2>
                            <h3>{food.price}</h3>
                        </div>
                    )
                })}

            </div>
        </Fragment>);
    }
}

export default DeleteItem;