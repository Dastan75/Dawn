import React, { Component } from 'react'
import comingSoon from '../../Shared/comingSoon.png'
import pic from '../../Shared/Mood-Tracker.png'

export default class ComingSoon extends Component {
    render() {
        return (
            <div className="comingSoonBLock">
                <div className="comingSoonLogo">
                    <img src={comingSoon}/>
                </div>
                <div className="pic">
                    <img src={pic}/>
                </div>
            </div>
        )
    }
}
