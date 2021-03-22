import React from 'react';


export class FooterComponent extends React.Component {
    render() {
        return (
            <div>
                <footer className="container justify-content-center">
                    <hr></hr>
                    <div className="nav-scroller py-1 mb-2">
                        <nav className="nav justify-content-center">
                            <a className="p-2 link-secondary" href="https://github.com/hrs2203/">Github</a>
                            <a className="p-2 link-secondary" href="https://www.linkedin.com/in/hrishabh-pandey-052a0616b/">LinkedIn</a>
                            <a className="p-2 link-secondary" href="https://twitter.com/HrishabhPande13">Twitter</a>
                        </nav>
                    </div>
                </footer>
            </div>
        )
    }
}