import React from 'react';
import SVGClose from './SvgIcons/Close';
import SVGMood01 from './SvgIcons/Mood01';
import SVGMood02 from './SvgIcons/Mood02';
import SVGMood03 from './SvgIcons/Mood03';
import SVGMood04 from './SvgIcons/Mood04';
import SVGMood05 from './SvgIcons/Mood05';

// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'

class MoodTracker extends React.Component {

    state = {
        mood: 0
    }

    render() {
        const { mood } = this.state
        return (
            <div className='moodTracker'>
                <div className='moodContainer'>
                    {/* <div className="closeButton"><SVGClose/></div> */}
                    <div className='moodBox'>
                        <div className='question'>Hey { this.props.user.firstName }, how do you feel today?</div>
                        <div className='moodChoices'>
                            <div onClick={() => this.setState({ mood: 1 })} className={`moodChoiceItem left ${mood === 1 ? 'selected' : ''}`}><SVGMood01/></div>
                            <div onClick={() => this.setState({ mood: 2 })} className={`moodChoiceItem leftmid ${mood === 2 ? 'selected' : ''}`}><SVGMood02/></div>
                            <div onClick={() => this.setState({ mood: 3 })} className={`moodChoiceItem mid ${mood === 3 ? 'selected' : ''}`}><SVGMood03/></div>
                            <div onClick={() => this.setState({ mood: 4 })} className={`moodChoiceItem rightmid ${mood === 4 ? 'selected' : ''}`}><SVGMood04/></div>
                            <div onClick={() => this.setState({ mood: 5 })} className={`moodChoiceItem right ${mood === 5 ? 'selected' : ''}`}><SVGMood05/></div>
                        </div>
                        <div className='tickBox'>
                            {/* <form>
                        <label>
                        Let my manager know:
                        <input
                            name=""
                            type="checkbox"
                            checked={this.state.}
                            onChange={this.handleInputChange} />
                        </label>
                    </form> */}
                        </div>
                        <div className='bottomBar'>
                            <div className='primaryCTA clickable' onClick={this.props.onOk}>Save your mood</div>
                            <div className='secondaryCTA clickable' onClick={this.props.onCancel}>Skip today</div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MoodTracker;
