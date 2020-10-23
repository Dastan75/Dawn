import React from 'react';

class Notifications extends React.PureComponent {
    render() {
        return (
            <svg className='LeftMenuSVG clickable' fill='none' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
                <path d='M7 12H13' stroke='#272343' strokeLinecap='round' strokeLinejoin='round' strokeMiterlimit='10' strokeWidth='2'/>
                <path d='M19 12H25' stroke='#272343' strokeLinecap='round' strokeLinejoin='round' strokeMiterlimit='10' strokeWidth='2'/>
                <path d='M7 20H13' stroke='#272343' strokeLinecap='round' strokeLinejoin='round' strokeMiterlimit='10' strokeWidth='2'/>
                <path d='M19 20H25' stroke='#272343' strokeLinecap='round' strokeLinejoin='round' strokeMiterlimit='10' strokeWidth='2'/>
            </svg>
        );
    }
}

export default Notifications;
