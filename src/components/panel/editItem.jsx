import React, { Component, Fragment } from 'react';
import PopUp from './editItem/popUp'
const axios = require('axios');


class EditItem extends Component {
    constructor() {
        super()
        this.state = {
            // foods: this.props.foods,
            popUp: false,
            foodIndex : null
        }
    }
    setPopUp = (index) => {
        this.setState({ popUp: !this.state.popUp , foodIndex : index})
    }
    done = () => {
        axios({
            method: "post",
            url: 'http://localhost:4000/foods',
            data: this.state.foods
        })
            .then(function (response) {
                console.log(response);
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    render() {
        return (<Fragment>
            <div>
                {this.props.foods.map((food , index )=> {
                    return (
                        <div key={'edit-' + food.id} onClick={()=>{this.setPopUp(index)}}>
                            <img src="" alt="" />
                            <h2>
                                {food.id}
                                {food.title}</h2>
                            <h3>{food.price}</h3>
                        </div>
                    )
                })}
                {this.state.popUp === false ? '' : <PopUp foodIndex={this.state.foodIndex} foods={this.props.foods} />}
            </div>
        </Fragment>);
    }
}

export default EditItem;