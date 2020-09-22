import React from 'react';
import axios from 'axios';

// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import { Collapse, Input, Modal } from 'antd';
import TopMenu from './TopMenu';
import './style.scss';
import ProgressPage from './ProgressPage';
import CardsPage from './CardsSpace';
import { connect } from 'react-redux';
import { user } from '../_reducers';
import { userService } from '../_services';

const { TextArea } = Input;

const { Panel } = Collapse;

// const { TabPane } = Tabs;

class ProjectSpace extends React.Component {
    defaulState = {
        type: 'cards',
        modalVisible: false
    };

    state = {
        ...this.defaulState,
    };

    changePage = (newPage) => {
        this.setState({
            type: newPage
        });
    }

    changeModalValue = ({ target }) => {
        this.setState({
            [target.name]: target.value
        });
    }

    handleOk = async () => {
        const { imputNameValue, imputDescValue } = this.state;
        if (imputNameValue === '' || imputDescValue === '') {
            return;
        }
        const { user } = this.props;
        const ret = await userService.createProject({ name: imputNameValue, desc: imputDescValue, team: user.company.teams[0].id });
        if (ret) {
            this.props.getData();
        }
        this.setState({
            modalVisible: false,
            imputNameValue: '',
            imputDescValue: '',
        });
    };

    handleCancel = () => {
        this.setState({
            modalVisible: false,
            imputNameValue: '',
            imputDescValue: '',
        });
    };

    showModal = () => {
        this.setState({
            modalVisible: true,
        });
    };

    render() {
        const { modalVisible, imputNameValue, imputDescValue } = this.state;
        const { user } = this.props;
        return (
            <div className='ProjectSpace'>
                <TopMenu changeType={this.changePage}/>
                {/* <ProgressPage /> */}
                {
                    user && user.company && this.state.type === 'cards' &&
                    <CardsPage data={user.company} />
                }
                {
                    user && user.company && this.state.type === 'progress' &&
                    <ProgressPage data={user.company} />
                }
                <Modal
                    onCancel={this.handleCancel}
                    onOk={this.handleOk}
                    title='Choose a name'
                    visible={modalVisible}
                >
                    <Input name='imputNameValue' onChange={this.changeModalValue} placeholder='Please enter a name' value={imputNameValue}/>
                    <TextArea name='imputDescValue' onChange={this.changeModalValue} placeholder='Please enter a description' rows={4} style={{ marginTop: '10px' }} value={imputDescValue}/>
                </Modal>
                <div className={'newProject clickable'} onClick={() => this.showModal()}>
                    <div className='content'>
                        Create a new project
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { user } = state;
    return {
        user
    };
};

export default connect(mapStateToProps)(ProjectSpace);
