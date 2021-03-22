import React from 'react';
import data from './data.json';
import './App.css'

class ExperienceChildComponent extends React.Component {
  render() {
    return (
      <div className='card'>
        <div className='card-body'>
          <h3 className="d-inline-block mb-2 ExperienceHead"
          > {this.props.val.company}</h3>
          <div className="mb-1 text-muted">
            {this.props.val.title}<br></br>
            {this.props.val.timeline}
          </div>
          <p className="m-2">{
            this.props.val.about.map(
              item => <li>{item}</li>
            )
          }</p>
        </div>
      </div>
    )
  }
}


export class ExperienceComponent extends React.Component {
  render() {
    return (
      <div className="p-1">
        <h1 id="Experience"
          className="headings m-2">
          Experience</h1>
        <hr></hr>
        {data.ExperienceBody.map(
          exp => <ExperienceChildComponent val={exp} />
        )}
      </div>
    )
  }
}
