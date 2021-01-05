import React from 'react';
import { FlexPlugin } from 'flex-plugin';
import * as Flex from '@twilio/flex-ui';
import DashboardSelector from './components/DashboardSelector/DashboardSelector.jsx'


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

    Flex.SideNav.Content.add(
      <Flex.SideLink
        showLabel={ true }
        icon="DefaultAvatar"
        onClick={() =>
          Flex.Actions.invokeAction("NavigateToView", {
            viewName: "supervisor-dashboard"
          })}
        key="SupervisorDashboard"
      >
        Supervisor Dashboard
      </Flex.SideLink>
    );

    Flex.ViewCollection.Content.add(
      <Flex.View name="supervisor-dashboard" key="supervisor-dashboard-view" >
        <div>
          <DashboardSelector></DashboardSelector>
        </div>
      </Flex.View>,
      options
    );


  }
}