import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Portfolio from './components/Portfolio'
import $ from 'jquery'

class App extends Component {

  componentDidMount() {
    var header = $("header");
    var range = 200;
    $(window).on("scroll", function () {
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
    });
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
