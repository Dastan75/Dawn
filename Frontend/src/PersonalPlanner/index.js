import React from 'react';

// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import Paper from '@material-ui/core/Paper';
import { connect } from 'react-redux';
import { ViewState, EditingState } from '@devexpress/dx-react-scheduler';
import {
    Scheduler,
    WeekView,
    MonthView,
    Appointments,
    ViewSwitcher,
    Toolbar,
    DragDropProvider,
    EditRecurrenceMenu,
    AppointmentForm,
    TodayButton,
    DateNavigator
} from '@devexpress/dx-react-scheduler-material-ui';
import Backlog from './Backlog';
import './style.scss';
import moment from 'moment';
import { userService } from '../_services';

const monthFormat = 'YYYY-MM-DD';

const today = moment().format(monthFormat);
console.log('Today', today);
console.log(new Date(2020, 8, 7, 9, 35));

// const appointments = [{
//   title: 'Website Re-Design Plan',
//   startDate: new Date(2020, 8, 7, 9, 35),
//   endDate: new Date(2020, 10, 10, 9, 35),
//   id: 0,
//   rRule: 'FREQ=DAILY;COUNT=2',
//   // exDate: '20180628T063500Z,20180626T063500Z',
// }, {
//   title: 'Book Flights to San Fran for Sales Trip',
//   startDate: new Date(2020, 8, 7, 9, 35),
//   endDate: new Date(2020, 10, 10, 9, 35),
//   id: 1,
//   rRule: 'FREQ=DAILY;COUNT=4',
//   // exDate: '20210627T091100Z',
// }, {
//   title: 'Install New Router in Dev Room',
//   startDate: new Date(2020, 8, 7, 9, 35),
//   endDate: new Date(2020, 10, 10, 9, 35),
//   id: 2,
//   rRule: 'FREQ=WEEKLY;BYDAY=SU,TU,WE;INTERVAL=1;UNTIL=21210828T040000Z',
// }];

const BasicLayout = ({ onFieldChange, appointmentData, ...restProps }) => {
    const onCustomFieldChange = (nextValue) => {
        onFieldChange({ choosedColor: nextValue });
    };

    return (
        <AppointmentForm.BasicLayout
            appointmentData={appointmentData}
            onFieldChange={onFieldChange}
            {...restProps}
        >
            <AppointmentForm.Label
                text='Choose a color'
                type='title'
            />
            <div className='colorGroup'>
                <div className={`color1 circleButton ${appointmentData.choosedColor === 'color1' ? 'selected' : ''}`} onClick={() => onCustomFieldChange('color1')}/>
                <div className={`color2 circleButton ${appointmentData.choosedColor === 'color2' ? 'selected' : ''}`} onClick={() => onCustomFieldChange('color2')}/>
                <div className={`color3 circleButton ${appointmentData.choosedColor === 'color3' ? 'selected' : ''}`} onClick={() => onCustomFieldChange('color3')}/>
                <div className={`color4 circleButton ${appointmentData.choosedColor === 'color4' ? 'selected' : ''}`} onClick={() => onCustomFieldChange('color4')}/>
                <div className={`color5 circleButton ${appointmentData.choosedColor === 'color5' ? 'selected' : ''}`} onClick={() => onCustomFieldChange('color5')}/>
                <div className={`color6 circleButton ${appointmentData.choosedColor === 'color6' ? 'selected' : ''}`} onClick={() => onCustomFieldChange('color6')}/>
                <div className={`color7 circleButton ${appointmentData.choosedColor === 'color7' ? 'selected' : ''}`} onClick={() => onCustomFieldChange('color7')}/>
                <div className={`color8 circleButton ${appointmentData.choosedColor === 'color8' ? 'selected' : ''}`} onClick={() => onCustomFieldChange('color8')}/>
            </div>
        </AppointmentForm.BasicLayout>
    );
};

class PersonalPlanner extends React.Component {

  state = {
      data: [],
      backlogVisible: false,
      backlogList: [],
      selectedBacklog: '',

      // selectedEvent: null
  };

  componentDidMount = async () => {
      const { user } = this.props;
      let ret = await userService.getEvent();
      let ret2 = await userService.getTasks(user.id);

      if (!ret2 || !ret2.tasks) {
          ret2 = { tasks: [] };
      }
      if (!ret) {
          ret = [];
      }

      // console.log('TASKS', ret2);

      const taksCal = ret2.tasks.filter((item) => item.onPlanner === true);
      const taksBack = ret2.tasks.filter((item) => item.onPlanner === false);

      this.setState({
          data: [...ret, ...taksCal],
          backlogList: taksBack
      });
  }

