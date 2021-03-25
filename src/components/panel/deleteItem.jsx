import React, { Component, Fragment } from 'react';
const axios = require('axios');

class DeleteItem extends Component {

    delete = (id, index) => {
        axios.delete(`https://605cf7f76d85de00170db614.mockapi.io/api/foods/foods/${id}`)
        let foods = this.props.foods
        foods.splice(index, 1)
        this.props.updateData(foods)
    }
    render() {
        return (<Fragment>
            <div className="delete-item">
                {this.props.foods.map((food, index) => {
                    return (
                        <div key={'delete-' + food.id} onClick={() => this.delete(food.id, index)} className="item-wraper">
                            <h2>
                                {food.title}</h2>
                            <h3>{food.price}</h3>
                            <img src={food.image} alt={'image' + food.id} />
                        </div>
                    )
                })}

            </div>
        </Fragment>);
    }
}

export default DeleteItem;