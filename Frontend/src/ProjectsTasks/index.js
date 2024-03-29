import React from 'react';
import SVGDetails from './SvgIcons/Details'
import SVGConversation from './SvgIcons/Conversation'
import SVGTasks from './SvgIcons/Tasks'
import SVGFiles from './SvgIcons/Files'
import SVGLink from './SvgIcons/Link'
import SVGSearch from './SvgIcons/Search'
import SVGClose from './SvgIcons/Close'
import SVGCards from './SvgIcons/View_Cards'
import SVGTimeline from './SvgIcons/View_Timeline'
import SVGList from './SvgIcons/View_List'
import SVGColumns from './SvgIcons/View_Columns'
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import { DragDropContext, Draggable, Droppable } from 'react-beautiful-dnd';
import { Modal, Input } from 'antd';
import TaskDetail from '../TaskDetails'
import { userService } from '../_services'
import {
    withRouter  
} from "react-router-dom";
import './style.scss'

class ProjectsTasks extends React.Component {
    defaulState = {
        projectName: '',
        imputNameValue: '',
        modalType: '',
        selectedCat: '',
        columns: [
        ],
        taskDetail: null,
    };

    state = {
        ...this.defaulState,
    };


    componentDidMount = async () => {
        const { params: { projectId } } = this.props.match;
        const project = await userService.getProjectById(projectId)
        if (!project) {
            this.props.history.goBack()
            return
        }
        const tmpCat = []
        for (let index = 0; index < project.tasksCategories.length; index++) {
            const category = project.tasksCategories[index];
            if (!category.tasks) {
                category.tasks = []
            }
            if (category.tasksOrder !== 'empty') {
                const listId = category.tasksOrder.split(",")
                for (let ind2 = 0; ind2 < listId.length; ind2++) {
                    const taskId = listId[ind2];
                    const task = project.tasks.find(e => e.id === taskId)
                    if (task) {
                        category.tasks.push(task)
                    }
                }
            }
            tmpCat.push(category)
        }
        tmpCat.sort((a, b) => a.createdAt - b.createdAt)
        this.setState({
            projectName: project.name,
            projectId: project.id,
            columns: tmpCat
        })
    }

    onDragEnd = (result) => {
        const { source, destination } = result;
        const { columns } = this.state
        if (!destination) {
          return;
        }

        let newCol = []
        const tmpCol = columns.find(elemC => elemC.id === source.droppableId)
        const item = tmpCol.tasks[source.index]
        for (let index = 0; index < columns.length; index++) {
            const col = JSON.parse(JSON.stringify(columns[index]));
            
            if (col.id === source.droppableId) {
                col.tasks.splice(source.index, 1);
            }

            if (col.id === destination.droppableId) {
                col.tasks.splice(destination.index, 0, item);
                userService.updateTask({ category: col.id}, item.id)

            }
            newCol.push(col)
        }
        for (let index = 0; index < newCol.length; index++) {
            const col = newCol[index];
            
            if (col.id === source.droppableId && source.droppableId !== destination.droppableId) {
                let newTaskOrder = col.tasks.map(item2 => item2.id)
                if (newTaskOrder.length === 0) {
                    newTaskOrder = ["empty"]
                }
                userService.updateTaskCat({ tasksOrder: newTaskOrder.join()}, col.id)
            }

            if (col.id === destination.droppableId) {
                const newTaskOrder = col.tasks.map(item => item.id)
                userService.updateTaskCat({ tasksOrder: newTaskOrder.join()}, col.id)
            }
        }
        this.setState({
            columns: newCol
        })
    }

