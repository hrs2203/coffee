import React from 'react';

class SinglePageApp extends React.Component {
  render() {
    return (<div className="component"></div>)
  }
}

export class App extends React.Component {
  render() {
    return <SinglePageApp />
  }
}
