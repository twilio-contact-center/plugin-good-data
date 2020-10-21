// import { loginGoodData } from './loginGoodData';
import React from 'react';
import * as Flex from '@twilio/flex-ui';

import { loginGoodData } from './loginGoodData';

/*
This component must be rendered before (or wrapped around) any iFrames of analytica data.
This sets the required cookies to access analytics.ytica.com and app.ytica.com without having to 
access the flex.twilio.com/dashboards page (which SSOs into those 2 apps for you). Agents aren't 
allowed to access the /dashboards page as it shows team sensitive data, so this under-the-hood
auth is required.
*/
export class GoodDataLogin extends React.Component {
  constructor() {
    super();
    this.state = { loginCalled: false, loggedIn: false, appSsoUrl: undefined };
    this.login = this.login.bind(this);
    
  }

  login(client) {
    loginGoodData(client)
      .then(appSsoUrl => {
        console.log('loginGoodData success');
        this.setState({
          loggedIn: true,
          appSsoUrl,
        });
      })
      .catch(error => {
        console.error('FlexAgentDashboardPlugin - error on loginGoodData', error, client);
      });
  }

  render() {
    return this.state.loggedIn ? (
      <>
        <iframe
          src={this.state.appSsoUrl}
          title="appLogin"
          style={{ width: 0, height: 0, border: 0, overflow: 'hidden', display: 'none' }}
        />
        {this.props.children}
      </>
    ) : (
      <Flex.Insights.Controller>
        {props => {
          if (props.status === Flex.Insights.ServiceStatus.Ready && !this.state.loginCalled) {
            this.login(props.client);
          }
          return null;
        }}
      </Flex.Insights.Controller>
    );
  }
}
