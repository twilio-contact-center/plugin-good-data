import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink 
  } from "react-router-dom";

import './styles.css'
import { DashboardIframe } from '../DashboardIframe/DashboardIframe';
import { GoodDataLogin } from '../../GoodDataLogin';
import { HandleUserActionEvent } from './HandleUserActionEvent.jsx';

// define URL for Control Center - Custom dashboard
let controlCenterCustomUrl='https://localhost:3002/dashboard.html?label.conversations.conversation_attribute_2=MX#project=/gdc/projects/h5r0iqyw4xblon507isaznql9ku2e36m&dashboard=/gdc/md/h5r0iqyw4xblon507isaznql9ku2e36m/obj/identifier:acfGTXlycGpy&override=ui.link';
//define URL for Agent Productivity dashboard
let agentProductivityUrl='https://localhost:3002/dashboard.html?label.agents.team_id=MX#project=/gdc/projects/h5r0iqyw4xblon507isaznql9ku2e36m&dashboard=/gdc/md/h5r0iqyw4xblon507isaznql9ku2e36m/obj/identifier:aaeR8ZV3gsZh&override=ui.link';


export class DashboardSelector extends React.Component {

  render() {
    return (
      <Router>
    <div>
      <div className="wrapper">
       
        <NavLink  exact to="/supervisor-dashboard/" className="button" activeClassName="button-active">
        Control Center - Custom 
        </NavLink>
            
        <NavLink exact to="/supervisor-dashboard/agent-productivity" className="button" activeClassName="button-active">
        Agent Productivity 
        </NavLink>
        
      </div>
        <GoodDataLogin /> 
        <HandleUserActionEvent />
        

        <Switch>
          <Route exact path="/supervisor-dashboard/agent-productivity">
            <DashboardIframe url={agentProductivityUrl} />
          </Route>

          <Route exact path="/supervisor-dashboard/">
            <DashboardIframe url={controlCenterCustomUrl} />
          </Route>

        </Switch>

        
      </div>
    </Router>
      
    )
  }
}


export default (DashboardSelector)
