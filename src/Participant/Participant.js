import React from 'react';

class Participant extends React.Component {
    static defaultProps = {
        id,
        name,
        avatar,
        inSession,
        onStage
    };

    render() {
        let sessionAndStageInfo;

        if (this.props.inSession && this.props.onStage)
        {
            //User is both in session and on stage
            
        }
        else if (this.props.inSession) {
            //User is in session, but not on stage
        }
        else {
            //User has left session
        }

        return (
            <div className="participant" id={this.props.id}>
                <img src={this.props.avatar} alt="User Avatar"/>
                <h5>{this.props.name}</h5>
                <span className="UserInSession noUserInSession">&#8226;</span>
                <h6 className="userOnStage"></h6>
            </div>
        )
    }

}

export default App;