    handleOk = async () => {
        const { modalType, imputNameValue, projectId, columns, selectedCat } = this.state;
        if (modalType === 'newGroup') {
            const taskCat = await userService.createTaskCat({ name: imputNameValue, tasksOrder: 'empty', project: projectId })
            if (taskCat) {
                columns.push(taskCat)
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
            const task = await userService.createTask({ name: imputNameValue, project: projectId, category: selectedCat })
            const newCol = []
            if (task) {
                let tmpCat = null
                for (let index = 0; index < columns.length; index++) {
                    const col = columns[index];
                    if (col.id === selectedCat) {
                        if (!col.tasks) {
                            col.tasks = []
                        }
                        col.tasks.push(task)
                        tmpCat = col
                    }
                    newCol.push(col)
                }
                if (tmpCat.tasksOrder === 'empty') {
                    tmpCat.tasksOrder = [task.id]
                } else {
                    const tmp = tmpCat.tasksOrder.split(",")
                    tmp.push(task.id)
                    tmpCat.tasksOrder = tmp
                }
                tmpCat.tasksOrder = tmpCat.tasksOrder.join()
                await userService.updateTaskCat({ tasksOrder: tmpCat.tasksOrder}, tmpCat.id)
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
    
    handleCancel = e => {
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

    changeModalValue = ({target}) => {
        this.setState({
            imputNameValue: target.value
        })
    }

    openTaskDetails = (task) => {
        this.setState({
            taskDetail: task
        })
    }

    render() {
        const { columns, projectName, modalVisible, imputNameValue, taskDetail } = this.state
        return (
            <>
            {
                taskDetail && <TaskDetail data={taskDetail} closeDetails={() => this.setState({ taskDetail: null})}/>
            }
            {!taskDetail &&
            <div className="ProjectsTasks">
                <Modal
                    title="Choose a name"
                    visible={modalVisible}
                    onOk={this.handleOk}
                    onCancel={this.handleCancel}
                    >
                    <Input onChange={this.changeModalValue} placeholder="Please enter a name" value={imputNameValue}/>
                </Modal>
                <div className="projectBar">
                    <div className="progressBar"/>
                    <div className="barLeft">
                        <div onClick={this.props.history.goBack} className="backButton clickable">Back</div>
                        <div className="projectTitle">{projectName}</div>
                        <div className="members">
                            <div className="memberBox">
                                <div className="oneMember">
                                    M
                                </div>
                            </div>
                            <div className="memberBox">
                                <div className="oneMember">
                                    B
                                </div>
                            </div>
                        </div>
                        <div className="faveButton"></div>
                    </div>
                    <div className="barRight">
                        <div className="navBtn clickable">
                            <div className="icon"><SVGDetails/></div>
                            <div className="navTitle">Details</div>
                        </div>
                        <div className="navBtn clickable">
                            <div className="icon"><SVGTasks/></div>
                            <div className="navTitle">Tasks</div>
                        </div>
                        <div className="navBtn clickable">
                            <div className="icon"><SVGConversation/></div>
                            <div className="navTitle">Conversation</div>
                        </div>
                        <div className="navBtn clickable">
                            <div className="icon"><SVGFiles/></div>
                            <div className="navTitle">Files</div>
                        </div>
                        <div className="navBtn clickable">
                            <div className="icon"><SVGLink/></div>
                        </div>
                    </div>
                </div>
                <div className="projectWrapper">
                    <div className="orgNav">
                        {/* <div className="filterBy">Sort by: Due date</div> */}
                        <div className="rightNav">
                            <div className="search"><SVGSearch/></div>
                            <div className="viewFilters">
                                <div className="viewButton"><SVGCards/></div>
                                <div className="viewButton"><SVGList/></div>
                                <div className="viewButton"><SVGColumns/></div>
                                <div className="viewButton"><SVGTimeline/></div>
                            </div>
                        </div>
                    </div>
                    <div className="createNew">
                        <button
                            type="button"
                            className="clickable"
                            onClick={() => this.showModal('newGroup')}
                        >
                            Add new group
                        </button>
                        {/* <button
                            type="button"
                            className="clickable"
                            onClick={() => this.showModal('newItem')}
                        >
                            Add new item
                        </button> */}
                        {/* <button className="circleAdd"><SVGClose/></button> */}
                    </div>
                    <div className="dragBlock">
                        <DragDropContext onDragEnd={this.onDragEnd}>
                        {columns && columns.map((column, index) => {
                            return (
                                <div className="columnBlock" key={column.id}>
                                    <div className="title">
                                        {column.name}
                                    </div>
                                    <div onClick={() => this.showModal('newTask', column.id)} className={`task new clickable`}>
                                        <span className="content">
                                            Create a new task
                                        </span>
                                    </div>
                                    <Droppable droppableId={`${column.id}`}>
                                        {(provided, snapshot) => (
                                            <div
                                                ref={provided.innerRef}
                                                className={`column ${snapshot.isDraggingOver ? "isDraggedOn" : ""}`}
                                                {...provided.droppableProps}
                                            >
                                            {
                                                column.tasks && column.tasks.map((item, index) => (
                                                <Draggable
                                                    key={item.id}
                                                    draggableId={item.id}
                                                    index={index}
                                                    >
                                                    {(provided, snapshot) => (
                                                        <div
                                                        onClick={() => this.openTaskDetails(item)}
                                                        ref={provided.innerRef}
                                                        {...provided.draggableProps}
                                                        {...provided.dragHandleProps}
                                                        className={`task ${snapshot.isDragging ? 'isDragging' : ''}`}>
                                                            <div className="content">
                                                                {item.name}
                                                            </div>
                                                        </div>
                                                    )}
                                                </Draggable>
                                                ))
                                            }
                                                {provided.placeholder}
                                            </div>
                                        )}
                                    </Droppable>
                                </div>
                            )
                        })}
                        </DragDropContext>
                    </div>
                </div>
            </div>}
        </>
        );
    }
}

export default withRouter(ProjectsTasks)
