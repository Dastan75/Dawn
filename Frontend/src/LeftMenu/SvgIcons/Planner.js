import React from 'react';

class Spaces extends React.PureComponent {
    render() {
        return (
            <svg className="LeftMenuSVG clickable" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M24 26H8C6.9 26 6 25.1 6 24V10C6 8.9 6.9 8 8 8H24C25.1 8 26 8.9 26 10V24C26 25.1 25.1 26 24 26Z" stroke={this.props.fill} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M6 13H26" stroke={this.props.fill} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M14.74 16.6201V22.1801C14.74 22.2501 14.68 22.3101 14.61 22.3101H13.47C13.4 22.3101 13.34 22.2501 13.34 22.1801V17.6701H12.35C12.28 17.6701 12.21 17.6101 12.21 17.5401V16.6201C12.21 16.5501 12.28 16.4901 12.35 16.4901H14.61C14.68 16.4901 14.74 16.5501 14.74 16.6201Z" fill={this.props.fill}/>
                <path d="M19.7099 21.2701V22.1901C19.7099 22.2601 19.6499 22.3201 19.5799 22.3201H16.0699C15.9999 22.3201 15.9399 22.2601 15.9399 22.1901V21.2901C15.9399 21.2301 15.9599 21.1901 15.9999 21.1301L17.7199 19.4501C17.9299 19.2501 18.3499 18.8701 18.3499 18.3801C18.3499 17.9801 18.0599 17.7101 17.6099 17.7101C17.1999 17.7101 16.9399 17.9501 16.7299 18.2301C16.6599 18.3101 16.5999 18.3001 16.5299 18.2201L15.8899 17.5801C15.8299 17.5201 15.8299 17.4501 15.8599 17.4001C16.2099 16.9101 16.7999 16.4301 17.7299 16.4301C18.8999 16.4301 19.7099 17.2001 19.7099 18.2501C19.7099 19.1301 19.1399 19.6501 18.9399 19.8401L17.6099 21.1401H19.5799C19.6499 21.1401 19.7099 21.1901 19.7099 21.2701Z" fill={this.props.fill}/>
                <path d="M11 9V6" stroke={this.props.fill} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M21 9V6" stroke={this.props.fill} stroke-width="2" stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
        );
    }
}

export default Spaces;
