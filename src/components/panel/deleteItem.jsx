import React, { Component, Fragment } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import DeletePopUp from './deleteItem/deletePopUp'

class DeleteItem extends Component {
    constructor() {
        super()
        this.state = {
            deleteMsg: '',
            popUp: false,
            foodIndex: null,
            id: null
        }
    }
    setPopUp = (id, index) => {
        this.setState({ popUp: !this.state.popUp, foodIndex: index, id: parseInt(id) })
    }
    closePopUp = () => {
        this.setState({ popUp: !this.state.popUp })
    }
    render() {
        return (<Fragment>
            <NotificationContainer />
            <div className="delete-item">
                {this.props.foods.map((food, index) => {
                    return (
                        <div key={'delete-' + food.id} onClick={() => { this.setPopUp(food.id, index) }} className="item-wraper">
                            <h2>
                                {food.title}</h2>
                            <h3>{food.price}</h3>
                            <img src={food.image} alt={'image' + food.id} />
                        </div>
                    )
                })}
            </div>
            {this.state.popUp === false ? '' : <DeletePopUp closePopUp={this.closePopUp} id={this.state.id} foodIndex={this.state.foodIndex} foods={this.props.foods} updateData={this.props.updateData} />}
        </Fragment>);
    }
}

export default DeleteItem;