  TimeTableCell = (props) => <WeekView.TimeTableCell className='clickable' onClick={async () => {
      let { data, backlogVisible, selectedBacklog, backlogList } = this.state;

      // console.log('CLICK', bouh)
      // console.log(bouh.view);
      // console.log(bouh.currentTarget);
      if (backlogVisible && selectedBacklog) {
          //   title: 'Book Flights to San Fran for Sales Trip',
          //   startDate: new Date(2020, 8, 7, 9, 35),
          //   endDate: new Date(2020, 10, 10, 9, 35),
          //   id: 1,
          let backlog = {};
          const newBacklogList = backlogList.filter((item) => {
              if (item.id === selectedBacklog) {
                  backlog = item;
                  return false;
              }

              return true;

          });

          // const added = {
          //   title: backlog.name,
          //   startDate: props.startDate,
          //   endDate: props.endDate
          // }
          if (backlog.estTime) {
              backlog.endDate = moment(props.endDate).add(backlog.estTime, 'hours').toDate();
          } else {
              backlog.endDate = props.endDate;
          }
          backlog.startDate = props.startDate;
          backlog.onPlanner = true;
          data = [...data, { id: backlog.id, ...backlog }];
          const ret = await userService.updateTask(backlog, backlog.id);
          this.setState({
          // selectedEvent: { endDate: props.endDate, startDate: props.startDate},
          // backlogVisible: false,
              data,
              backlogList: newBacklogList,
              selectedBacklog: ''
          });
      }
  }} {...props} />;

  selectBacklog = (backlogId) => {
      this.setState({
          selectedBacklog: backlogId
      });
  }

  // commitChanges = ({ added, changed, deleted }) => {
  //   this.setState((state) => {
  //     let { data } = state;
  //     if (added) {
  //       const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
  //       data = [...data, { id: startingAddedId, ...added }];
  //     }
  //     if (changed) {
  //       data = data.map(appointment => (
  //         changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
  //     }
  //     if (deleted !== undefined) {
  //       data = data.filter(appointment => appointment.id !== deleted);
  //     }
  //     return { data };
  //   });
  // }
  commitChanges = async ({ added, changed, deleted }) => {
      const { user } = this.props;
      let { data } = this.state;

      // console.log('Data', data);

      //   console.log('commitChanges Add', added);
      //   console.log('commitChanges Change', changed);
      //   console.log('commitChanges Delete', deleted);

      if (added) {
          const copyTask = { ...added };
          copyTask.owner = user.id;
          const ret = await userService.createEvent(copyTask);
          data = [...data, ret];
      }
      if (changed) {
      // for (let index = 0; index < data.length; index += 1) {
      //   // data[index];

          // }
          for (let index = 0; index < Object.keys(changed).length; index++) {
              const elemKey = Object.keys(changed)[index];
              const pos = data.findIndex((item) => item.id === elemKey);
              data[pos] = { ...data[pos], ...changed[elemKey] };
              userService.updateTask(data[pos], elemKey);
          }

          // data = data.map(appointment => (
          //     changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
          // }

      }
      this.setState({
          data: [...data]
      });
  }

  showDrawer = () => {
      this.setState({
          backlogVisible: true,
      });
  };

  onClose = () => {
      this.setState({
          backlogVisible: false,
          selectedBacklog: ''
      });
  };

  render() {
      const { data, currentDate, backlogVisible, addedAppointment, backlogList } = this.state;

      // console.log('PLANNER STATE', this.state);
      return (
          <div className={`PersonalPlanner ${this.state.selectedBacklog.length === 0 ? '' : 'clickedBacklog'}`}>
              {
                  backlogVisible && <Backlog backlogList={backlogList} onClose={this.onClose} selectBacklog={this.selectBacklog} selectedBacklog={this.state.selectedBacklog}/>
              }
              {/* <div className='clickable' onClick={this.showDrawer}>Start planning your week</div> */}
              {/* <div>My personal planner</div> */}
              <div className='headerBlock'>
                  <div className='subTitle'>
                    Start planning your week
                  </div>
                  <div className='titleBlock'>
                      <div className='title'>
                        My personal planner
                      </div>
                      <div className='backlogButton clickable' onClick={this.showDrawer}>
                        See my backlog
                      </div>
                  </div>
              </div>
              <Paper>
                  <Scheduler
                      data={data}
                      firstDayOfWeek={1}
                  >
                      <ViewState
                          defaultCurrentDate={today}
                      />
                      <EditingState

                          // addedAppointment={addedAppointment}

                          // onAddedAppointmentChange={(bouh)=>console.log("bouh2", bouh)}
                          // onDoubleClick={(bouh)=>console.log("bouh", bouh)}
                          onCommitChanges={this.commitChanges}
                      />
                      <WeekView
                          cellDuration={60}
                          endDayHour={18}
                          startDayHour={8}

                          // onClick={() => console.log(2)}
                          timeTableCellComponent={this.TimeTableCell}
                      />
                      <MonthView />
                      <Appointments/>

                      <Toolbar />
                      <ViewSwitcher />
                      <DateNavigator />
                      <TodayButton />
                      <EditRecurrenceMenu />

                      <DragDropProvider />
                      <AppointmentForm
                          basicLayoutComponent={BasicLayout}
                      />
                  </Scheduler>
              </Paper>

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

export default connect(mapStateToProps)(PersonalPlanner);
