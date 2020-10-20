import React from 'react';
import SVGCards from './SvgIcons/View_Cards';
import SVGTimeline from './SvgIcons/View_Timeline';
import SVGList from './SvgIcons/View_List';
import SVGColumns from './SvgIcons/View_Columns';
import './style.scss';
import { Menu, Dropdown, Button } from 'antd';
import {
    DownOutlined,
} from '@ant-design/icons';
import {
    withRouter
} from 'react-router-dom';
// const { TabPane } = Tabs;

const menuDis = (
    <Menu>
        <Menu.Item key='1' disabled>
            Disabled
        </Menu.Item>
    </Menu>
);

class TopMenu extends React.Component {
    defaulState = {
        projects: []
    };

    state = {
        ...this.defaulState,
    };

    componentDidMount = () => {
        const { data } = this.props
        console.log('TOP', data);
        const projects = []
        for (let index = 0; index < data.teams.length; index++) {
            const team = data.teams[index];
            for (let index2 = 0; index2 < team.projects.length; index2++) {
                projects.push(team.projects[index2])
            }
        }
        this.setState({
            projects
        })
    }

    render() {
        const { projects } = this.state 
        return (
            <div className='TopMenu'>
                <div className='projectChoice'>
                    <Dropdown overlay={
                        <Menu>
                            {
                                projects && projects.map(item => (
                                    <Menu.Item key={item.id} onClick={() => this.props.history.push(`/tasks/${item.id}`)}>
                                        {item.name}
                                    </Menu.Item>
                                ))
                            }
                        </Menu>
                    }>
                        <Button>
                            All Projects <DownOutlined />
                        </Button>
                    </Dropdown>
                </div>
                <div className='teamChoice'>
                    <Dropdown overlay={menuDis}>
                        <Button>
                            Team <DownOutlined />
                        </Button>
                    </Dropdown>
                </div>
                <div className='assigneeChoice'>
                    <Dropdown overlay={menuDis}>
                        <Button>
                            Assignee <DownOutlined />
                        </Button>
                    </Dropdown>
                </div>
                <div className='duedateChoice'>
                    <Dropdown overlay={menuDis}>
                        <Button>
                            Due Date <DownOutlined />
                        </Button>
                    </Dropdown>
                </div>
                <div className='priorityChoice'>
                    <Dropdown overlay={menuDis}>
                        <Button>
                            Priority <DownOutlined />
                        </Button>
                    </Dropdown>
                </div>
                <div className='statusChoice'>
                    <Dropdown overlay={menuDis}>
                        <Button>
                            Status <DownOutlined />
                        </Button>
                    </Dropdown>
                </div>
                {/* <div className='searchBar'>
                    <SVGSearch/>
                </div> */}
                <div className='switchViewBlock'>
                    <div className='oneView current clickable' onClick={() => this.props.changeType('cards')}>
                        <SVGCards/>
                    </div>
                    <div className='oneView clickable' onClick={() => this.props.changeType('progress')}>
                        <SVGList/>
                    </div>
                    <div className='oneView'>
                        <SVGColumns/>
                    </div>
                    <div className='oneView'>
                        <SVGTimeline/>
                    </div>
                </div>
            </div>
        );
    }
}

export default withRouter(TopMenu);
