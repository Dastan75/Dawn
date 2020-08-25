import React from 'react';
import SVGClose from './SvgIcons/Close'
import SVGMood01 from './SvgIcons/Mood01'
import SVGMood02 from './SvgIcons/Mood02'
import SVGMood03 from './SvgIcons/Mood03'
import SVGMood04 from './SvgIcons/Mood04'
import SVGMood05 from './SvgIcons/Mood05'
// import { Document, Page } from 'react-pdf/dist/esm/entry.webpack'



class MoodTracker extends React.Component {
    render() {
        return (
            <div className="moodTracker">
            <div className="moodContainer">
                {/* <div className="closeButton"><SVGClose/></div> */}
                <div className="moodBox">
                    <div className="question">Hey { this.props.user.firstName }, how do you feel today?</div>
                    <div className="moodChoices">
                        <div className="moodChoiceItem left"><SVGMood01/></div>
                        <div className="moodChoiceItem leftmid"><SVGMood02/></div>
                        <div className="moodChoiceItem mid"><SVGMood03/></div>
                        <div className="moodChoiceItem rightmid"><SVGMood04/></div>
                        <div className="moodChoiceItem right"><SVGMood05/></div>
                    </div>
                    <div className="tickBox">
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
                    <div className="bottomBar">
                        <div onClick={this.props.onOk} className="primaryCTA clickable">Save your mood</div>
                        <div onClick={this.props.onCancel} className="secondaryCTA clickable">Skip today</div>
                    </div>
                </div>
            </div>
            </div>
        );
    }
}

export default MoodTracker;
