import React from 'react';
import { Progress } from 'antd';
import SVGConversation from './SvgIcons/Conversation';
import SVGSubtasks from './SvgIcons/Subtasks';
import SVGFiles from './SvgIcons/Files';
import SVGTimelog from './SvgIcons/Timelog';
import SVGClose from './SvgIcons/Close';
import SVGAvatar from './SvgIcons/Avatar';
import SVGTime from './SvgIcons/Time';
import SVGStatus from './SvgIcons/Status';

// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import './style.scss';

class TaskDetails extends React.Component {
    defaulState = {
        openPanel: 'viewSubTasks'
    };

    state = {
        ...this.defaulState,
    };

    render() {
        const { data } = this.props;
        const { openPanel } = this.state;
        return (
            <div className='taskOverlay'>
                <div className='taskDetails'>
                    <div className='closeButton' onClick={this.props.closeDetails}><SVGClose/></div>
                    <div className='sideNav'>
                        <div className='navItem subTasks' onClick={() => this.setState({ openPanel: 'viewSubTasks' })}><SVGSubtasks/></div>
                        <div className='navItem conversation' onClick={() => this.setState({ openPanel: 'viewConverse' })}><SVGConversation/></div>
                        <div className='navItem files' onClick={() => this.setState({ openPanel: 'viewFiles' })}><SVGFiles/></div>
                        {/* <div className='navItem timeLog'><SVGTimelog/></div> */}
                    </div>
                    <div className='taskTopBar'>
                        <div className='topBarLeft'>
                            <div className='taskTitle'>{ data.name }</div>
                            <div className='members'>
                                <div className='memberBox'>
                                    <div className='oneMember'>M</div>
                                </div>
                                <div className='memberBox'>
                                    <div className='oneMember'>B</div>
                                </div>
                                <div className='memberBox'>
                                    <div className='oneMember'>C</div>
                                </div>
                            </div>
                            <div className='moreNav' />
                        </div>
                        <div className='topBarRight'>
                            <div className='twoRows'>
                                <div className='rowTitle'>Due date</div>
                                <div className='dueDate'>03 Jun</div>
                            </div>
                            <div className='twoRows'>
                                <div className='rowTitle'>Est. time</div>
                                <div className='estimatedTime'>12h</div>
                            </div>
                            <div className='twoRows'>
                                <div className='rowTitle'>Tracked time</div>
                                <div className='trackedTime'>8h</div>
                            </div>
                            <div className='twoRows'>
                                <div className='rowTitle'>Priority</div>
                                <div className='priorityLabel'>Very high</div>
                            </div>
                            <div className='twoRows'>
                                <div className='rowTitle'>Status</div>
                                <div className='statusLabel'>In review</div>
                            </div>
                        </div>
                    </div>
                    <div className='taskMainDetails'>
                        <div className='leftDetails'>
                            <div className='title'>Important details</div>
                            <div className='smallTitle'>Objectives</div>
                            <div className='description'>
                                Switch the messaging of the homepage to be targeted towards marketers a lot more than it used to but we need to cater for agencies still.
                            </div>
                            <div className='smallTitle'>Description</div>
                            <div className='description'>
                                We need to rethink, restructure and redesign our current homepage to make sure its whole messaging is targeting marketers.
                            </div>
                            <div className='smallTitle'>Stakeholders</div>
                            <div className='members'>
                                <div className='memberBox membersBoxSmall'>
                                    <div className='oneMember oneMemberSmall'>M</div>
                                </div>
                                <div className='memberBox membersBoxSmall'>
                                    <div className='oneMember oneMemberSmall'>B</div>
                                </div>
                                <div className='memberBox membersBoxSmall'>
                                    <div className='oneMember oneMemberSmall'>C</div>
                                </div>
                            </div>
                            <div className='smallTitle'>Target Audience</div>
                            <div className='targetLabel'>B2B</div>
                            <div className='targetLabel'>Marketing Operatives</div>
                            <div className='smallTitle'>Progress</div>
                            <Progress
                                percent={80}
                                strokeColor={{
                                    '0%': '#FFD950',
                                    '100%': '#FF3D00',
                                }}
                            />
                        </div>
                        <div className='viewSubTasks rightDetails'>
                            { openPanel === 'viewConverse' &&
                            <div className='viewConverse'>
                                <div className='contents'>
                                    <div className='title'>As it happens</div>
                                    <div className='converseRow'>
                                        <div className='avatar' />
                                        <div className='comment'>I have attached different mockups for the landing page we’re about to launch, have a look @ken</div>
                                        <div className='timeStamp'>27 June / 15:12 am</div>
                                    </div>
                                    <div className='converseRow'>
                                        <div className='avatar' />
                                        <div className='comment'>I have attached different mockups for the landing page we’re about to launch, have a look @ken</div>
                                        <div className='timeStamp'>27 June / 15:12 am</div>
                                    </div>
                                    <div className='converseRow'>
                                        <div className='action'><span>Maria</span> set the priority to <span>Very High</span></div>
                                        <div className='timeStamp'>27 June / 15:12 am</div>
                                    </div>
                                    <div className='converseRow'>
                                        <div className='action'><span>Maria</span> created this task from a template</div>
                                        <div className='timeStamp'>27 June / 15:12 am</div>
                                    </div>
                                </div>
                                <div className='converseComment'>
                                    <div className='commentButton'>Add comment</div>
                                </div>
                            </div>}
                            { openPanel === 'viewFiles' &&
                            <div className='viewFiles'>
                                <div className='contents'>
                                    <div className='title'>Important files for the task</div>
                                    <div className='smallTitle'>Uploaded files</div>
                                    <div className='filesList'>
                                        <div className='fileItem'>
                                            <div className='fileAttachment' />
                                            <div className='fileName'>file-01.jpg</div>

                                        </div>
                                        <div className='fileItem'>
                                            <div className='fileAttachment' />
                                            <div className='fileName'>file-02.png</div>

                                        </div>
                                        <div className='fileItem'>
                                            <div className='fileAttachment' />
                                            <div className='fileName'>file-01.jpg</div>

                                        </div>
                                        <div className='fileItem'>
                                            <div className='fileAttachment' />
                                            <div className='fileName'>file-02.png</div>

                                        </div>
                                    </div>
                                    <div className='smallTitle'>Linked documents</div>
                                </div>
                                <div className='uploadBar'>
                                    <div className='commentButton'>Drop files here to attach them or browse</div>
                                </div>
                            </div>}
                            { openPanel === 'viewSubTasks' &&
                            <div className='viewSubTasks'>
                                <div className='contents'>
                                    <div className='title'>List of things to do</div>
                                    <div className='taskRow'>
                                        <div className='taskItem'>
                                            <div className='avatar' />
                                            <div className='subtaskTitle'>This is a sub-task example (1/3)</div>
                                            <div className='timeEstimated'>3 hrs</div>
                                            <div className='statusSquare' />
                                        </div>
                                        <div className='checklist'>
                                            <div className='checklistItem'>
                                                <div className='checkbox completed' />
                                                <div className='subtaskTitle'>This is completed checklist item</div>
                                            </div>
                                            <div className='checklistItem'>
                                                <div className='checkbox' />
                                                <div className='subtaskTitle'>This is checklist item</div>
                                            </div>
                                            <div className='checklistAdd'>
                                                <div className='subtaskTitle'>Add a new checklist item</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='taskRow'>
                                        <div className='taskItem'>
                                            <div className='avatar' />
                                            <div className='subtaskTitle'>This is a sub-task example (1/3)</div>
                                            <div className='timeEstimated'>3 hrs</div>
                                            <div className='statusSquare' />
                                        </div>
                                        <div className='checklist'>
                                            <div className='checklistItem'>
                                                <div className='checkbox' />
                                                <div className='subtaskTitle'>This is checklist item</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='subtaskAdd'>
                                        <div className='avatarAdd'><SVGAvatar/></div>
                                        <div className='subtaskTitle'>This is where to add a new sub-task</div>
                                        <div className='addMoreBox'>
                                            <div className='addTime'><SVGTime/></div>
                                            <div className='addStatus'><SVGStatus/></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            }
                        </div>

                    </div>

                </div>
            </div>
        );
    }
}

export default TaskDetails;
