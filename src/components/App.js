import React, { Component } from 'react';
import './App.scss';

import {
  BrowserRouter,
  Route,
  Switch
} from 'react-router-dom';

import Header from './header/Header'
import Home from './home/Home'
import Chart from './chart/Chart'
import NotFound from './notFound/NotFound'

const chartData = {
  "results": {
      "periods": [
          {
              "year": "2016",
              "date": "2016-11-30",
              "fhr": 72,
              "chs": 56,
              "sim": 72,
              "period": "YE"
          }, {
              "year": "2017",
              "date": "2017-11-30",
              "fhr": 60,
              "chs": 57,
              "sim": 60,
              "period": "Q3"
          }, {
              "year": "2017",
              "date": "2017-06-30",
              "fhr": 45,
              "chs": 23,
              "sim": 41,
              "period": "Q2"
          }
      ]
  }
}

class App extends Component {

  componentWillMount() {

    let data = chartData['results']['periods'],
        fixedData = {
          'labels': [],
          'series' : [
            [],
            [],
            []
          ]
        }
    data.sort(function(a,b){
      // Turn your strings into dates, and then subtract them
      // to get a value that is either negative, positive, or zero.
      return new Date(a.date) - new Date(b.date);
    });
    for (let index = 0; index < data.length; index++) {
      const element = data[index]

      let label = element.period + ' ' + element.year,
          chsValue = element.chs,
          fhrValue = element.fhr,
          simValue = element.sim
          
      fixedData.labels.push(label)
      
      fixedData.series[1].push(fhrValue)
      fixedData.series[2].push(simValue)
      fixedData.series[0].push(chsValue)
      
      
    }
    this.setState({fixedData})

  }

  render() {

    return (

      <div className="app">

      <BrowserRouter>
        <React.Fragment>
          <Header />
          
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/chart" render={ () => <Chart data={this.state.fixedData} /> } />
            <Route component={NotFound} />
          </Switch>
        </React.Fragment>
      </BrowserRouter>
        

      </div>

    );
  }
}

export default App;