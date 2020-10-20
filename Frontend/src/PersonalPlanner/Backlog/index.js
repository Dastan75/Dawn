import React from 'react';
import SVGClose from './SvgIcons/Close';
import SVGArrow from './SvgIcons/Arrow';

// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import './style.scss';

// import { Drawer, Button, Radio, Space } from 'antd';

class Backlog extends React.Component {
    defaulState = {
    };

    state = {
        ...this.defaulState,
    };

    render() {
        const { backlogList, selectedBacklog } = this.props;
        return (
            <div className='backlogContainer'>
                <div className='backlogTitle'>My backlog</div>
                <div className='closeBacklog' onClick={this.props.onClose}><SVGClose/></div>
                <div className='todaysBlock block'>
                    <div className='filter'>
                        Sort by: estimated time
                    </div>
                    {
                        backlogList && backlogList.length > 0 &&
                        backlogList.map((item) => (
                            <div className={`task ${selectedBacklog === item.id ? 'selected' : ''}`} key={item.id} onClick={() => this.props.selectBacklog(item.id)}>
                                <div className={`workBar ${item.choosedColor ? 'BG' + item.choosedColor : 'BGcolor1'}`} style={{ width: `${item.percent}%`}}/>
                                <div className='name'>
                                    { item.title }
                                </div>
                                <div className="duration">
                                    {item.estTime} HRS
                                </div>
                            </div>
                        ))
                    }
                </div>
                <div className='noteToUser'>
                    <div className='noteArrow'><SVGArrow/></div>
                    <div className='noteText'>Click an item to select it. It will be dropped into your planner to organize your work</div>
                </div>
            </div>
        );
    }
}

export default Backlog;
