import React from 'react';
import { Progress, DatePicker, Input, Menu, Dropdown } from 'antd';
import SVGConversation from './SvgIcons/Conversation';
import SVGSubtasks from './SvgIcons/Subtasks';
import SVGFiles from './SvgIcons/Files';
import SVGTimelog from './SvgIcons/Timelog';
import SVGClose from './SvgIcons/Close';
import SVGAvatar from './SvgIcons/Avatar';
import SVGTime from './SvgIcons/Time';
import SVGStatus from './SvgIcons/Status';
import moment from 'moment';
import { userService } from '../_services';
import { DownOutlined } from '@ant-design/icons';
import { PriorityUrgent, PriorityHigh, PriorityMedium, PriorityLow } from './SvgIcons/Priority';

// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import './style.scss';

const dateFormatList = 'DD/MM/YYYY';

const today = moment().format(dateFormatList);

// console.log('Today', today);

class TaskDetails extends React.Component {
    defaulState = {
        openPanel: 'viewSubTasks',
        onUpdate: false,
        task: {
            column: {}
        },
        subtasks: []
    };

    state = {
        ...this.defaulState,
        task: this.props.data || {},
    };

    componentDidMount() {
        let subtasks = [];
        if (this.props.data.subtask) {
            subtasks = JSON.parse(this.props.data.subtask);
            if (!Array.isArray(subtasks)) {
                subtasks = [];
            }
        }
        this.setState({
            subtasks
        });
    }

    handleMenuClickEstTime = (e) => {
        const { task } = this.state;
        task.estTime = e.key;
        this.setState({
            task: { ...task }
        });
    };

    handleMenuClickPriority = (e) => {
        const { task } = this.state;
        task.priority = e.key;
        this.setState({
            task: { ...task }
        });
    };

    addNewSubT = () => {
        const { subtasks, task } = this.state;
        const newSubt = [...subtasks, { name: 'New sub task', checklistItems: [], id: Math.random() }];
        userService.updateTask({ subtask: JSON.stringify(subtasks) }, task.id);
        this.setState({
            subtasks: newSubt
        });
    }

    addSubTask = (subId) => {
        const { subtasks, task } = this.state;
        for (let index = 0; index < subtasks.length; index++) {
            if (subtasks[index].id === subId) {
                subtasks[index].checklistItems.push({ name: 'This is a checklist item', id: Math.random(), checked: false });
            }
        }
        const percent = this.getNewPercent(subtasks);
        userService.updateTask({ subtask: JSON.stringify(subtasks), percent }, task.id);

        // subtasks[subTaskItemId].checklistItems[checkItemId].checked = !subtasks[subTaskItemId].checklistItems[checkItemId].checked
        const newSubt = [...subtasks];
        task.percent = percent;
        const newTask = { ...task };
        this.setState({
            subtasks: newSubt,
            tasl: newTask
        });
    }

    getNewPercent = (subtasks) => {
        let open = 0;
        let finished = 0;
        for (let index = 0; index < subtasks.length; index++) {
            for (let index2 = 0; index2 < subtasks[index].checklistItems.length; index2++) {
                if (subtasks[index].checklistItems[index2].checked) {
                    finished = finished + 1;
                } else {
                    open = open + 1;
                }
            }
        }
        if (open === 0 && finished === 0) {
            return 0;
        }
        const result = finished / (open + finished);
        return Math.round(result * 100);
    }

    checkItem = (checkItemId, subTaskItemId) => {
        const { subtasks, task } = this.state;
        for (let index = 0; index < subtasks.length; index++) {
            if (subtasks[index].id === subTaskItemId) {
                for (let index2 = 0; index2 < subtasks[index].checklistItems.length; index2++) {
                    if (subtasks[index].checklistItems[index2].id === checkItemId) {
                        subtasks[index].checklistItems[index2].checked = !subtasks[index].checklistItems[index2].checked;
                    }
                }
            }
        }
        const percent = this.getNewPercent(subtasks);
        userService.updateTask({ subtask: JSON.stringify(subtasks), percent }, task.id);

        // subtasks[subTaskItemId].checklistItems[checkItemId].checked = !subtasks[subTaskItemId].checklistItems[checkItemId].checked
        const newSubt = [...subtasks];
        task.percent = percent;
        const newTask = { ...task };
        this.setState({
            subtasks: newSubt,
            tasl: newTask
        });
    }

    changeValue = (e) => {
        const { value, name } = e.target;
        const { task } = this.state;
        task[name] = value;
        this.setState({
            task: { ...task }
        });

        // userService.updateTask({ subtask: JSON.stringify(subtasks) }, task.id);
    }

