import React from 'react';
import { Progress } from 'antd';
import './style.scss'
import { connect } from 'react-redux'
import MoodTracker from './moodTracker'

// const { TabPane } = Tabs;
let defmoodModal = true

class MainBody extends React.PureComponent {
    defaulState = {
        moodModal: defmoodModal
    };

    state = {
        ...this.defaulState,
    };

    showModal = () => {
        this.setState({
            moodModal: true,
        });
      };
    
      handleOk = () => {
        defmoodModal = false
        this.setState({
            moodModal: false,
        });
      };
    
      handleCancel = () => {
        defmoodModal = false
        this.setState({
            moodModal: false,
        });
      };

    render() {
        const { user } = this.props
        const { moodModal } = this.state
        return (
            <div className="MainBody">
                    {
                        moodModal && <MoodTracker user={user} onOk={this.handleOk} onCancel={this.handleCancel}/>
                    }
                <div className="TitlesBlock">
                    <div className="Greetings">
                        Good morning, { user.firstName }
                    </div>
                    <div className="Workload">
                        Your weekly workload
                    </div>
                </div>
                <div className="TasksBlock">
                    <div className="TasksTitle">
                        You have <span className="OrangeTitle">3 tasks</span> due today for an estimated total of <span className="OrangeTitle">6 hours</span>.
                    </div>
                    <div className="TasksBarsBlock">
                        <div className="TaskOne">
                            This week
                            <Progress
                                strokeColor={{
                                    '0%': '#FFD950',
                                    '100%': '#FF9C41',
                                }}
                                percent={90}
                            />
                        </div>
                        <div className="TaskOne">
                            Week 32
                            <Progress
                                strokeColor={{
                                    '0%': '#FFD950',
                                    '100%': '#FF9C41',
                                }}
                                percent={80}
                            />
                        </div>
                        <div className="TaskOne">
                            Week 33
                            <Progress
                                strokeColor={{
                                    '0%': '#FFD950',
                                    '100%': '#FF3D00',
                                }}
                                percent={100}
                            />
                        </div>
                        <div className="TaskOne">
                            Week 34
                            <Progress
                                strokeColor={{
                                    '0%': '#FFF7AC',
                                    '100%': '#FFB26B',
                                }}
                                percent={40}
                            />
                        </div>
                        
                    </div>
                </div>

                <div className="boxesBlock">
                    <div className="todaysBlock block">
                        <div className="title">
                            Today's tasks
                        </div>
                        <div className="task task1">
                            <div className="workBar"/>
                            <div className="name">
                                Figure out channels
                            </div>
                            <div className="duration">
                                3 HRS
                            </div>
                        </div>
                        <div className="task task2">
                            <div className="workBar"/>
                            <div className="name">
                                Setup FB
                            </div>
                            <div className="duration">
                                1 HR
                            </div>
                        </div>

                        <div className="task task3">
                            <div className="workBar"/>
                            <div className="name">
                                Specs for LinkedIn
                            </div>
                            <div className="duration">
                                2 HRS
                            </div>
                        </div>
                        <div className="seeTasks">
                            See your tasks
                        </div>
                    </div>
                    <div className="weekBlock block">
                        {/* <div className="title">
                            This week at a glance
                        </div>
                        <div className="tasksBlock">
                            <div className="todo">
                                Tasks to do
                            </div>
                            <div className="done">
                                Tasks done
                            </div>
                        </div> */}
                    </div>
                    <div className="inspirationBlock block">
                        <div className="title">
                            Inspiration of the day
                        </div>
                        <div className="content">
                            Our greatest glory is not in never falling, but in rising every time we fall.
                        </div>
                        <div className="author">
                            - Confucius
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { user } = state
    return {
        user
    }
}


export default connect(mapStateToProps)(MainBody)