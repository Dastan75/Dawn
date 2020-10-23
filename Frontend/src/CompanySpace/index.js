import React from 'react';
import axios from 'axios';

// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import { Collapse } from 'antd';
import { RightOutlined } from '@ant-design/icons';
import './style.scss';
import { connect } from 'react-redux';

const monthFormat = 'YYYYMM';

const { Panel } = Collapse;

// const { TabPane } = Tabs;

class CompanySpace extends React.PureComponent {
    defaulState = {

    };

    state = {
        ...this.defaulState,
    };

    componentDidMount = () => {
        // this.props.getUser('abc')
    }

    render() {
        const { user } = this.props;
        return (
            <>
                {
                    user && user.company &&
                    <div className='CompanySpace'>
                        <div className='Introduction'>
                        This is your company space
                        </div>
                        <div className='BigTitle'>
                        What's up at { user.company.name }
                        </div>
                        <div className='boxesBlock'>
                            <div className='OneBox'>
                                <div className='Content'>
                                    <div className='Number'>36</div>
                                    <div className='Title'>collaborators</div>
                                </div>
                            </div>
                            <div className='OneBox'>
                                <div className='Content'>
                                    <div className='Number'>5</div>
                                    <div className='Title'>teams</div>
                                </div>
                            </div>
                            <div className='OneBox'>
                                <div className='Content'>
                                    <div className='Number'>12</div>
                                    <div className='Title'>sub-teams</div>
                                </div>
                            </div>
                            <div className='OneBox'>
                                <div className='Content'>
                                    <div className='Number'>54</div>
                                    <div className='Title'>projects</div>
                                </div>
                            </div>

                        </div>
                        <div className='tableBlock'>
                            <div className='menuBlock'>
                                <div className='teamsBlock topMenu'>
                                TEAMS
                                </div>
                                <div className='peopleBlock topMenu'>
                                PEOPLE
                                </div>
                                <div className='projectsBlock topMenu'>
                                PROJECTS
                                </div>
                                <div className='tasksBlock topMenu'>
                                TASKS
                                </div>
                                <div className='spaceBlock topMenu' />
                            </div>
                            <div className='collapseBlock'>
                                <Collapse defaultActiveKey={['0']} ghost>
                                    <Panel header={
                                        <div className='panelTitleBlock'>
                                            <div className='teams contentMenu'>
                                            Marketing
                                            </div>
                                            <div className='people contentMenu'>
                                            27
                                            </div>
                                            <div className='projects contentMenu'>
                                            65
                                            </div>
                                            <div className='tasks contentMenu'>
                                            373
                                            </div>
                                            <div className='seeSpace contentMenu'>
                                            See space <RightOutlined />
                                            </div>
                                        </div>
                                    } key='1'>
                                        <div className='contentBlock'>
                                            <div className='subTeam'>
                                                <div className='subOneBlock'>
                                                    <div className='name subMenu'>
                                                        <div className='dot'/>
                                                    Product Marketing
                                                    </div>
                                                    <div className='people subMenu'>
                                                    10
                                                    </div>
                                                    <div className='projects subMenu'>
                                                    20
                                                    </div>
                                                    <div className='tasks subMenu'>
                                                    139
                                                    </div>
                                                </div>
                                                <div className='subOneBlock'>
                                                    <div className='name subMenu'>
                                                        <div className='dot'/>
                                                    Product Marketing
                                                    </div>
                                                    <div className='people subMenu'>
                                                    10
                                                    </div>
                                                    <div className='projects subMenu'>
                                                    20
                                                    </div>
                                                    <div className='tasks subMenu'>
                                                    139
                                                    </div>
                                                </div>
                                                <div className='subOneBlock'>
                                                    <div className='name subMenu'>
                                                        <div className='dot'/>
                                                    Product Marketing
                                                    </div>
                                                    <div className='people subMenu'>
                                                    10
                                                    </div>
                                                    <div className='projects subMenu'>
                                                    20
                                                    </div>
                                                    <div className='tasks subMenu'>
                                                    139
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Panel>
                                    <Panel header={
                                        <div className='panelTitleBlock'>
                                            <div className='teams contentMenu'>
                                            Design
                                            </div>
                                            <div className='people contentMenu'>
                                            27
                                            </div>
                                            <div className='projects contentMenu'>
                                            65
                                            </div>
                                            <div className='tasks contentMenu'>
                                            373
                                            </div>
                                            <div className='seeSpace contentMenu'>
                                            See space  <RightOutlined />
                                            </div>
                                        </div>
                                    } key='2'>
                                        <div className='contentBlock'>
                                            <div className='subTeam'>
                                                <div className='subOneBlock'>
                                                    <div className='name subMenu'>
                                                        <div className='dot'/>
                                                    Product Marketing
                                                    </div>
                                                    <div className='people subMenu'>
                                                    10
                                                    </div>
                                                    <div className='projects subMenu'>
                                                    20
                                                    </div>
                                                    <div className='tasks subMenu'>
                                                    139
                                                    </div>
                                                </div>
                                                <div className='subOneBlock'>
                                                    <div className='name subMenu'>
                                                        <div className='dot'/>
                                                    Product Marketing
                                                    </div>
                                                    <div className='people subMenu'>
                                                    10
                                                    </div>
                                                    <div className='projects subMenu'>
                                                    20
                                                    </div>
                                                    <div className='tasks subMenu'>
                                                    139
                                                    </div>
                                                </div>
                                                <div className='subOneBlock'>
                                                    <div className='name subMenu'>
                                                        <div className='dot'/>
                                                    Product Marketing
                                                    </div>
                                                    <div className='people subMenu'>
                                                    10
                                                    </div>
                                                    <div className='projects subMenu'>
                                                    20
                                                    </div>
                                                    <div className='tasks subMenu'>
                                                    139
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Panel>
                                    <Panel header={
                                        <div className='panelTitleBlock'>
                                            <div className='teams contentMenu'>
                                            Sales
                                            </div>
                                            <div className='people contentMenu'>
                                            27
                                            </div>
                                            <div className='projects contentMenu'>
                                            65
                                            </div>
                                            <div className='tasks contentMenu'>
                                            373
                                            </div>
                                            <div className='seeSpace contentMenu'>
                                            See space  <RightOutlined />
                                            </div>
                                        </div>
                                    } key='3'>
                                        <div className='contentBlock'>
                                            <div className='subTeam'>
                                                <div className='subOneBlock'>
                                                    <div className='name subMenu'>
                                                        <div className='dot'/>
                                                    Product Marketing
                                                    </div>
                                                    <div className='people subMenu'>
                                                    10
                                                    </div>
                                                    <div className='projects subMenu'>
                                                    20
                                                    </div>
                                                    <div className='tasks subMenu'>
                                                    139
                                                    </div>
                                                </div>
                                                <div className='subOneBlock'>
                                                    <div className='name subMenu'>
                                                        <div className='dot'/>
                                                    Product Marketing
                                                    </div>
                                                    <div className='people subMenu'>
                                                    10
                                                    </div>
                                                    <div className='projects subMenu'>
                                                    20
                                                    </div>
                                                    <div className='tasks subMenu'>
                                                    139
                                                    </div>
                                                </div>
                                                <div className='subOneBlock'>
                                                    <div className='name subMenu'>
                                                        <div className='dot'/>
                                                    Product Marketing
                                                    </div>
                                                    <div className='people subMenu'>
                                                    10
                                                    </div>
                                                    <div className='projects subMenu'>
                                                    20
                                                    </div>
                                                    <div className='tasks subMenu'>
                                                    139
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Panel>
                                    <Panel header={
                                        <div className='panelTitleBlock'>
                                            <div className='teams contentMenu'>
                                            Product
                                            </div>
                                            <div className='people contentMenu'>
                                            27
                                            </div>
                                            <div className='projects contentMenu'>
                                            65
                                            </div>
                                            <div className='tasks contentMenu'>
                                            373
                                            </div>
                                            <div className='seeSpace contentMenu'>
                                            See space  <RightOutlined />
                                            </div>
                                        </div>
                                    } key='3'>
                                        <div className='contentBlock'>
                                            <div className='subTeam'>
                                                <div className='subOneBlock'>
                                                    <div className='name subMenu'>
                                                        <div className='dot'/>
                                                    Product Marketing
                                                    </div>
                                                    <div className='people subMenu'>
                                                    10
                                                    </div>
                                                    <div className='projects subMenu'>
                                                    20
                                                    </div>
                                                    <div className='tasks subMenu'>
                                                    139
                                                    </div>
                                                </div>
                                                <div className='subOneBlock'>
                                                    <div className='name subMenu'>
                                                        <div className='dot'/>
                                                    Product Marketing
                                                    </div>
                                                    <div className='people subMenu'>
                                                    10
                                                    </div>
                                                    <div className='projects subMenu'>
                                                    20
                                                    </div>
                                                    <div className='tasks subMenu'>
                                                    139
                                                    </div>
                                                </div>
                                                <div className='subOneBlock'>
                                                    <div className='name subMenu'>
                                                        <div className='dot'/>
                                                    Product Marketing
                                                    </div>
                                                    <div className='people subMenu'>
                                                    10
                                                    </div>
                                                    <div className='projects subMenu'>
                                                    20
                                                    </div>
                                                    <div className='tasks subMenu'>
                                                    139
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </Panel>
                                </Collapse>
                            </div>
                        </div>
                    </div>
                }
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

export default connect(mapStateToProps)(CompanySpace);

