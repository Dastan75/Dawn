import React from 'react';

import LeftMenu from './LeftMenu';
import MainBody from './MainBody';
import MyWork from './MyWork';
import CompanySpace from './CompanySpace';
import ProjectsTasks from './ProjectsTasks';
import Signup from './Signup';
import Notifications from './Notifications';
import PersonalPlanner from './PersonalPlanner';

import ProjectSpace from './ProjectsSpace';
import { connect } from 'react-redux';
import { userActions } from './_actions';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import { ToastContainer, toast } from 'react-toastify';

// const { TabPane } = Tabs;

class App extends React.PureComponent {
    defaulState = {

    };

    state = {
        ...this.defaulState,
    };

    getData = (newUser = this.props.user, toaster) => {
        if (toaster) {
            toast(`🌞 Welcolme ${newUser.firstName}!`, {
                position: 'top-right',
                autoClose: 4000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        this.props.getUser(newUser.id);
    }

    componentDidMount = () => {
        // this.getData()
    }

    render() {
        const { user } = this.props;
        return (
            <div className='SwapBody'>
                <ToastContainer />
                {
                    !user.loggedIn &&
                    <Router basename='/app/'>
                        <Switch>
                            <Route exact path='/Login'>
                                <Signup getData={this.getData}/>
                                {/* <PersonalPlanner /> */}
                            </Route>
                            <Redirect to='/Login' />
                        </Switch>
                    </Router>
                }
                {
                    user.loggedIn &&
                    <Router basename='/app/'>
                        <LeftMenu/>
                        <Switch>
                            <Route exact path='/Home'>
                                <MainBody/>
                            </Route>
                            {/*
                            <Route path='/Overview'>
                                <CompanySpace />
                            </Route> */}

                            <Route path='/MyWork'>
                                <MyWork />
                            </Route>

                            <Route exact path='/Planner'>
                                <PersonalPlanner />
                            </Route>

                            <Route exact path='/Notifications'>
                                <Notifications />
                            </Route>

                            <Route path='/Projects'>
                                <ProjectSpace getData={this.getData}/>
                            </Route>

                            <Route component={ProjectsTasks} path='/Tasks/:projectId'/>
                            <Redirect to='/Home' />
                        </Switch>
                    </Router>
                }
            </div>
        );
    }
}

const mapStateToProps = (state) => {
    const { user } = state;
    console.log('REDUX STATE', state);
    return {
        user
    };
};

const mapDispatchToProps = (dispatch) => ({
    getUser: (userId) => dispatch(userActions.getUser(userId))
});

export default connect(mapStateToProps, mapDispatchToProps)(App);
