import React, { Component } from 'react';
import './App.css';
import { MarkdownPreview } from 'react-marked-markdown';

class App extends Component {
  state = {
    text: ''
  }

  handleClick = e => {
    this.setState({
      text: e.target.value
    });
  }

  style = {
    width: 300,
    height: 300,
    border: 'solid black 1px',
    align: 'center'
  }

  cardStyle = {
    maxWidth: '18rem'
  }

  render() {
    return (
      <div className="App">
        <div className="card bg-light mb-3">
          <div className="card-header">Editor</div>
          <textarea id="editor" rows="1" cols="150" placeholder="Enter markdown" onChange={ this.handleClick }></textarea>
        </div>

        <div className="card text-white bg-dark mb-3">
          <div className="card-header">Preview</div>
          <div class="card-body">
            <div id="preview">
              <MarkdownPreview value={ this.state.text } />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
