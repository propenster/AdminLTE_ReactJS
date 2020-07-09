import React, { Component } from 'react'
import Header from './components/Header';
import Menu from './components/Menu';
import Footer from './components/Footer';
import MainContent from './components/MainContent';
export default class App extends Component {
  render() {
    return (
      <div>
          <Header />
          <Menu />
          <MainContent />
          <Footer />
      </div>
    )
  }
}
