import React from 'react';
import SVGLogo from './SvgIcons/Logo';
import SVGWork from './SvgIcons/MyWork';
import SVGPlanner from './SvgIcons/Planner';
import SVGProjects from './SvgIcons/Projects';
import SVGFaves from './SvgIcons/Faves';
import SVGNotifications from './SvgIcons/Notifications';
import SVGHelp from './SvgIcons/Help';
import {
    withRouter
} from 'react-router-dom';

function LeftMenu(props) {
    return (
        <div className='MenuBlock'>
            <div className={`MenuBlockOne ${props.location.pathname === '/Home' ? 'current' : ''}`} onClick={() => props.history.push('/Home')}>
                <SVGLogo fill={`${props.location.pathname === '/Home' ? 'white' : 'black'}`}/>
            </div>
            <div className={`MenuBlockOne ${props.location.pathname === '/Work' ? 'current' : ''}`} onClick={() => props.history.push('/Work')}>
                <SVGWork fill={`${props.location.pathname === '/Work' ? 'white' : 'black'}`}/>
            </div>
            <div className={`MenuBlockOne ${props.location.pathname === '/Planner' ? 'current' : ''}`} onClick={() => props.history.push('/Planner')}>
                <SVGPlanner fill={`${props.location.pathname === '/Planner' ? 'white' : 'black'}`}/>
            </div>
            <div className={`MenuBlockOne ${props.location.pathname === '/Notifications' ? 'current' : ''}`} onClick={() => props.history.push('/Notifications')}>
                <SVGNotifications fill={`${props.location.pathname === '/Notifications' ? 'white' : 'black'}`}/>
            </div>
            <div className={`MenuBlockOne ${props.location.pathname === '/Favorites' ? 'current' : ''}`}>
                <SVGFaves fill={`${props.location.pathname === '/Favorites' ? 'white' : 'black'}`}/>
            </div>
            <div className={`MenuBlockOne ${props.location.pathname === '/Projects' ? 'current' : ''}`} onClick={() => props.history.push('/Projects')}>
                <SVGProjects fill={`${props.location.pathname === '/Projects' ? 'white' : 'black'}`}/>
            </div>
            <div className='MenuSettings'>
                <div className='helpCenter clickable'>
                    <SVGHelp/>
                </div>
                {/* <div className='settingsCenter clickable' /></div> */}
                <div className='settingsCenter clickable' onClick={() => props.history.push('/Settings')}>
                    {/* <SVGHelp fill={`${props.location.pathname === '/Settings' ? 'white' : 'black'}`}/> */}
                </div>
            </div>
        </div>
    );
}

export default withRouter(LeftMenu);
