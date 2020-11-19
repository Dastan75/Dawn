import React from 'react';
import { Progress } from 'antd';
import './style.scss';
import { connect } from 'react-redux';
import MoodTracker from './moodTracker';
import moment from 'moment';
import { userService } from '../_services';
import {
    withRouter
} from 'react-router-dom';
import SVGArrow from './SvgIcons/Arrow';

// const { TabPane } = Tabs;
let defmoodModal = true;

class MainBody extends React.PureComponent {
    defaulState = {
        moodModal: defmoodModal,
        tasks: [],
        workTime: 0
    };

    state = {
        ...this.defaulState,
    };

    componentDidMount = async () => {
        const { user } = this.props;
        let ret2 = await userService.getTasks(user.id);
        let workTime = 0;
        if (!ret2 || !ret2.tasks) {
            ret2 = { tasks: [] };
        }

        // moment(SpecialToDate).isSame(moment(), 'day');

        const taskCal = ret2.tasks.filter((item) => (item.onPlanner === true && moment(item.startDate).isSame(moment(), 'day')));
        for (let index = 0; index < taskCal.length; index++) {
            if (taskCal[index].estTime) {
                workTime = workTime + taskCal[index].estTime;
            }
        }
        this.setState({
            tasks: taskCal,
            workTime
        });
    }

    showModal = () => {
        this.setState({
            moodModal: true,
        });
    };

      handleOk = () => {
          defmoodModal = false;
          this.setState({
              moodModal: false,
          });
      };

      handleCancel = () => {
          defmoodModal = false;
          this.setState({
              moodModal: false,
          });
      };

      render() {
          const { user } = this.props;
          const { moodModal, tasks, workTime } = this.state;
          return (
              <div className='MainBody'>
                  {
                      moodModal && <MoodTracker onCancel={this.handleCancel} onOk={this.handleOk} user={user}/>
                  }
                  <div className='TitlesBlock'>
                      <div className='Greetings'>
                        Good morning, { user.firstName }
                      </div>
                      <div className='Workload'>
                        Your weekly workload
                      </div>
                  </div>
                  <div className='TasksBlock'>
                      <div className='TasksTitle'>
                        You have <span className='OrangeTitle'>{tasks.length} tasks</span> due today for an estimated total of <span className='OrangeTitle'>{workTime} hours</span>.
                      </div>
                      <div className='TasksBarsBlock'>
                          <div className='TaskOne'>
                            This week
                              <Progress
                                  percent={90}
                                  strokeColor={{
                                      '0%': '#FFD950',
                                      '100%': '#FF9C41',
                                  }}
                              />
                          </div>
                          <div className='TaskOne'>
                            Week 32
                              <Progress
                                  percent={80}
                                  strokeColor={{
                                      '0%': '#FFD950',
                                      '100%': '#FF9C41',
                                  }}
                              />
                          </div>
                          <div className='TaskOne'>
                            Week 33
                              <Progress
                                  percent={100}
                                  strokeColor={{
                                      '0%': '#FFD950',
                                      '100%': '#FF3D00',
                                  }}
                              />
                          </div>
                          <div className='TaskOne'>
                            Week 34
                              <Progress
                                  percent={40}
                                  strokeColor={{
                                      '0%': '#FFF7AC',
                                      '100%': '#FFB26B',
                                  }}
                              />
                          </div>
                      </div>
                  </div>

                  <div className='boxesBlock'>
                      <div className='todayBlock block'>
                          <div className='title'>
                                Today's tasks { tasks && tasks.length > 3 ? <span className="moreTasks">{`(+${tasks.length - 3} tasks)`}</span> : ''}
                          </div>
                          {
                              tasks && tasks.length === 0 &&
                              <div className="emptyTasks">
                                <div className='noteToUser'>
                                    <div className='noteArrow'><SVGArrow/></div>
                                    <div className='noteText'>Looks like you’ve got nothing to do today</div>
                                </div>
                                <div className="buttonBlock">
                                    <div className="button clickable">
                                        See my planner
                                    </div>
                                </div>
                              </div>
                          }
                          {
                              tasks && tasks.map((item, index) => {
                                  if (index < 3) {
                                      return (
                                          <div className='task task2' key={item.id} onClick={() => this.props.history.push('/Planner')}>
                                              <div className={`workBar ${item.choosedColor ? 'BG' + item.choosedColor : 'BGcolor1'}`} style={{ width: `${item.percent}%` }}/>
                                              <div className='name'>
                                                  {item.title}
                                              </div>
                                              <div className='duration'>
                                                  {item.estTime} HR
                                              </div>
                                          </div>
                                      );
                                  }

                              })
                          }
                          {/* <div className='task task1'>
                              <div className='workBar'/>
                              <div className='name'>
                                Figure out channels
                              </div>
                              <div className='duration'>
                                3 HRS
                              </div>
                          </div>
                          <div className='task task2'>
                              <div className='workBar'/>
                              <div className='name'>
                                Setup FB
                              </div>
                              <div className='duration'>
                                1 HR
                              </div>
                          </div>

                          <div className='task task3'>
                              <div className='workBar'/>
                              <div className='name'>
                                Specs for LinkedIn
                              </div>
                              <div className='duration'>
                                2 HRS
                              </div>
                          </div> */}
                          <div className='seeMore clickable' onClick={() => this.props.history.push('/Planner')}>
                            See your tasks
                          </div>
                      </div>
                      <div className='weekBlock block'>
                          <div className='title'>
                            This week at a glance
                          </div>
                          <div className='graphBlock'>
                              <div className='graphLegend'>
                                  <div className='todo'>
                                    Tasks to do
                                  </div>
                                  <div className='done'>
                                    Tasks done
                                  </div>
                              </div>
                              <div className='graphContent'>
                                  <div className='graphBars'>
                                      <div className='graphBarItems'>
                                          <div className='graphBarItem'>
                                              <div className='graphBarItemTodo' />
                                              <div className='graphBarItemDone' />
                                          </div>
                                          <div className='graphBarItem'>
                                              <div className='graphBarItemTodo' />
                                              <div className='graphBarItemDone' />
                                          </div>
                                          <div className='graphBarItem'>
                                              <div className='graphBarItemTodo' />
                                              <div className='graphBarItemDone' />
                                          </div>
                                          <div className='graphBarItem'>
                                              <div className='graphBarItemTodo' />
                                              <div className='graphBarItemDone' />
                                          </div>
                                          <div className='graphBarItem'>
                                              <div className='graphBarItemTodo' />
                                              <div className='graphBarItemDone' />
                                          </div>
                                      </div>
                                  </div>
                              </div>
                              <div className='graphDays'>
                                  <div className='dayItem'>Mon</div>
                                  <div className='dayItem'>Tue</div>
                                  <div className='dayItem'>Wed</div>
                                  <div className='dayItem'>Thu</div>
                                  <div className='dayItem'>Fri</div>
                              </div>
                          </div>
                          <div className='seeMore clickable' onClick={() => this.props.history.push('/Planner')}>
                            See your tasks
                          </div>
                      </div>
                      <div className='inspirationBlock block'>
                          <div className='title'>
                            Inspiration of the day
                          </div>
                          <div className='content'>
                            Our greatest glory is not in never falling, but in rising every time we fall.
                          </div>
                          <div className='author'>
                            - Confucius
                          </div>
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

export default withRouter(connect(mapStateToProps)(MainBody));
