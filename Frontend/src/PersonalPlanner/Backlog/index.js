import React from 'react';
import { Progress } from 'antd';
import axios from 'axios';
import SVGClose from './SvgIcons/Close'
import SVGArrow from './SvgIcons/Arrow'
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import './style.scss'

// import { Drawer, Button, Radio, Space } from 'antd';

class Backlog extends React.Component {
    defaulState = {
    };

    state = {
        ...this.defaulState,
    };



    render() {
        const { backlogList } = this.props
        return (
                <div className="backlogContainer">                
                    <div className="backlogTitle">My backlog</div>
                    <div onClick={this.props.onClose} className="closeBacklog"><SVGClose/></div>
                    <div className="todaysBlock block">
                        <div className="filter">
                            Sort by: estimated time
                        </div>
                        {
                            backlogList && backlogList.length> 0 &&
                            backlogList.map(item => (
                                <div onClick={() => this.props.selectBacklog(item.id)} id={item.id} className="task task1">
                                    <div className="workBar"/>
                                    <div className="name">
                                        { item.title }
                                    </div>
                                    {/* <div className="duration">
                                        3 HRS
                                    </div> */}
                                </div>
                            ))
                        }

                    </div>
                    <div className="noteToUser">
                        <div className="noteArrow"><SVGArrow/></div>
                        <div className="noteText">Click an item to select it. It will be dropped into your planner to organize your work</div>
                    </div>
                </div>
        );
    }
}

export default Backlog;
