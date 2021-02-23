import React from 'react';

let blogDetail = require("./blogFiles/outline.json");

class NavHeader extends React.Component {
  render() {
    return (
      <div>
        <div class="bg-dark">
          <header class="container blog-header py-3">
            <div class="nav-scroller py-1 mb-2">
              <nav class="nav justify-content-end">
                <a class="nav-link m-1 btn btn-outline-light" href="#BlogTopics">BlogTopics</a>
                <a class="nav-link m-1 btn btn-outline-light" href="../index.html">HomePage</a>
              </nav>
            </div>
          </header>
        </div>
        <div class="bg-dark text-white">
          <section class="py-5 text-center container">
            <div class="row">
              <div class="col-lg-6 col-md-8 mx-auto">
                <h1 class="styleFont font-weight-light">Hrishabh's Blog</h1>
                <p class="lead text-muted">I write about things I read and try to keep myself upto date. Also this makes it easy to keep a track of my time.</p>
                <p>
                  <a href="https://github.com/hrs2203/" class="btn btn-outline-light my-2">GitHub</a>
                </p>
              </div>
            </div>
          </section>
        </div>
      </div>
    )
  }
}

// =================== blog body ====================

class TopicCard extends React.Component {
  render() {
    return (
      <div class="col-md-6">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">{this.props.title}</h5>
            <hr />
            <p class="card-text">{this.props.description}</p>
            <a href={this.props.linkForward}>
              <button class="btn btn-outline-secondary">Read Ahead</button>
            </a>
          </div>
        </div>
      </div>
    )
  }
}

class ContentBlock extends React.Component {
  render() {
    return (
      <main className='container'>
        <div class="py-3">
          <div id="BlogTopics" class="row row-cols-md-3 g-3">
            {
              blogDetail.map(
                item => <TopicCard
                  title={item.title}
                  description={item.description}
                  linkForward={item.linkForward}
                />
              )
            }
          </div>
        </div>
      </main>
    )
  }
}


export {
  NavHeader,
  ContentBlock
}


