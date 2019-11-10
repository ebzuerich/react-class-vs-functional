import React, { ChangeEvent } from 'react';
import { injectIntl, WrappedComponentProps, FormattedMessage } from 'react-intl';
import { withRouter, RouteComponentProps, Switch, Route } from 'react-router';
import Welcome from './Welcome';
import styled from '@emotion/styled';

const Frame = styled.div`
  width: 800px;
  height: 600px;
  border: 2px solid black;
`;

interface Props extends WrappedComponentProps, RouteComponentProps  {

}

interface State {
  name: string;
}

class App extends React.Component<Props, State> {
  public constructor(props: Props) {
    super(props);

    this.state = {
      name: ''
    };

    console.log(`Initializing ${this.props.intl.formatMessage({id: 'app.name'})}`);

    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  public render() {
    return (
      <div>
        <h1><FormattedMessage id='app.name' /></h1>
        <input type='text' onChange={this.handleChange} value={this.state.name} />
        <button onClick={this.handleClick}>Say hello!</button>
        <Frame>
          <Switch>
            <Route path='/welcome/:name' component={Welcome} />
          </Switch>
        </Frame>
      </div>
    )
  }

  private handleChange(e: ChangeEvent<HTMLInputElement>) {
    this.setState({...this.state, name: e.target.value})
  }

  private handleClick() {
    this.props.history.push(`/welcome/${this.state.name}`);
  }
}

export default injectIntl(withRouter(App));
