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
                    <div className='screenSpace'>
                        <div className='Introduction'>
                        Let's get down to the details
                        </div>
                        <div className='BigTitle'>
                        Workspaces / Personal
                        </div>
                        <div className='tabbedNav'>
                            <div className='tabElement tabCurrent clickable'>People</div>
                            <div className='tabElement clickable'>Teams</div>
                            <div className='tabElement clickable'>Integrations</div>
                            <div className='tabElement clickable'>Upgrade</div>
                            <div className='tabElement clickable'>Security</div>
                        </div>
                        <div className='searchNav'>
                            Input search etc
                        </div>
                        <div className='tableBlock'>
                            <div className='menuBlock'>
                                <div className='personTitle topMenu'>Name</div>
                                <div className='teamTitle topMenu'>Team</div>
                                <div className='accountTitle topMenu'>Account type</div>
                                <div className='emailTitle topMenu'>Email</div>
                                <div className='activityTitle topMenu'>Last active</div>
                                <div className='spaceBlock topMenu' />
                            </div>
                        </div>

                        <div className='tablePeople'>
                            <div className='rowPeople alt'>
                                <div className='tablePerson'>
                                    <div className='avatar' />
                                    <div className='tableName'>Julia Thompson</div>
                                </div>
                                <div className='tableTeam'>Marketing</div>
                                <div className='tableAccount'><div className='tagAccount tagOwner'>Owner</div></div>
                                <div className='tableEmail'>julie@email.com</div>
                                <div className='tableActivity'>Jun 30</div>
                            </div>
                            <div className='rowPeople'>
                                <div className='tablePerson'>
                                    <div className='avatar' />
                                    <div className='tableName'>Julia Thompson</div>
                                </div>
                                <div className='tableTeam'>Marketing</div>
                                <div className='tableAccount'><div className='tagAccount tagUser'>User</div></div>
                                <div className='tableEmail'>julie@email.com</div>
                                <div className='tableActivity'>Jun 30</div>
                            </div>
                            <div className='rowPeople alt'>
                                <div className='tablePerson'>
                                    <div className='avatar' />
                                    <div className='tableName'>Julia Thompson</div>
                                </div>
                                <div className='tableTeam'>Marketing</div>
                                <div className='tableAccount'><div className='tagAccount tagUser'>User</div></div>
                                <div className='tableEmail'>julie@email.com</div>
                                <div className='tableActivity'>Jun 30</div>
                            </div>
                            <div className='rowPeople'>
                                <div className='tablePerson'>
                                    <div className='avatar' />
                                    <div className='tableName'>Julia Thompson</div>
                                </div>
                                <div className='tableTeam'>Marketing</div>
                                <div className='tableAccount'><div className='tagAccount tagAdmin'>Admin</div></div>
                                <div className='tableEmail'>julie@email.com</div>
                                <div className='tableActivity'>Jun 30</div>
                            </div>
                            <div className='rowPeople alt'>
                                <div className='tablePerson'>
                                    <div className='avatar' />
                                    <div className='tableName'>Julia Thompson</div>
                                </div>
                                <div className='tableTeam'>Marketing</div>
                                <div className='tableAccount'><div className='tagAccount tagAdmin'>Admin</div></div>
                                <div className='tableEmail'>julie@email.com</div>
                                <div className='tableActivity'>Jun 30</div>
                            </div>
                            <div className='rowPeople'>
                                <div className='tablePerson'>
                                    <div className='avatar' />
                                    <div className='tableName'>Julia Thompson</div>
                                </div>
                                <div className='tableTeam'>Marketing</div>
                                <div className='tableAccount'><div className='tagAccount tagGuest'>Guest</div></div>
                                <div className='tableEmail'>julie@email.com</div>
                                <div className='tableActivity'>Jun 30</div>
                            </div>
                            <div className='rowPeople alt'>
                                <div className='tablePerson'>
                                    <div className='avatar' />
                                    <div className='tableName'>Julia Thompson</div>
                                </div>
                                <div className='tableTeam'>Marketing</div>
                                <div className='tableAccount'><div className='tagAccount tagAdmin'>Admin</div></div>
                                <div className='tableEmail'>julie@email.com</div>
                                <div className='tableActivity'>Jun 30</div>
                            </div>
                            <div className='rowPeople'>
                                <div className='tablePerson'>
                                    <div className='avatar' />
                                    <div className='tableName'>Julia Thompson</div>
                                </div>
                                <div className='tableTeam'>Marketing</div>
                                <div className='tableAccount'><div className='tagAccount tagUser'>User</div></div>
                                <div className='tableEmail'>julie@email.com</div>
                                <div className='tableActivity'>Jun 30</div>
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

