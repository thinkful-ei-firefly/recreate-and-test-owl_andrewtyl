import React from 'react';
import STORE from './STORE'
import ParticipantList from './ParticipantList/ParticipantList'

class App extends React.Component {
  static defaultProps = {
    STORE
  };

  render() {

    return (
      <div>
        <ParticipantList participants={this.props.STORE.participants}/>
      </div>
    )
  }

}

export default App;
