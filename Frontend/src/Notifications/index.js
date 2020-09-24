import React from 'react';
import axios from 'axios';
import SVGCalendar from './SvgIcons/Calendar';
import SVGConversation from './SvgIcons/Conversation';
import SVGHeart from './SvgIcons/Heart';

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
                    <div className='NotifsSpace'>
                        <div className='Introduction'>
                        Catch up on what happened
                        </div>
                        <div className='BigTitle'>
                        Notifications
                        </div>

                        <div className='tableBlock'>
                            <div className='navTabs'>
                                <div className='dualTabs'>
                                    <div className='tabItem'>New</div>
                                    <div className='tabItem'>Cleared</div>
                                </div>
                                <div className='clearBtn'>Clear all</div>
                            </div>
                            <div className='dayContainer'>
                                <div className='dayTitle'>Today</div>
                                <div className='notifContainer'>
                                    <div className='breadcrumbTitle'>Marketing &rarr; Social Media 2021</div>
                                    <div className='notifRow'>
                                        <div className='notifBox'>
                                            <div className='notifLeft'>
                                                <div className='notifTitle'>Social Media Plan</div>
                                            </div>
                                            <div className='notifRight'>
                                                <div className='notifNote'>July 21</div>
                                                <div className='notifTag'>Overdue</div>
                                                <div className='notifIcon'><SVGCalendar/></div>
                                            </div>
                                        </div>
                                        <div className='notifTickbox' />
                                    </div>
                                </div>
                                <div className='notifContainer'>
                                    <div className='breadcrumbTitle'>Design &rarr; Website</div>
                                    <div className='notifRow'>
                                        <div className='notifBox'>
                                            <div className='notifLeft'>
                                                <div className='notifTitle'>Homepage Redesign</div>
                                            </div>
                                            <div className='notifRight'>
                                                <div className='notifNote'>This task has a new comment from </div>
                                                <div className='notifTag'>Comment</div>
                                                <div className='notifIcon'><SVGConversation/></div>
                                            </div>
                                        </div>
                                        <div className='notifTickbox' />
                                    </div>
                                </div>
                            </div>
                            <div className='dayContainer'>
                                <div className='dayTitle'>Today</div>
                                <div className='notifContainer'>
                                    <div className='breadcrumbTitle'>Marketing &rarr; Social Media 2021</div>
                                    <div className='notifRow'>
                                        <div className='notifBox'>
                                            <div className='notifLeft'>
                                                <div className='notifTitle'>Social Media Plan</div>
                                            </div>
                                            <div className='notifRight'>
                                                <div className='notifNote' />
                                                <div className='notifTag'>Review</div>
                                                <div className='notifIcon'><SVGHeart/></div>
                                            </div>
                                        </div>
                                        <div className='notifTickbox' />
                                    </div>
                                </div>
                                <div className='notifContainer'>
                                    <div className='breadcrumbTitle'>Design &rarr; SEM Landing Pages</div>
                                    <div className='notifRow'>
                                        <div className='notifBox'>
                                            <div className='notifLeft review'>
                                                <div className='notifAvatar' />
                                                <div className='notifReview'>The work you did for the new SEM landing pages is superb, I just wanted you to know that!</div>
                                            </div>
                                            <div className='notifRight'>
                                                <div className='notifNote' />
                                                <div className='notifTag'>Review</div>
                                                <div className='notifIcon'><SVGHeart/></div>
                                            </div>
                                        </div>
                                        <div className='notifTickbox' />
                                    </div>
                                </div>
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

