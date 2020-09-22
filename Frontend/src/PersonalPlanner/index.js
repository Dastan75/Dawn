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
    AppointmentForm
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
                <div className={`color9 circleButton ${appointmentData.choosedColor === 'color9' ? 'selected' : ''}`} onClick={() => onCustomFieldChange('color9')}/>
            </div>
        </AppointmentForm.BasicLayout>
    );
};

class PersonalPlanner extends React.Component {

  state = {
      data: [],
      backlogVisible: false,
      addedAppointment: {},
      selectedEvent: null
  };

  componentDidMount = async () => {
      const ret = await userService.getEvent();
      console.log(ret);
      this.setState({
          data: ret
      });
  }

  TimeTableCell = (props) => <WeekView.TimeTableCell onClick={() => {
      // console.log('CLICK', bouh)
      // console.log(bouh.view);
      // console.log(bouh.currentTarget);
      console.log(props);
      this.setState({
          selectedEvent: { endDate: props.endDate, startDate: props.startDate },
          backlogVisible: true
      });
  }} {...props} />;

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
      const { data } = this.state;
      console.log('commitChanges', added, changed, deleted);
      if (added) {
          let data = { ...added };
          data.owner = user.id;
          const ret = await userService.createEvent(data);
          data = [...data, ...ret];
      }
      this.setState({
          data
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
    });
};

render() {
    const { data, currentDate, backlogVisible, addedAppointment } = this.state;
    console.log('PLANNER STATE', this.state);
    return (
        <div className='PersonalPlanner'>
            {
                backlogVisible && <Backlog onClose={this.onClose}/>
            }
            <div className='clickable' onClick={this.showDrawer}>Start planning your week</div>
            <div>My personal planner</div>
            <Paper>
                <Scheduler
                    data={data}
                    onClick={() => console.log(3)}
                >
                    <ViewState
                        defaultCurrentDate={today}
                        onClick={() => console.log(1)}
                    />
                    <EditingState

                        // addedAppointment={addedAppointment}
                        onClick={() => console.log(4)}

                        // onAddedAppointmentChange={(bouh)=>console.log("bouh2", bouh)}
                        // onDoubleClick={(bouh)=>console.log("bouh", bouh)}
                        onCommitChanges={this.commitChanges}
                    />
                    <WeekView
                        endDayHour={20}
                        startDayHour={7}

                        // onClick={() => console.log(2)}
                        timeTableCellComponent={this.TimeTableCell}
                    />
                    <MonthView />
                    <Appointments />

                    <Toolbar />
                    <ViewSwitcher />

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
