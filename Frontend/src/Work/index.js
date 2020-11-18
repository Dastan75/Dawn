import React from 'react';
// import SVGDetails from './SvgIcons/Details';
// import SVGConversation from './SvgIcons/Conversation';
// import SVGTasks from './SvgIcons/Tasks';
// import SVGFiles from './SvgIcons/Files';
// import SVGLink from './SvgIcons/Link';
import SVGSearch from './SvgIcons/Search';
// import SVGClose from './SvgIcons/Close';
import SVGCards from './SvgIcons/View_Cards';
import SVGTimeline from './SvgIcons/View_Timeline';
import SVGList from './SvgIcons/View_List';
import SVGColumns from './SvgIcons/View_Columns';
// import { PriorityUrgent, PriorityHigh, PriorityMedium, PriorityLow } from '../TaskDetails/SvgIcons/Priority';
import { connect } from 'react-redux';
import OneTask from '../ProjectsTasks/oneTask'

// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { Modal, Input } from 'antd';
import TaskDetail from '../TaskDetails';
import { userService } from '../_services';
import {
    withRouter
} from 'react-router-dom';
import './style.scss';



class ProjectsTasks extends React.Component {
    defaulState = {
        projectName: '',
        imputNameValue: '',
        modalType: '',
        selectedCat: '',
        columns: {
            priority: {
                urgent: { name: 'urgent', id: '4', tasks: [] },
                high: { name: 'high', id: '3', tasks: [] },
                medium: { name: 'medium', id: '2', tasks: [] },
                low: { name: 'low', id: '1', tasks: [] },
            }
        },
        taskDetail: null,
    };

    state = {
        ...this.defaulState,
    };

    componentDidMount = () => {
        this.getData();
    }

    getData = async () => {
        // const { params: { projectId } } = this.props.match;
        const { user } = this.props
        const retProj = await userService.getAllProjects(user.id);
        // console.log('RET', retProj);
        // if (!retProj) {
        //     this.props.history.goBack();
        //     return;
        // }
        let tmpCat = { ...this.state.columns }
        // tasks
        for (let index = 0; index < retProj.tasks.length; index++) {
            const task = retProj.tasks[index];
            if (task.owner === user.id) {
                tmpCat.priority[task.priority].tasks.push(task)                        
            }
        }
        // for (let index = 0; index < project.tasksCategories.length; index++) {
        //     const category = project.tasksCategories[index];
        //     if (!category.tasks) {
        //         category.tasks = [];
        //     }
        //     if (category.tasksOrder !== 'empty') {
        //         const listId = category.tasksOrder.split(',');
        //         for (let ind2 = 0; ind2 < listId.length; ind2++) {
        //             const taskId = listId[ind2];
        //             const task = project.tasks.find((e) => e.id === taskId);
        //             if (task) {
        //                 category.tasks.push(task);
        //             }
        //         }
        //     }
        //     tmpCat.push(category);
        // }
        // tmpCat.sort((a, b) => a.createdAt - b.createdAt);
        // console.log("CAT", tmpCat);

        this.setState({
            // projectName: project.name,
            // projectId: project.id,
            columns: tmpCat
        });
    }

    onDragEnd = (result) => {
        // const { source, destination } = result;
        // const { columns } = this.state;
        // if (!destination) {
        //     return;
        // }

        // const newCol = [];
        // const tmpCol = columns.find((elemC) => elemC.id === source.droppableId);
        // const item = tmpCol.tasks[source.index];
        // for (let index = 0; index < columns.length; index++) {
        //     const col = JSON.parse(JSON.stringify(columns[index]));

        //     if (col.id === source.droppableId) {
        //         col.tasks.splice(source.index, 1);
        //     }

        //     if (col.id === destination.droppableId) {
        //         col.tasks.splice(destination.index, 0, item);
        //         userService.updateTask({ category: col.id }, item.id);

        //     }
        //     newCol.push(col);
        // }
        // for (let index = 0; index < newCol.length; index++) {
        //     const col = newCol[index];

        //     if (col.id === source.droppableId && source.droppableId !== destination.droppableId) {
        //         let newTaskOrder = col.tasks.map((item2) => item2.id);
        //         if (newTaskOrder.length === 0) {
        //             newTaskOrder = ['empty'];
        //         }
        //         userService.updateTaskCat({ tasksOrder: newTaskOrder.join() }, col.id);
        //     }

        //     if (col.id === destination.droppableId) {
        //         const newTaskOrder = col.tasks.map((item) => item.id);
        //         userService.updateTaskCat({ tasksOrder: newTaskOrder.join() }, col.id);
        //     }
        // }
        // this.setState({
        //     columns: newCol
        // });
    }

