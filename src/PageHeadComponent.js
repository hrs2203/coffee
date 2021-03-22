import React from 'react'
import data from './data.json'

export class PageHeadComponent extends React.Component {
  render() {
    return (
      <div className="card">
        <div className="card-body">
          {data.AboutHead}
        </div>
      </div>
    )
  }
}