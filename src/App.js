import React from 'react';

import { NavigationComp } from './components/NavigationComp';
import { HomePageComp } from './components/HomePageComp.js';
import { SearchPageComp } from './components/SearchPageComp.js';
import { UserDetailComp } from './components/UserDetailComp.js';
import { ExplorePageComp } from './components/ExplorePageComp.js';
import { LoginPageComp } from './components/LoginPageComp.js';

import { FooterComp } from './components/FooterComp.js';



/**
 * Single Page Application
 * Page List:
 * - if loggedIn
 *    1. HomePage
 *    2. Search Page
 *    3. Explore Page
 *    4. User Detail
 *    5. Logout
 * - else:
 *    1. HomePage
 *    2. Search Page
 *    3. LogIn
 */
class SinglePageApp extends React.Component {

  constructor() {
    super();
    this.state = {
      "pageIndex": 0,
      "isLoggedIn": false,
      "userDetail": {
        "userName": "User Name",
        "email": "user@email.com",
        "userId": "ia321987913sda1234"
      }
    }
    this.changePage = this.changePage.bind(this);
  }

  changePage(indx) {
    this.setState({
      "pageIndex": indx
    })
  }


  render() {

    var childComponent = <HomePageComp />
    if (this.state.pageIndex === 0) {
      childComponent = <HomePageComp />
    }
    else if (this.state.pageIndex === 1) {
      childComponent = <SearchPageComp />
    }
    else if (this.state.pageIndex === 2) {
      childComponent = <UserDetailComp />
    }
    else if (this.state.pageIndex === 3) {
      childComponent = <ExplorePageComp />
    }
    else if (this.state.pageIndex === 4) {
      childComponent = <LoginPageComp />
    }

    return (
      <div className="container">
        <NavigationComp
          isLoggedIn={this.state.isLoggedIn}
          pageChanger={this.changePage}
        />
        <hr></hr>
        { childComponent}
        <hr></hr>
        <FooterComp />
      </div>
    )
  }
}

export class App extends React.Component {
  render() {
    return <SinglePageApp />
  }
}
