import React from 'react'

export class NavigationComp extends React.Component {
  render() {
    return (
      <nav>
        <ul class="nav nav-pills justify-content-end">
          <li class="nav-item">
            <button class="btn btn-dark m-2">Active</button>
          </li>
          <li class="nav-item">
            <button class="btn btn-dark m-2">Link</button>
          </li>
          <li class="nav-item">
            <button class="btn btn-dark m-2">Link</button>
          </li>
        </ul>
      </nav>
    )
  }
}