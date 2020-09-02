import React from 'react';

class Notifications extends React.PureComponent {
    render() {
        return (
            <svg className="LeftMenuSVG clickable" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M7 12H13" stroke="#272343" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M19 12H25" stroke="#272343" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M7 20H13" stroke="#272343" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M19 20H25" stroke="#272343" stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        );
    }
}

export default Notifications;
