import React from 'react';
import './App.css';
import data from './data.json';

class TableContent extends React.Component {
  render() {
    return (
      <tbody>
        <tr>
          <td>Email</td>
          <td>hrishabh2203@gmail.com</td>
        </tr>
        <tr>
          <td>Phone</td>
          <td>+91 6387756473</td>
        </tr>
        <tr>
          <td>Links</td>
          <td>
            <a href={data.AboutBody.links.Github}>
              GitHub </a>
            |
            <a href={data.AboutBody.links.LinkedIn}>
              LinkedIn </a>
          </td>
        </tr>
        <tr>
          <td>Resume</td>
          <td>
            <a href={
              data.AboutBody.links.Resume
            }>Download Resume</a>
          </td>
        </tr>
      </tbody>
    )
  }
}

export class AboutComponent extends React.Component {

  render() {
    return (
      <div className="m-2">
        <h1 id="AboutMe" className="headings m-2">
          About Me
          </h1>
        <hr></hr>
        <div className="card p-2">
          <h3 className="styleFont">I am Hrishabh Pandey.</h3>
          <p className="mt-4 font-monospace">
            {data.AboutBody.about}
          </p>
          <table className="font-monospace table">
            <TableContent />
          </table>
        </div>
      </div>
    )
  }
}