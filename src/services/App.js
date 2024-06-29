import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import HomePage from './pages/HomePage';
import ReportIssue from './pages/ReportIssue';
import CityServices from './pages/CityServices';
import RealTimeData from './pages/RealTimeData';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Header />
      <main>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/report" component={ReportIssue} />
          <Route path="/services" component={CityServices} />
          <Route path="/data" component={RealTimeData} />
        </Switch>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
