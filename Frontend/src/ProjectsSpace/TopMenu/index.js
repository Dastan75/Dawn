import React from 'react';
import SVGCards from './SvgIcons/View_Cards'
import SVGTimeline from './SvgIcons/View_Timeline'
import SVGList from './SvgIcons/View_List'
import SVGColumns from './SvgIcons/View_Columns'
import SVGSearch from './SvgIcons/Search'
import './style.scss'
import { Menu, Dropdown, Button } from 'antd';
import { 
    DownOutlined,
    UserOutlined,
} from '@ant-design/icons';
// const { TabPane } = Tabs;

const menu = (
    <Menu>
      <Menu.Item key="1" icon={<UserOutlined />}>
        1st menu item
      </Menu.Item>
      <Menu.Item key="2" icon={<UserOutlined />}>
        2nd menu item
      </Menu.Item>
      <Menu.Item key="3" icon={<UserOutlined />}>
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
            <div className="TopMenu">
                <div className="projectChoice">
                    <Dropdown overlay={menu}>
                        <Button>
                            All Projects <DownOutlined />
                        </Button>
                    </Dropdown>
                </div>
                <div className="teamChoice">
                    <Dropdown overlay={menu}>
                        <Button>
                            TEAM <DownOutlined />
                        </Button>
                    </Dropdown>
                </div>
                <div className="assigneeChoice">
                    <Dropdown overlay={menu}>
                        <Button>
                            ASSIGNEE <DownOutlined />
                        </Button>
                    </Dropdown>
                </div>
                <div className="duedateChoice">
                    <Dropdown overlay={menu}>
                        <Button>
                            DUE DATE <DownOutlined />
                        </Button>
                    </Dropdown>
                </div>
                <div className="priorityChoice">
                    <Dropdown overlay={menu}>
                        <Button>
                            PRIORITY <DownOutlined />
                        </Button>
                    </Dropdown>
                </div>
                <div className="statusChoice">
                    <Dropdown overlay={menu}>
                        <Button>
                            STATUS <DownOutlined />
                        </Button>
                    </Dropdown>
                </div>
                <div className="searchBar">
                    <SVGSearch/>
                </div>
                <div className="switchViewBlock">
                    <div onClick={() => this.props.changeType('cards')} className="oneView current clickable">
                        <SVGCards/>
                    </div>
                    <div onClick={() => this.props.changeType('progress')} className="oneView clickable">
                        <SVGList/>
                    </div>
                    <div className="oneView">
                        <SVGColumns/>
                    </div>
                    <div className="oneView">
                        <SVGTimeline/>
                    </div>                    
                </div>
            </div>
        );
    }
}

export default TopMenu;
