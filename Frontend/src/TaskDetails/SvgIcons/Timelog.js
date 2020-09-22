import React from 'react';

class Notifications extends React.PureComponent {
    render() {
        return (
            <svg className='LeftMenuSVG clickable' fill='none' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
                <path clipRule='evenodd' d='M16 8C11.5817 8 8 11.5817 8 16C8 20.4183 11.5817 24 16 24C20.4183 24 24 20.4183 24 16C24 11.5817 20.4183 8 16 8ZM6 16C6 10.4772 10.4772 6 16 6C21.5228 6 26 10.4772 26 16C26 21.5228 21.5228 26 16 26C10.4772 26 6 21.5228 6 16Z' fill='#272343' fillRule='evenodd'/>
                <path d='M16 11.5V16L19.861 18.7' stroke='#272343' strokeLinecap='round' strokeLinejoin='round' strokeMiterlimit='10' strokeWidth='2'/>
            </svg>
        );
    }
}

export default Notifications;
