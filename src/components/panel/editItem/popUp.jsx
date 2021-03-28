import React, { Component, Fragment } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import FontAwesome from 'react-fontawesome';

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
            disable: true
        }
    }
    changeValue = (value, item) => {
        if (item === 'title') {
            this.setState({
                food: {
                    ...this.state.food,
                    title: value
                },
                disable: false
            })
        }
        else if (item === 'price') {
            this.setState({
                food: {
                    ...this.state.food,
                    price: value
                },
                disable: false
            })
        }
        else if (item === 'image') {
            this.setState({
                food: {
                    ...this.state.food,
                    image: value
                },
                disable: false
            })
        }
    }

    submite = () => {
        if (this.state.food.image === '') {
            this.state.food.image = 'https://cdn4.iconfinder.com/data/icons/ui-beast-3/32/ui-49-512.png'
        }
        this.props.editLoading(true)
        axios.put(`https://605cf7f76d85de00170db614.mockapi.io/api/test/foods/${this.state.food.id}`, this.state.food)
            .then(() => {
                NotificationManager.success('تغییرات با موفقیت ذخیره شد')
                axios.get('https://605cf7f76d85de00170db614.mockapi.io/api/test/foods').then((res) => {
                    this.props.updateData(res.data)
                    this.props.editLoading(false)
                })
            })
            .catch(() => {
                NotificationManager.error('خطایی پیش آمده')
                this.props.editLoading(false)
            }
            )

    }

    formValidation = () => {
        document.getElementById('editTitle').style.border = "none"
        document.getElementById('editPrice').style.border = "none"
        let disable = 0

        if (this.state.food.title.length < 2 || this.state.food.title.length > 30) {
            document.getElementById('editTitle').style.border = "1px solid red"
            disable++
        }
        if (this.state.food.price.length === 0 || this.state.food.price.search(/[a-z]/g) >= 0) {
            document.getElementById('editPrice').style.border = "1px solid red"
            disable++
        }
        if (this.state.food.image.indexOf('script') >= 0 || this.state.food.title.indexOf('script') >= 0 || this.state.food.price.indexOf('script') >= 0) {
            alert('adam bash :))')
            this.setState({
                food: {
                    image: this.props.foods[this.props.foodIndex].image,
                    title: this.props.foods[this.props.foodIndex].title,
                    price: this.props.foods[this.props.foodIndex].price,
                    id: this.props.foods[this.props.foodIndex].id,
                },
                disable: true
            })
        }
        if (disable > 0) {
            this.setState({ disable: true })
        }
        else if (disable === 0) {
            this.setState({ disable: false })
        }
    }
    mouseHandle = (event) => {
        let x = event.clientX
        let y = event.clientY
        document.getElementById('close-icon').style.display = "block"
        document.getElementById('close-icon').style.left = x - 5 + 'px'
        document.getElementById('close-icon').style.top = y - 5 + 'px'
    }
    mouseLeaveHandle = () => {
        document.getElementById('close-icon').style.display = "none"
    }
    render() {
        return (
            <Fragment>
                <NotificationContainer />
                <div className="popUp">
                    <div className="close" id="close" onMouseLeave={this.mouseLeaveHandle} onMouseMove={this.mouseHandle} onClick={this.props.closePopUp}></div>
                    <FontAwesome
                        id="close-icon"
                        name="close"
                        size="2x"
                    />
                    <div className="popUp-wraper">
                        <label htmlFor="editTitle">عنوان محصول</label>
                        <input type="text" id="editTitle" value={this.state.food.title} onKeyUp={this.formValidation} onChange={(e) => this.changeValue(e.target.value, 'title')} />
                        <label htmlFor="editPrice">قیمت</label>
                        <input type="text" id="editPrice" value={this.state.food.price} onKeyUp={this.formValidation} onChange={(e) => this.changeValue(e.target.value, 'price')} />
                        <span>آدرس عکس را وارد کنید</span>
                        <input type="text" value={this.state.food.image} onKeyUp={this.formValidation} onChange={(e) => this.changeValue(e.target.value, 'image')} />
                        <button onClick={this.submite} disabled={this.state.disable}>ثبت تغییرات</button>
                    </div>

                </div>
            </Fragment>
        );
    }
}

export default PopUp;