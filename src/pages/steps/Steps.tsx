import React from 'react';
import './Steps.scss';
import { Steps } from 'antd';
const Step = Steps.Step;

interface State {

}

export default class StepsPage extends React.Component<{}, State> {
  state = {};
  render() {
    return (
      <div className="steps">
        <Steps current={1}>
          <Step title="Finished" description="This is a description." />
          <Step title="In Progress" description="This is a description." />
          <Step title="Waiting" description="This is a description." />
        </Steps>
      </div>
    );
  }
}