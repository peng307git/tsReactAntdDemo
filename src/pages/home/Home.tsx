import React from 'react';
import './Home.scss';

interface State {

}

class Home extends React.Component<{}, State> {
  state = {};
  render() {
    return (
      <div className="hoem">
        home
      </div>
    );
  }
}

export default Home;