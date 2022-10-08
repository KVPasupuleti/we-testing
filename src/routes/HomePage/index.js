import React, { Component } from 'react';

import { identifyEvent, loadSegmentScript, trackEvent } from '../../utils/SegmentUtils.js';

import HomeComponent from '../../components/HomeComponent';

class HomePageRoute extends Component {
    componentDidMount() {
        loadSegmentScript()

        setTimeout(() => {
            identifyEvent()
            trackEvent()
        }, 3000)
    }

    render() {
        return (
            <div>
                <HomeComponent />
            </div>
        );
    }
}

export default HomePageRoute;