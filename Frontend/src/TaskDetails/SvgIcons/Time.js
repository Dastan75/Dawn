import React from 'react';

class Spaces extends React.PureComponent {
    render() {
        return (
            <svg className="LeftMenuSVG clickable" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path opacity="0.5" d="M25 13.7719C25 20.3817 19.6274 25.7401 13 25.7401C6.37258 25.7401 1 20.3817 1 13.7719C1 7.16204 6.37258 1.80371 13 1.80371C19.6274 1.80371 25 7.16204 25 13.7719Z" stroke="#272343" stroke-width="2" stroke-dasharray="3 6"/>
                <rect opacity="0.5" x="12.5" y="14.2695" width="5.98143" height="1" rx="0.5" transform="rotate(-90 12.5 14.2695)" fill="white" stroke="#272343"/>
                <rect opacity="0.5" x="-0.182438" y="-0.68087" width="5.99735" height="0.998011" rx="0.499006" transform="matrix(-0.8666 -0.499004 0.500996 -0.865449 17.6628 16.2624)" fill="white" stroke="#272343" stroke-width="0.998011"/>
            </svg>
        );
    }
}

export default Spaces;
