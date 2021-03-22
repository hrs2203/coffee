import React from 'react';
import './App.css';

import { HeaderComponent } from './HeaderComponent';
import { ExperienceComponent } from './ExperienceComponent.js';
import { PageHeadComponent } from './PageHeadComponent.js';
import { ProjectsComponent } from './ProjectsComponent.js';
import { AboutComponent } from './AboutComponent.js';
import { FooterComponent } from './FooterComponent.js';


class SinglePage extends React.Component {

  constructor() {
    super();
    this.state = {
      "presentIndex": 0
    }
    this.updatePage = this.updatePage.bind(this)
  }

  updatePage(indx){
    this.setState({ "presentIndex": indx%4 })
  }

  render() {
    var childBody = (
      <div>
        <PageHeadComponent />
        <ExperienceComponent />
        <ProjectsComponent />
        <AboutComponent />
      </div>
    )
    if (this.state.presentIndex === 1) {
      childBody = (
        <div>
          <ExperienceComponent />
        </div>
      )
    }
    else if (this.state.presentIndex === 2) {
      childBody = (
        <div>
          <ProjectsComponent />
        </div>
      )
    }
    else if (this.state.presentIndex === 3) {
      childBody = (
        <div>
          <AboutComponent />
        </div>
      )
    }


    return (
      <div className="container" >
        <HeaderComponent
          changePage={this.updatePage}
        />
        { childBody}
        <FooterComponent />
      </div>
    )
  }
}

export class App extends React.Component {
  render() {
    return <SinglePage />
  }
}
