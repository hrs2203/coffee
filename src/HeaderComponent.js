import React from 'react'

export class HeaderComponent extends React.Component {

  constructor(props) {
    super(props);
    this.clickEvent = this.clickEvent.bind(this);
  }

  clickEvent() { }

  render() {
    return (
      <header>
        <nav className="nav justify-content-end m-3">
          <button
            onClick={() => this.props.changePage(0)}
            className="nav-link m-1 btn btn-dark">
            HomePage
          </button>
          <button
            onClick={() => this.props.changePage(1)}
            className="nav-link m-1 btn btn-dark">
            Experience
          </button>
          <button
            onClick={() => this.props.changePage(2)}
            className="nav-link m-1 btn btn-dark">
            Projects
          </button>
          <button
            onClick={() => this.props.changePage(3)}
            className="nav-link m-1 btn btn-dark">
            About
          </button>
        </nav>
      </header>
    )
  }
}