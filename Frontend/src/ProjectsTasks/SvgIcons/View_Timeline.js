import React from 'react';

class Notifications extends React.PureComponent {
    render() {
        return (
            <svg className='LeftMenuSVG clickable' fill='none' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
                <path d='M9 9H16' stroke='#272343' strokeLinecap='round' strokeLinejoin='round' strokeMiterlimit='10' strokeWidth='2'/>
                <path d='M16 16H23' stroke='#272343' strokeLinecap='round' strokeLinejoin='round' strokeMiterlimit='10' strokeWidth='2'/>
                <path d='M12 23H19' stroke='#272343' strokeLinecap='round' strokeLinejoin='round' strokeMiterlimit='10' strokeWidth='2'/>
            </svg>
        );
    }
}

export default Notifications;
