import * as React from "react";
import * as Flex from '@twilio/flex-ui';

export class HandleUserActionEvent extends React.PureComponent {

    handler_uiLink = async (segment: string) => {
        try {
            // need to await for it to throw if the promise rejects
            
            await Flex.Actions.invokeAction("InsightsPlayer:play", {segmentId: segment});

        } catch (e) {
            console.log("HandleUserActionEvent: Cannot parse URL.", e.message);
        }
    };

    handleIncomingMessage = (event) => {

        let message=[];

        try {
            message = JSON.parse(event.data);
        } catch (e) {
            message = event.data;
        }

        if (!message.gdc) {
            console.log("HandleUserActionEvent: Missing gdc property on message");
            return;
        }

        const { name, data } = message.gdc;
        
        // Capture events related when a users clicks a link - external window
        // https://help.gooddata.com/doc/en/building-on-gooddata-platform/gooddata-integration-into-your-application/embed-gooddata-elements-into-your-applications/embed-dashboards-and-reports/embedded-dashboard-and-report-api-events-and-methods/embedded-dashboard-events#EmbeddedDashboardEvents-Auserclicksalink-externalwindow
       
        if (name !== 'ui.link') {
            console.log("HandleUserActionEvent: Not a ui.link event");
            return;
        }        
        
        //get segment id from the URI
        const segment = data.uri.substring(data.uri.lastIndexOf('/') + 1);
                            
        console.log("catching Flex Insights click event", data, name, segment);
        this.handler_uiLink(segment);}

    };

    componentDidMount() {
        window.addEventListener("message", this.handleIncomingMessage);
    }

    componentWillUnmount() {
        window.removeEventListener("message", this.handleIncomingMessage);
    }

    render() {
        return null;
    }
}
