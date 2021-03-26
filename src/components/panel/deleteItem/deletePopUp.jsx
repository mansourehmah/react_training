import React, { Component, Fragment } from 'react';
import { NotificationContainer, NotificationManager } from 'react-notifications';
import 'react-notifications/lib/notifications.css';
import FontAwesome from 'react-fontawesome';

const axios = require('axios');

class deletePopUp extends Component {

    delete = () => {
        axios.delete(`https://605cf7f76d85de00170db614.mockapi.io/api/foods/foods/${this.props.id}`)
            .then(() => {
                NotificationManager.success('محصول مورد نظر با موفقیت حذف شد')
                axios.get('https://605cf7f76d85de00170db614.mockapi.io/api/foods/foods').then((res) => {
                    this.props.updateData(res.data)
                })
                this.props.closePopUp()
            })
            .catch(() => NotificationManager.error('خطایی پیش آمده'))
    }
    mouseHandle = (event) => {
        let x = event.clientX
        let y = event.clientY
        document.getElementById('delete-close-icon').style.display = "block"
        document.getElementById('delete-close-icon').style.left = x - 5 + 'px'
        document.getElementById('delete-close-icon').style.top = y - 5 + 'px'
    }
    mouseLeaveHandle = () => {
        document.getElementById('delete-close-icon').style.display = "none"
    }
    render() {
        return (
            <Fragment>
                <NotificationContainer />
                <div className="popUp">
                    <div className="close" id="close" onMouseLeave={this.mouseLeaveHandle} onMouseMove={this.mouseHandle} onClick={this.props.closePopUp}></div>
                    <FontAwesome
                        id="delete-close-icon"
                        name="close"
                        size="2x"
                    />
                    <div className="popUp-wraper">
                        <label>
                            را حذف نمایید ؟ " {this.props.foods[this.props.foodIndex].title} " آیا میخواهید محصول
                        </label>
                        <div>
                            <button onClick={this.delete}>بله</button>
                            <button onClick={this.props.closePopUp}>خیر</button>
                        </div>
                    </div>

                </div>
            </Fragment>
        );
    }
}

export default deletePopUp;