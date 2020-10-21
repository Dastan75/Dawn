import React, { Component } from 'react'
import comingSoon from '../Shared/comingSoon.png'
import './style.scss'

export default class ComingSoon extends Component {
    render() {
        return (
            <div className="comingSoonBLock">
                <div className="comingSoonLogo">
                    <img src={comingSoon}/>
                </div>
                
            </div>
        )
    }
}
