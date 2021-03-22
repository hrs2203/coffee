import React from 'react';
import data from './data.json';
import './App.css';

class ProjectChildComponent extends React.Component {
  render() {
    return (
      <div className="col-md-6">
        <div className="col m-1 p-3 card">
          <h3 className="d-inline-block mb-2 ProjectHead">
            {this.props.val.title}
          </h3>
          <a className="mb-1 text-muted"
            href={this.props.val.link}
          >Link</a>
          <p className="mb-auto">
            {this.props.val.about}
          </p>
        </div>
      </div>
    )
  }
}

export class ProjectsComponent extends React.Component {
  render() {
    return (
      <div className="p-1">
        <h1 id="Projects"
          className="headings m-2">
          Projects</h1>
        <hr></hr>
        <div className="row">
          {data.ProjectsBody.map(
            exp => <ProjectChildComponent val={exp} />
          )}
        </div>
      </div>
    )
  }
}