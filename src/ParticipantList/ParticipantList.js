import React from 'react';
import Participant from '..Participant/Participant';

class ParticipantList extends React.Component {
    static defaultProps = {
        participants: []
    };

    render() {

        const participantComponents = this.props.participants.map((participant) =>
            <Participant key={participant.id} name={participant.name} avatar={participant.avatar} inSession={participant.inSession} onStage={participant.onStage} />
        )

        return (
            <div className='ParticipantList'>
                {participantComponents}
            </div>
        )
    }

}

export default ParticipantList;
