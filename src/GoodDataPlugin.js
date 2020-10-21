import React from 'react';
import { FlexPlugin } from 'flex-plugin';
import { GoodDataLogin } from './GoodDataLogin';
const PLUGIN_NAME = 'GoodDataPlugin';
export default class GoodDataPlugin extends FlexPlugin {
  constructor() {
    super(PLUGIN_NAME);
  }
  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  init(flex, manager) {
    const options = { sortOrder: -1 };
    flex.SideNav.Content.add(
      <flex.SideLink
        showLabel={ true }
        icon="DefaultAvatar"
        onClick={() =>
          flex.Actions.invokeAction("NavigateToView", {
            viewName: "supervisor-dashboard"
          })}
        key="SupervisorDashboard"
      >
        Supervisor Dashboard
      </flex.SideLink>
    );
    flex.ViewCollection.Content.add(
      <flex.View name="supervisor-dashboard" key="supervisor-dashboard-view">
        <div>
        <GoodDataLogin> 
        <iframe 
        src="https://analytics.ytica.com/dashboard.html#...." 
        width="1500" 
        height="100%"
        title="supervisor-dashboard"
         ></iframe>
        </GoodDataLogin>
        </div>
      </flex.View>,
      options
    );
  }
}