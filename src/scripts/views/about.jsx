import React from 'react';
import { Link } from 'react-router-dom';

class About extends React.Component {
  constructor(props) {
    super(props);
  }

  componentDidMount() {
    setTimeout(()=>{
      requestAnimationFrame(() => {
        this.refs.about.classList.add('animate');
      })
    }, 50);
  }

  render() {
    return (
      <div ref={'about'} className="about">
        <Link className="close" to={{ pathname: '/' }} >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#000" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18">
            </line><line x1="6" y1="6" x2="18" y2="18">
            </line>
          </svg>
        </Link>
        <h1>About</h1>
        <p>
          MARVEL API Explorer is a personal project made by <a target="_blank" rel="noopener noreferrer" href="https://iondrimbafilho.me/">Ion Drimba Filho</a> using ReactJS + Redux and the oficial <a target="_blank" rel="noopener noreferrer" href="http://developer.marvel.com/">Marvel API</a>.<br/>
          It also works as a PWA.
        </p>
        <a target="_blank" rel="noopener noreferrer" href="https://github.com/iondrimba/marvel-api-explorer" className="github" title="Github">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32.58 31.77">
            <path d="M16.29 0a16.29 16.29 0 0 0-5.15 31.75c.81.15 1.11-.35 1.11-.79v-2.77C7.7 29.18 6.74 26 6.74 26a4.31 4.31 0 0 0-1.81-2.38c-1.48-1 .11-1 .11-1a3.42 3.42 0 0 1 2.5 1.68 3.47 3.47 0 0 0 4.74 1.35 3.48 3.48 0 0 1 1-2.18c-3.58-.39-7.38-1.79-7.38-8.03a6.3 6.3 0 0 1 1.68-4.37 5.86 5.86 0 0 1 .16-4.31s1.37-.44 4.48 1.67a15.44 15.44 0 0 1 8.16 0c3.11-2.11 4.48-1.67 4.48-1.67a5.85 5.85 0 0 1 .14 4.31 6.29 6.29 0 0 1 1.67 4.37c0 6.26-3.81 7.63-7.44 8a3.89 3.89 0 0 1 1.11 3v4.47s.29.94 1.12.78A16.29 16.29 0 0 0 16.29 0z" fill="#000" fill-rule="evenodd" data-name="Layer 1"></path>
          </svg>
    </a>
      </div>
    );
  }
}

About.propTypes = {

}

export default About;