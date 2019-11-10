import React from 'react';
import { FormattedMessage } from 'react-intl';
import { withRouter, RouteComponentProps } from 'react-router';

interface PathProps {
  name: string;
}

interface Props extends RouteComponentProps<PathProps> {

}

class WelcomeContainer extends React.Component<Props> {
  public render() {
    return (
      <p>
        <FormattedMessage id='welcome' values={{name: this.props.match.params.name}} />
      </p>
    )
  }
}

export default withRouter(WelcomeContainer);