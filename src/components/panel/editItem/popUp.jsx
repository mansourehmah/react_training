import React, { Component } from 'react';
const axios = require('axios');

class PopUp extends Component {
    constructor(props) {
        super(props)
        this.state = {
            food: {
                image: this.props.foods[this.props.foodIndex].image,
                title: this.props.foods[this.props.foodIndex].title,
                price: this.props.foods[this.props.foodIndex].price,
                id: this.props.foods[this.props.foodIndex].id,
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
            this.state.food.image = 'https://cdn4.iconfinder.com/data/icons/ui-beast-3/32/ui-49-512.png'
        }
        axios.put(`https://605cf7f76d85de00170db614.mockapi.io/api/foods/foods/${this.state.food.id}`, this.state.food)
            .then(res => console.log(res.data));
        let foods = this.props.foods
        foods[this.props.foodIndex] = this.state.food
        console.log(foods)
        this.props.updateData(foods)
        this.props.closePopUp()
    }
    render() {
        return (<div className="popUp">
            <div className="close" onClick={this.props.closePopUp}></div>
            <div className="popUp-wraper">
                <label htmlFor="editTitle">عنوان محصول</label>
                <input type="text" id="editTitle" value={this.state.food.title} onChange={(e) => this.changeValue(e.target.value, 'title')} />
                <label htmlFor="editPrice">قیمت</label>
                <input type="text" id="editPrice" value={this.state.food.price} onChange={(e) => this.changeValue(e.target.value, 'price')} />
                <span>آدرس عکس را وارد کنید</span>
                <input type="text" value={this.state.food.image} onChange={(e) => this.changeValue(e.target.value, 'image')} />
                <button onClick={this.submite}>ثبت تغییرات</button>
            </div>

        </div>);
    }
}

export default PopUp;