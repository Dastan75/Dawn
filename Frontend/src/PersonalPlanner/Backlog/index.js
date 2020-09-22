import React from 'react';
import { Progress } from 'antd';
import axios from 'axios';
import SVGClose from './SvgIcons/Close';
import SVGArrow from './SvgIcons/Arrow';

// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import './style.scss';

// import { Drawer, Button, Radio, Space } from 'antd';

class Backlog extends React.Component {
    defaulState = {
    };

    state = {
        ...this.defaulState,
    };

    render() {
        return (
            <div className='backlogContainer'>
                <div className='backlogTitle'>My backlog</div>
                <div className='closeBacklog' onClick={this.props.onClose}><SVGClose/></div>
                <div className='todaysBlock block'>
                    <div className='filter'>
                            Sort by: estimated time
                    </div>
                    <div className='task task1'>
                        <div className='workBar'/>
                        <div className='name'>
                                Figure out channels
                        </div>
                        <div className='duration'>
                                3 HRS
                        </div>
                    </div>
                    <div className='task task2'>
                        <div className='workBar'/>
                        <div className='name'>
                                Setup FB
                        </div>
                        <div className='duration'>
                                1 HR
                        </div>
                    </div>

                    <div className='task task3'>
                        <div className='workBar'/>
                        <div className='name'>
                                Specs for LinkedIn
                        </div>
                        <div className='duration'>
                                2 HRS
                        </div>
                    </div><div className='task task1'>
                        <div className='workBar'/>
                        <div className='name'>
                                Figure out channels
                        </div>
                        <div className='duration'>
                                3 HRS
                        </div>
                    </div>
                    <div className='task task2'>
                        <div className='workBar'/>
                        <div className='name'>
                                Setup FB
                        </div>
                        <div className='duration'>
                                1 HR
                        </div>
                    </div>

                    <div className='task task3'>
                        <div className='workBar'/>
                        <div className='name'>
                                Specs for LinkedIn
                        </div>
                        <div className='duration'>
                                2 HRS
                        </div>
                    </div>
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