    onChangeMode = async () => {
        const { onUpdate, task, subtasks } = this.state;
        task.subtask = JSON.stringify(subtasks);
        if (onUpdate) {
            await userService.updateTask({ ...task }, task.id);
            this.props.getData();
        }
        this.setState({
            onUpdate: !onUpdate
        });
    }

    render() {
        const { openPanel, onUpdate, task, subtasks } = this.state;
        console.log('TASK DETAILS STATE', this.state);
        const menuEstTime = (
            <Menu onClick={this.handleMenuClickEstTime}>
                <Menu.Item key={1}>1H</Menu.Item>
                <Menu.Item key={2}>2H</Menu.Item>
                <Menu.Item key={3}>3H</Menu.Item>
                <Menu.Item key={4}>4H</Menu.Item>
                <Menu.Item key={5}>5H</Menu.Item>
                <Menu.Item key={6}>6H</Menu.Item>
                <Menu.Item key={7}>7H</Menu.Item>
                <Menu.Item key={8}>8H</Menu.Item>
            </Menu>
        );
        const menuPriority = (
            <Menu onClick={this.handleMenuClickPriority}>
                <Menu.Item className='menuPrioOne' key={'urgent'}>Urgent <PriorityUrgent /></Menu.Item>
                <Menu.Item className='menuPrioOne' key={'high'}>High <PriorityHigh /></Menu.Item>
                <Menu.Item className='menuPrioOne' key={'medium'}>Medium <PriorityMedium /></Menu.Item>
                <Menu.Item className='menuPrioOne' key={'low'}>Low <PriorityLow /></Menu.Item>
            </Menu>
        );
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

                            <div className='taskTitle'>
                                {
                                    !onUpdate && task.title
                                }
                                {
                                    onUpdate && <Input name='title' onChange={this.changeValue} value={task.title}/>
                                }
                            </div>
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
                        </div>
                        <div className='topBarRight'>
                            <div className='twoRows'>
                                <div className='rowTitle'>Due date</div>
                                <div className='dueDate'>
                                    {/* {
                                        onUpdate && <DatePicker defaultValue={moment('01/01/2020', dateFormatList[0])} format={dateFormatList} />
                                    } */}
                                    {/* {
                                        !onUpdate && <span>{today}</span>
                                    } */}
                                    <span>{today}</span>
                                </div>
                            </div>
                            <div className='twoRows'>
                                <div className='rowTitle'>Est. time</div>
                                {

                                    // <Input onChange={this.changeValue} name="estTime" placeholder="No Est. time" value={`${task.estTime}H`}/>
                                    onUpdate &&
                                    <Dropdown overlay={menuEstTime}>
                                        <span className='ant-dropdown-link clickable' onClick={(e) => e.preventDefault()}>
                                            { task.estTime ? `${task.estTime}H` : 'No Est. time' } <DownOutlined />
                                        </span>
                                    </Dropdown>
                                }
                                {
                                    !onUpdate &&
                                    (task.estTime ? <div className='estimatedTime'>{task.estTime}H</div> : <span className='emptyText'>No Est. time</span>)
                                }
                            </div>
                            <div className='twoRows'>
                                <div className='rowTitle'>Tracked time</div>
                                <div className='trackedTime'>8h</div>
                            </div>
                            <div className='twoRows'>
                                <div className='rowTitle'>Priority</div>
                                {/* <div className='priorityLabel'>Very high</div> */}
                                {

                                    // <Input onChange={this.changeValue} name="estTime" placeholder="No Est. time" value={`${task.estTime}H`}/>
                                    onUpdate &&
                                    <Dropdown overlay={menuPriority}>
                                        <span className={`priorityLabel ${task.priority} clickable`} onClick={(e) => e.preventDefault()}>
                                            { task.priority ? `${task.priority}` : 'Medium' } <DownOutlined />
                                        </span>
                                    </Dropdown>
                                }
                                {
                                    !onUpdate &&
                                    (task.priority ?
                                        <div className={`priorityLabel ${task.priority}`}>
                                            {task.priority}
                                        </div> :
                                        <div className='priorityLabel medium'>Medium</div>)
                                }
                            </div>
                            <div className='twoRows'>
                                <div className='rowTitle'>Status</div>
                                {/* <div className='statusLabel'>{task.column.name}</div> */}
                            </div>
                            <div className='moreNav clickable' onClick={this.onChangeMode}>
                                <svg fill='none' height='32' viewBox='0 0 32 32' width='32' xmlns='http://www.w3.org/2000/svg'>
                                    <path clipRule='evenodd' d='M17.3633 8.04627C17.3358 8.06848 17.3091 8.09237 17.2836 8.11793C17.2579 8.14354 17.234 8.17019 17.2117 8.19775L8.57862 16.8278C8.50554 16.9009 8.4366 16.9778 8.37208 17.058C8.32263 17.0921 8.27556 17.1311 8.23157 17.1751C8.05815 17.3484 7.96169 17.5696 7.94218 17.7961C7.9047 17.8909 7.8724 17.9878 7.84556 18.0863L6.03513 24.7374C5.94091 25.0835 6.03932 25.4536 6.29302 25.7072C6.54671 25.9608 6.91683 26.0591 7.26294 25.9648L13.9103 24.1534C13.9194 24.1509 13.9285 24.1483 13.9376 24.1455C14.0211 24.1202 14.1051 24.091 14.1889 24.0577C14.4191 24.0405 14.6445 23.9439 14.8207 23.7678C14.868 23.7205 14.9096 23.6696 14.9455 23.616C15.0214 23.5538 15.095 23.4864 15.1653 23.4138L25.1716 13.4203C26.275 12.3162 26.275 10.5214 25.1716 9.41736L22.5839 6.82829C21.4803 5.72401 19.6858 5.7239 18.582 6.82796L17.3633 8.04627ZM19.9963 8.24211C20.3189 7.9193 20.8467 7.9193 21.1693 8.24211L23.757 10.8312C24.0798 11.1542 24.0796 11.6833 23.757 12.0064L23.1698 12.5928L19.4086 8.82957L19.9963 8.24211ZM14.1095 21.6417L21.7547 14.0062L17.9942 10.2435L10.3524 17.8825L14.1095 21.6417ZM9.44957 19.8084L8.42417 23.5755L12.1892 22.5495L9.44957 19.8084Z' fill='#272343' fillRule='evenodd'/>
                                </svg>
                                { onUpdate ? 'Save' : 'Edit' }
                            </div>
                        </div>
                    </div>
                    <div className='taskMainDetails'>
                        <div className='leftDetails'>
                            <div className='title'>Important details</div>
                            <div className='smallTitle'>Objectives</div>
                            <div className='description'>
                                {
                                    onUpdate && <Input.TextArea name='objectives' onChange={this.changeValue} placeholder='Please write a objective' value={task.objectives}/>
                                }
                                {
                                    !onUpdate &&
                                    (task.objectives || <span className='emptyText'>No objectives</span>)
                                }
                            </div>
                            <div className='smallTitle'>Description</div>
                            <div className='description'>
                                {
                                    onUpdate && <Input.TextArea name='notes' onChange={this.changeValue} placeholder='Please write a description' value={task.notes }/>
                                }
                                {
                                    !onUpdate &&
                                    (task.notes || <span className='emptyText'>No description</span>)
                                }
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
                                percent={task.percent}
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
                                    {/* <div className='taskRow'>
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
                                    </div> */}
                                    {
                                        subtasks && subtasks.map((subTaskItem) => (
                                            <div className='taskRow' key={subTaskItem.id}>
                                                <div className='taskItem'>
                                                    <div className='avatar' />
                                                    <div className='subtaskTitle'>{subTaskItem.name} ({subTaskItem.checklistItems.filter((item) => item.checked === true).length}/{subTaskItem.checklistItems.length})</div>
                                                    {/* <div className='timeEstimated'>3 hrs</div> */}
                                                    <div className='statusSquare' />
                                                </div>
                                                <div className='checklist'>
                                                    {
                                                        subTaskItem.checklistItems && subTaskItem.checklistItems.map((checkItem) => (
                                                            <div className='checklistItem clickable' key={checkItem.id}>
                                                                <div className={`checkbox ${checkItem.checked ? 'completed' : ''}`} onClick={() => this.checkItem(checkItem.id, subTaskItem.id)} />
                                                                <div className='subtaskTitle'>{checkItem.name}</div>
                                                            </div>
                                                        ))
                                                    }
                                                    <div className='checklistAdd clickable' onClick={() => this.addSubTask(subTaskItem.id)}>
                                                        <div className='subtaskTitle'>Add a new checklist item</div>
                                                    </div>
                                                </div>
                                            </div>
                                        ))
                                    }
                                    <div className='subtaskAdd'>
                                        <div className='avatarAdd clickable' onClick={() => this.addNewSubT()}><SVGAvatar/></div>
                                        <div className='subtaskTitle clickable' onClick={() => this.addNewSubT()}>This is where to add a new sub-task</div>
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
