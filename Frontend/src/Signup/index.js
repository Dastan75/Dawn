import React from 'react';
import './style.scss';
import { userService } from '../_services';
import { toast } from 'react-toastify';

class TaskDetails extends React.Component {
    defaulState = {
        password: '',
        email: ''
    };

    state = {
        ...this.defaulState,
    };

    onLogin = async () => {
        const ret = await userService.loginUser({ email: this.state.email, password: this.state.password });
        if (ret && ret.user) {
            this.props.getData(ret.user, true);
            return;
        }
        toast.error('☹️ Wrong password or email!', {
            position: 'top-right',
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
        });
    }

    render() {
        return (
            <div className='signupDetails'>
                <div className='fifty'>
                    <div className='stepOne'>
                        <div className='smallText'>Productivity meets sanity</div>
                        <div className='mainTitle'>Are you ready to make time for your best work?</div>
                        <div className='smallText'>We just need a few more details</div>
                        <form onSubmit={this.handleSubmit}>
                            <label>
                                <input onChange={({ target }) => this.setState({ email: target.value })} placeholder='Your email:' type='text' value={this.state.email} />
                            </label>
                            <label>
                                <input onChange={({ target }) => this.setState({ password: target.value })} placeholder='Your password:' type='password' value={this.state.password} />
                            </label>
                            {/* <label>
                                <input
                                    name="isGoing"
                                    type="checkbox"
                                    style={{ marginRight: '10px' }}
                                    // checked={this.state.isGoing}
                                />
                                I accept the terms and conditions:
                            </label> */}
                            <div className='clickable loginBlock' onClick={this.onLogin}>
                                Log me now!
                            </div>
                        </form>

                    </div>

                    {/* <div className="stepTwo">
                        <div className="stepBar">
                            <div className="stepText">Show us your best profile</div>
                            <div className="stepNumber">1/6</div>
                        </div>
                        <div className="stepContent">
                            <div className="leftContent"></div>
                            <div className="rightContent"></div>
                        </div>
                        <div className="stepCtas">
                            <div className="previousCta">Back</div>
                            <div className="nextCta">Next step</div>
                        </div>
                    </div> */}

                    {/* <div className="stepTwo">
                        <div className="stepBar">
                            <div className="stepText">How many people do you work with?</div>
                            <div className="stepNumber">2/6</div>
                        </div>
                        <div className="stepContent">
                            <div className="buttonChoice">1-5</div>
                            <div className="buttonChoice">6-10</div>
                            <div className="buttonChoice">11-25</div>
                            <div className="buttonChoice">26-50</div>
                            <div className="buttonChoice">50-100</div>
                            <div className="buttonChoice">100+</div>
                        </div>
                        <div className="stepCtas">
                            <div className="previousCta">Back</div>
                            <div className="nextCta">Next step</div>
                        </div>
                    </div> */}

                    {/* <div className="stepTwo">
                        <div className="stepBar">
                            <div className="stepText">Name your workspace</div>
                            <div className="stepNumber">3/6</div>
                        </div>
                        <div className="stepContent">
                        <div className="stepContent">Campaign Mon..</div>
                        </div>
                        <div className="stepCtas">
                            <div className="previousCta">Back</div>
                            <div className="nextCta">Next step</div>
                        </div>
                    </div> */}

                </div>
                <div className='illustration' />
            </div>
        );
    }
}

export default TaskDetails;
