import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Portfolio from './components/Portfolio'
import $ from 'jquery'

function scrollOpacity() {
  var header = $("header");
  var range = 200;
  var scrollTop = $(this).scrollTop(),
    height = header.outerHeight(),
    offset = height / 1.25,
    calc = 1 - (scrollTop - offset + range) / range;
  header.css({ opacity: calc });
  if (calc > "1") {
    header.css({ opacity: 1 });
  } else if (calc < "0") {
    header.css({ opacity: 0 });
  }
}

class App extends Component {

  componentDidMount() {
    $(window).on("scroll", scrollOpacity);
  }

  render() {
    return (
      <div className="App">
        <Portfolio />
      </div>
    );
  }
}

export default App;