    handleOk = async () => {
        const { modalType, imputNameValue, projectId, columns, selectedCat } = this.state;
        if (modalType === 'newGroup') {
            const taskCat = await userService.createTaskCat({ name: imputNameValue, tasksOrder: 'empty', project: projectId });
            if (taskCat) {
                columns.push(taskCat);
                return this.setState({
                    modalVisible: false,
                    modalType: '',
                    imputNameValue: '',
                    selectedCat: '',
                    columns
                });
            }
        }
        if (modalType === 'newTask') {
            const task = await userService.createTask({ title: imputNameValue, project: projectId, category: selectedCat });
            const newCol = [];
            if (task) {
                let tmpCat = null;
                for (let index = 0; index < columns.length; index++) {
                    const col = columns[index];
                    if (col.id === selectedCat) {
                        if (!col.tasks) {
                            col.tasks = [];
                        }
                        col.tasks.push(task);
                        tmpCat = col;
                    }
                    newCol.push(col);
                }
                if (tmpCat.tasksOrder === 'empty') {
                    tmpCat.tasksOrder = [task.id];
                } else {
                    const tmp = tmpCat.tasksOrder.split(',');
                    tmp.push(task.id);
                    tmpCat.tasksOrder = tmp;
                }
                tmpCat.tasksOrder = tmpCat.tasksOrder.join();
                await userService.updateTaskCat({ tasksOrder: tmpCat.tasksOrder }, tmpCat.id);
                return this.setState({
                    modalVisible: false,
                    modalType: '',
                    imputNameValue: '',
                    selectedCat: '',
                    columns: newCol
                });
            }
        }
        return this.setState({
            modalVisible: false,
            modalType: '',
            imputNameValue: '',
            selectedCat: ''
        });

    };

    handleCancel = (e) => {
        this.setState({
            modalVisible: false,
            modalType: '',
            imputNameValue: '',
            selectedCat: ''
        });
    };

    showModal = (type, selectedCat = '') => {
        this.setState({
            modalVisible: true,
            modalType: type,
            selectedCat
        });
    };

    changeModalValue = ({ target }) => {
        this.setState({
            imputNameValue: target.value
        });
    }

    openTaskDetails = (task, column) => {
        this.setState({
            taskDetail: { ...task, column }
        });
    }

    render() {
        const { columns, projectName, modalVisible, imputNameValue, taskDetail, modalType } = this.state;
        return (
            <>
                {
                    taskDetail && <TaskDetail closeDetails={() => this.setState({ taskDetail: null })} data={taskDetail} getData={this.getData}/>
                }
                {!taskDetail &&
            <div className='ProjectsTasks'>
                <Modal
                    onCancel={this.handleCancel}
                    onOk={this.handleOk}
                    title={`Name your ${modalType === 'newGroup' ? 'group' : 'task'}`}
                    visible={modalVisible}
                >
                    <Input onChange={this.changeModalValue} placeholder={`Name your ${modalType === 'newGroup' ? 'group' : 'task'}`} value={imputNameValue}/>
                </Modal>
                <div className="myWorkTitlesBlock">
                    <div className="intro">
                        Let’s get some things done!
                    </div>
                    <div className="title">
                        My tasks / <span className="project">My projects</span>
                    </div>
                </div>
                <div className='projectWrapper'>
                    <div className='orgNav'>
                        <div className='filterBy'>Sort by: Priority</div>
                        <div className='rightNav'>
                            <div className='search'><SVGSearch/></div>
                            <div className='viewFilters'>
                                <div className='viewButton'><SVGCards/></div>
                                <div className='viewButton'><SVGList/></div>
                                <div className='viewButton'><SVGColumns/></div>
                                <div className='viewButton'><SVGTimeline/></div>
                            </div>
                        </div>
                    </div>
                    <div className='dragBlock'>
                        <DragDropContext onDragEnd={this.onDragEnd}>
                            {columns && Object.keys(columns.priority).map((columnKey, index) => {
                                const column = columns.priority[columnKey]
                                return (
                                <div className='columnBlock' key={column.id}>
                                    <div className='title'>
                                        {column.name}
                                    </div>
                                    <Droppable droppableId={`${column.id}`}>
                                        {(provided, snapshot) => (
                                            <div
                                                className={`column ${snapshot.isDraggingOver ? 'isDraggedOn' : ''}`}
                                                ref={provided.innerRef}
                                                {...provided.droppableProps}
                                            >
                                                {
                                                    column.tasks && column.tasks.map((item, index) => (
                                                        <Draggable
                                                            draggableId={item.id}
                                                            index={index}
                                                            key={item.id}
                                                        >
                                                            {(provided, snapshot) => (
                                                                <OneTask item={item} openTaskDetails={this.openTaskDetails} provided={provided} snapshot={snapshot} />
                                                            )}
                                                        </Draggable>
                                                    ))
                                                }
                                                {provided.placeholder}
                                            </div>
                                        )}
                                    </Droppable>
                                    {/* <div className={'task new clickable'} onClick={() => this.showModal('newTask', column.id)}>
                                        <span className='contentTask'>
                                            + Create a new task
                                        </span>
                                    </div> */}
                                </div>
                                )}
                            )}
                        </DragDropContext>
                    </div>
                </div>
            </div>}
            </>
        );
    }
}

const mapStateToProps = (state) => {
    const { user } = state;
    return {
        user
    };
};

export default withRouter(connect(mapStateToProps)(ProjectsTasks));
