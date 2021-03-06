import React, { Component, Fragment } from 'react';
import PopUp from './editItem/popUp'

class EditItem extends Component {
    constructor() {
        super()
        this.state = {
            popUp: false,
            foodIndex: null
        }
    }
    setPopUp = (index) => {
        this.setState({ popUp: !this.state.popUp, foodIndex: index })
    }

    closePopUp = () => {
        this.setState({ popUp: !this.state.popUp })
    }
    render() {
        return (<Fragment>
            <div className="edit-item">
                {this.props.foods.map((food, index) => {
                    return (
                        <div key={'edit-' + food.id} onClick={() => { this.setPopUp(index) }} className="item-wraper">
                            <h2>
                                {food.title}</h2>
                            <h3><span>قیمت : </span>{food.price} <span>تومان</span></h3>
                            <img src={food.image} alt={'image' + food.id} />
                            <div className="hover"></div>
                        </div>
                    )
                })}
                {this.state.popUp === false ? '' : <PopUp editLoading={this.props.editLoading} closePopUp={this.closePopUp} foodIndex={this.state.foodIndex} foods={this.props.foods} updateData={this.props.updateData} />}
            </div>
        </Fragment>);
    }
}

export default EditItem;