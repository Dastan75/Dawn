import React from 'react';
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import Paper from '@material-ui/core/Paper';
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
import Backlog from './Backlog'
import './style.scss'
import moment from "moment";

const monthFormat = "YYYY-MM-DD";

const today = moment().format(monthFormat)
console.log('Today', today)
console.log(new Date(2020, 7, 25, 9, 35));

const appointments = [{
  title: 'Website Re-Design Plan',
  startDate: new Date(2020, 7, 25, 9, 35),
  endDate: new Date(2020, 7, 25, 11, 30),
  id: 0,
  rRule: 'FREQ=DAILY;COUNT=2',
  // exDate: '20180628T063500Z,20180626T063500Z',
}, {
  title: 'Book Flights to San Fran for Sales Trip',
  startDate: new Date(2018, 5, 25, 12, 11),
  endDate: new Date(2018, 5, 25, 13, 0),
  id: 1,
  rRule: 'FREQ=DAILY;COUNT=4',
  exDate: '20180627T091100Z',
}, {
  title: 'Install New Router in Dev Room',
  startDate: new Date(2018, 5, 25, 13, 30),
  endDate: new Date(2018, 5, 25, 14, 30),
  id: 2,
  rRule: 'FREQ=WEEKLY;BYDAY=SU,TU,WE;INTERVAL=1;UNTIL=20200828T040000Z',
}];

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
        text="Choose a color"
        type="title"
      />
      {console.log(appointmentData)}
      <div className="colorGroup">
        <div className={`color1 circleButton ${appointmentData.choosedColor === 'color1' ? 'selected' : ''}`} onClick={() => onCustomFieldChange("color1")}/>
        <div className="color2 circleButton" onClick={() => onCustomFieldChange("color2")}/>
        <div className="color3 circleButton" onClick={() => onCustomFieldChange("color3")}/>
        <div className="color4 circleButton" onClick={() => onCustomFieldChange("color4")}/>
        <div className="color5 circleButton" onClick={() => onCustomFieldChange("color5")}/>
        <div className="color6 circleButton" onClick={() => onCustomFieldChange("color6")}/>
        <div className="color7 circleButton" onClick={() => onCustomFieldChange("color7")}/>
        <div className="color8 circleButton" onClick={() => onCustomFieldChange("color8")}/>
        <div className="color9 circleButton" onClick={() => onCustomFieldChange("color9")}/>
      </div>
      {/* <AppointmentForm.Select
        value={'blue'}
        availableOptions={[ { id: 'blue', text: 'blue' }, { id: 'red', text: 'red' } ]}
        onValueChange={onCustomFieldChange}
      /> */}
    </AppointmentForm.BasicLayout>
  );
};

class PersonalPlanner extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      data: appointments,
      backlogVisible: false,
      addedAppointment: {},
    };

  }

  // commitChanges({ added, changed, deleted }) {
    // this.setState((state) => {
    //   let { data } = state;
    //   if (added) {
    //     const startingAddedId = data.length > 0 ? data[data.length - 1].id + 1 : 0;
    //     data = [...data, { id: startingAddedId, ...added }];
    //   }
    //   if (changed) {
    //     data = data.map(appointment => (
    //       changed[appointment.id] ? { ...appointment, ...changed[appointment.id] } : appointment));
    //   }
    //   if (deleted !== undefined) {
    //     data = data.filter(appointment => appointment.id !== deleted);
    //   }
    //   return { data };
    // });
  // }
  commitChanges = (print) => {
    console.log('commitChanges', print);
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
        return (
            <div className="PersonalPlanner">
                  {
                    backlogVisible && <Backlog onClose={this.onClose}/>
                  }
              <div className="clickable" onClick={this.showDrawer}>Start planning your week</div>
              <div>My personal planner</div>
              <Paper>
                <Scheduler
                  data={data}
                >
                  <ViewState
                    defaultCurrentDate={today}
                    onClick={() => console.log(1)}
                  />
                  <EditingState
                    // addedAppointment={addedAppointment}
                    onCommitChanges={this.commitChanges}
                    // onAddedAppointmentChange={(bouh)=>console.log("bouh2", bouh)}
                    onDoubleClick={(bouh)=>console.log("bouh", bouh)}
                    onClick={() => console.log(1)}
                  />
                  <WeekView
                    startDayHour={7}
                    endDayHour={20}
                    onClick={() => console.log(1)}
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

export default PersonalPlanner;
