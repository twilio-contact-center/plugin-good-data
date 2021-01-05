import React from 'react';

export class DashboardIframe extends React.Component {

  render() {

    return (
      <iframe 
        src={this.props.url}
        title="supervisor-dashboard"
        style={{height: "100%", width: "80%", position: "absolute", left: "215px", top: "0px", bottom: "0px" }}
        key={Math.random()}
      ></iframe>
    )
  }
}


export default (DashboardIframe)
