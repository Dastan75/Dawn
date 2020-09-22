import React from 'react';

class Spaces extends React.PureComponent {
    render() {
        return (
            <svg className='LeftMenuSVG clickable' fill='none' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <ellipse cx='13' cy='13.7719' opacity='0.5' rx='12' ry='11.9682' stroke='#272343' strokeDasharray='3 6' strokeWidth='2'/>
                <path clipRule='evenodd' d='M12 17.7586C12 18.3109 12.4477 18.7586 13 18.7586C13.5523 18.7586 14 18.3109 14 17.7586V14.7693L17.0027 14.7693C17.5535 14.7693 18 14.3228 18 13.772C18 13.2211 17.5535 12.7746 17.0027 12.7746L14 12.7746V9.78516C14 9.23287 13.5523 8.78516 13 8.78516C12.4477 8.78516 12 9.23287 12 9.78516L12 12.7746L8.99735 12.7746C8.44653 12.7746 8 13.2211 8 13.772C8 14.3228 8.44653 14.7693 8.99735 14.7693L12 14.7693L12 17.7586Z' fill='#272343' fillRule='evenodd' opacity='0.5'/>
            </svg>
        );
    }
}

export default Spaces;
