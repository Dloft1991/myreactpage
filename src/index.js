import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Header from './header';
import Projects from './projects';
import Footer from './footer';



class App extends React.Component {
  render() {
    return (
      <main>
        <Header />
        <Projects />
        <Footer />
      </main>
    )
  }
}

ReactDOM.render(<App />, document.getElementById('root'));