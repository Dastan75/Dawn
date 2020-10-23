import React from 'react';

class Mood extends React.PureComponent {
    render() {
        return (
            // <svg className='LeftMenuSVG clickable' fill='none' viewBox='0 0 32 32' xmlns='http://www.w3.org/2000/svg'>
            //     <path d='M23.2727 24.3636H8.72727C7.22727 24.3636 6 23.1364 6 21.6364V10.7273C6 9.22727 7.22727 8 8.72727 8H12.8182C13.3909 8 13.9273 8.27273 14.2727 8.72727L16.4545 11.6364H23.2727C24.7727 11.6364 26 12.8636 26 14.3636V21.6364C26 23.1364 24.7727 24.3636 23.2727 24.3636ZM12.8182 9.81818H8.72727C8.22727 9.81818 7.81818 10.2273 7.81818 10.7273V21.6364C7.81818 22.1364 8.22727 22.5455 8.72727 22.5455H23.2727C23.7727 22.5455 24.1818 22.1364 24.1818 21.6364V14.3636C24.1818 13.8636 23.7727 13.4545 23.2727 13.4545H16C15.7182 13.4545 15.4455 13.3182 15.2727 13.0909L12.8182 9.81818Z' fill={this.props.fill}/>
            //     <path d='M16 13.4545H6.90909C6.40909 13.4545 6 13.0454 6 12.5454C6 12.0454 6.40909 11.6364 6.90909 11.6364H16C16.5 11.6364 16.9091 12.0454 16.9091 12.5454C16.9091 13.0454 16.5 13.4545 16 13.4545Z' fill={this.props.fill}/>
            // </svg>
            <svg className='LeftMenuSVG clickable' width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16 6C10.4772 6 6 10.4772 6 16C6 21.5228 10.4772 26 16 26C21.5228 26 26 21.5228 26 16C26 10.4772 21.5228 6 16 6ZM8 16C8 11.5817 11.5817 8 16 8C20.4183 8 24 11.5817 24 16C24 20.4183 20.4183 24 16 24C11.5817 24 8 20.4183 8 16Z" fill={this.props.fill}/>
                <path d="M20.5839 18C19.8124 19.7659 18.0503 21 16 21C13.9497 21 12.1876 19.7659 11.416 18" fill={this.props.fill} stroke-width="2" stroke-linecap="round"/>
                <circle cx="12.5" cy="13.5" r="1.5" fill={this.props.fill}/>
                <circle cx="19.5" cy="13.5" r="1.5" fill={this.props.fill}/>
            </svg>
        );
    }
}

export default Mood;
