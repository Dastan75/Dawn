import React from 'react';

class Logo extends React.PureComponent {
    render() {
        return (
            <svg className="LeftMenuSVG clickable" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 17H9C7.35 17 6 15.65 6 14V8C6 6.35 7.35 5 9 5H17C18.65 5 20 6.35 20 8V14C20 15.65 18.65 17 17 17ZM9 7C8.45 7 8 7.45 8 8V14C8 14.55 8.45 15 9 15H17C17.55 15 18 14.55 18 14V8C18 7.45 17.55 7 17 7H9Z" fill="#272343"/>
                <path d="M24 27H20C18.9 27 18 26.1 18 25V21C18 19.9 18.9 19 20 19H24C25.1 19 26 19.9 26 21V25C26 26.1 25.1 27 24 27ZM24 25V26V25ZM20 21V25H24V21H20Z" fill="#272343"/>
                <path d="M19 24H15C13.35 24 12 22.65 12 21V16C12 15.45 12.45 15 13 15C13.55 15 14 15.45 14 16V21C14 21.55 14.45 22 15 22H19C19.55 22 20 22.45 20 23C20 23.55 19.55 24 19 24Z" fill="#272343"/>
                <defs>
                <linearGradient id="paint0_linear" x1="0" y1="0" x2="12.8741" y2="16.7479" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF5C00"/>
                <stop offset="1" stop-color="#FFA800"/>
                </linearGradient>
                <linearGradient id="paint1_linear" x1="5.2995" y1="5.29947" x2="21.4689" y2="12.3665" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF5C00"/>
                <stop offset="1" stop-color="#FFA800"/>
                </linearGradient>
                <linearGradient id="paint2_linear" x1="0" y1="10.5971" x2="3.93936" y2="11.1928" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF5C00"/>
                <stop offset="1" stop-color="#FFA800"/>
                </linearGradient>
                <linearGradient id="paint3_linear" x1="0" y1="15.8966" x2="12.8741" y2="32.6445" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF5C00"/>
                <stop offset="1" stop-color="#FFA800"/>
                </linearGradient>
                <linearGradient id="paint4_linear" x1="21.3157" y1="5.29947" x2="25.255" y2="5.89523" gradientUnits="userSpaceOnUse">
                <stop stop-color="#FF5C00"/>
                <stop offset="1" stop-color="#FFA800"/>
                </linearGradient>
                </defs>
            </svg>
        );
    }
}

export default Logo;
