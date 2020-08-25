import React from 'react';

class Spaces extends React.PureComponent {
    render() {
        return (
            <svg className="LeftMenuSVG clickable" viewBox="0 0 32 32" fill={this.props.fill} xmlns="http://www.w3.org/2000/svg">
                <path fill-rule="evenodd" clip-rule="evenodd" d="M16.0925 6.00008C16.4731 6.00482 16.8181 6.22529 16.9822 6.56877L19.4654 11.7642L25.1559 12.6622C25.532 12.7216 25.8418 12.9894 25.9549 13.353C26.068 13.7167 25.9647 14.1129 25.6886 14.3752L21.5104 18.3426L22.4175 24.0326C22.4775 24.4087 22.3186 24.7862 22.0077 25.0062C21.6968 25.2263 21.2879 25.2506 20.9532 25.069L15.8859 22.32L10.7548 24.9406C10.4157 25.1138 10.0077 25.0793 9.70239 24.8518C9.39709 24.6242 9.24751 24.243 9.31659 23.8686L10.3614 18.2048L6.2921 14.1263C6.0233 13.8569 5.93072 13.4583 6.05325 13.098C6.17579 12.7377 6.4922 12.4782 6.8695 12.4286L12.5776 11.6773L15.1888 6.54643C15.3614 6.20715 15.7118 5.99534 16.0925 6.00008ZM16.0518 9.26005L14.1212 13.0536C13.9718 13.3473 13.6872 13.5484 13.3605 13.5914L9.13818 14.1472L12.1479 17.1637C12.38 17.3963 12.483 17.7282 12.4234 18.0514L11.6513 22.237L15.4452 20.2994C15.7387 20.1495 16.0872 20.1539 16.3768 20.311L20.123 22.3433L19.4525 18.1374C19.4006 17.8119 19.5124 17.4818 19.7514 17.2548L22.8405 14.3216L18.6341 13.6578C18.3089 13.6065 18.0297 13.3983 17.8878 13.1012L16.0518 9.26005Z" fill="#272343"/>
            </svg>
        );
    }
}

export default Spaces;
