import React from 'react';
import axios from 'axios';

// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'
import './style.scss';
import {
    DownOutlined,
} from '@ant-design/icons';

// const { TabPane } = Tabs;
import {
    withRouter
} from 'react-router-dom';

class ProgessPage extends React.Component {
    defaulState = {

    };

    state = {
        ...this.defaulState,
    };

    render() {
        const { data } = this.props;
        return (
            <div className='ProgressPage'>
                {
                    data && data.teams && data.teams.map((team) => (
                        <div className='oneTeamBlock' key={team.id}>
                            <div className='teamName'>
                                { team.name }
                            </div>
                            {
                                team.projects && team.projects.sort((a, b) => a.createdAt - b.createdAt).map((project, index) => (
                                    <div className={`oneProjectBlock clickable p${index + 1}`} key={project.id} onClick={() => this.props.history.push(`/tasks/${project.id}`)}>
                                        <div className='progressBar'/>
                                        
                                        <div className='half'>
                                            <div className='name'>
                                                { project.name }
                                            </div>
                                            <div className='time'>4 HRS</div>
                                        </div>
                                        <div className='half halfRight'>
                                            <div className='team'>
                                                <div className='oneTeam'>DESIGN</div>
                                            </div>
                                            <div className='members'>
                                                <div className='memberBox'>
                                                    <div className='oneMember'>M</div>
                                                </div>
                                                <div className='memberBox'>
                                                    <div className='oneMember'>B</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                        </div>
                    ))
                }
            </div>
        );
    }
}

export default withRouter(ProgessPage);
