import React from 'react';
import SVGCards from './SvgIcons/View_Cards';
import SVGTimeline from './SvgIcons/View_Timeline';
import SVGList from './SvgIcons/View_List';
import SVGColumns from './SvgIcons/View_Columns';
import SVGSearch from './SvgIcons/Search';
import './style.scss';
import { Menu, Dropdown, Button } from 'antd';
import {
    DownOutlined,
    UserOutlined,
} from '@ant-design/icons';

// const { TabPane } = Tabs;

const menu = (
    <Menu>
        <Menu.Item key='1'>
        1st menu item
        </Menu.Item>
        <Menu.Item key='2'>
        2nd menu item
        </Menu.Item>
        <Menu.Item key='3'>
        3rd item
        </Menu.Item>
    </Menu>
);

class TopMenu extends React.Component {
    defaulState = {

    };

    state = {
        ...this.defaulState,
    };

    render() {
        return (
            <div className='TopMenu'>
                <div className='projectChoice'>
                    <Dropdown overlay={menu}>
                        <Button>
                            All Projects <DownOutlined />
                        </Button>
                    </Dropdown>
                </div>
                <div className='teamChoice'>
                    <Dropdown overlay={menu}>
                        <Button>
                            Team <DownOutlined />
                        </Button>
                    </Dropdown>
                </div>
                <div className='assigneeChoice'>
                    <Dropdown overlay={menu}>
                        <Button>
                            Assignee <DownOutlined />
                        </Button>
                    </Dropdown>
                </div>
                <div className='duedateChoice'>
                    <Dropdown overlay={menu}>
                        <Button>
                            Due Date <DownOutlined />
                        </Button>
                    </Dropdown>
                </div>
                <div className='priorityChoice'>
                    <Dropdown overlay={menu}>
                        <Button>
                            Priority <DownOutlined />
                        </Button>
                    </Dropdown>
                </div>
                <div className='statusChoice'>
                    <Dropdown overlay={menu}>
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

export default TopMenu;
