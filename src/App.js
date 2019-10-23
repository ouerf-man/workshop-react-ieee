import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import SideBar from './SideBar';
import TimeLine from './TimeLine';

const timeLine = [
  '2015-2016: lorum ipsum',
  '2016-2017 : ipsum lorum'
]

const timeLine1 = [
  "2018-2019:gmc",
  "2018-2019:ieee"
]


export default class App extends React.Component {
  constructor(){
    super();
    this.state={
      bg:"#24292e"
    }

    this.changeToBlue= ()=>{
      this.setState({bg:"blue"})
    }

    this.changeToBlack= ()=>{
      this.setState({bg:"#24292e"})
    }
  }

  
  

  render() {
    return (
      <div className="App row">
        <div className="sideBar col-3" style={{
          backgroundColor: this.state.bg,
          height: "100vh",
          padding: 40
        }}>
          <SideBar />
          <button className="btn-primary" onClick={this.changeToBlue}>go blue</button>
          <button className="btn-primary" onClick={this.changeToBlack}>go black</button>
        </div>
        <div className="body col" style={{
          padding: 80
        }}>
          <h2>Education</h2>
          <TimeLine timeLine={timeLine} />
          <h2>Work</h2>
          <TimeLine timeLine={timeLine1} />
        </div>
      </div>
    );
  }
}

