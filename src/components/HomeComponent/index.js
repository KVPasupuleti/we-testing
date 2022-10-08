import React, { Component } from 'react';
import { loginEvent, logoutEvent } from '../../utils/SegmentUtils';

class HomeComponent extends Component {
    onClickLogin = () => {
        loginEvent()
    }

    onClickLogout = () => {
        logoutEvent()
    }

    render() {
        return (
            <div>
                <button onClick={this.onClickLogin}>Login</button>
                <button onClick={this.onClickLogout}>Logout</button>

            </div>
        );
    }
}

export default HomeComponent;