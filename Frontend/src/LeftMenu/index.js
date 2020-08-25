import React from 'react';
import SVGLogo from './SvgIcons/Logo'
import SVGMyWork from './SvgIcons/MyWork'
import SVGPlanner from './SvgIcons/Planner'
import SVGProjects from './SvgIcons/Projects'
import SVGFaves from './SvgIcons/Faves'
import SVGNotifications from './SvgIcons/Notifications'
import {
    withRouter  
} from "react-router-dom";

function LeftMenu(props) {
    return (
        <div className="MenuBlock">
            {
                console.log(props.location)
            }
            <div onClick={() => props.history.push("/Home")} className={`MenuBlockOne ${props.location.pathname === '/Home' ? 'current' : ''}`}>
                <SVGLogo fill={`${props.location.pathname === '/Home' ? 'white' : 'black'}`}/>
            </div>
            <div onClick={() => props.history.push("/Overview")} className={`MenuBlockOne ${props.location.pathname === '/Overview' ? 'current' : ''}`}>
                <SVGMyWork fill={`${props.location.pathname === '/Overview' ? 'white' : 'black'}`}/>
            </div>
            <div className={`MenuBlockOne ${props.location.pathname === '/app/Planner' ? 'current' : ''}`}>
                <SVGPlanner fill={`${props.location.pathname === '/Planner' ? 'white' : 'black'}`}/>
            </div>
            <div className={`MenuBlockOne ${props.location.pathname === '/app/Notifications' ? 'current' : ''}`}>
                <SVGNotifications fill={`${props.location.pathname === '/Notifications' ? 'white' : 'black'}`}/>
            </div>
            <div className={`MenuBlockOne ${props.location.pathname === '/app/Favorites' ? 'current' : ''}`}>
                <SVGFaves fill={`${props.location.pathname === '/Favorites' ? 'white' : 'black'}`}/>
            </div>
            <div onClick={() => props.history.push("/Projects")} className={`MenuBlockOne ${props.location.pathname === '/Projects' ? 'current' : ''}`}>
                <SVGProjects fill={`${props.location.pathname === '/Projects' ? 'white' : 'black'}`}/>
            </div>
        </div>
    );
}

export default withRouter(LeftMenu)
