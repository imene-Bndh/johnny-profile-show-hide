import { Component ,useEffect } from 'react';
import './App.css';
import Profile from './components/Profile'

class App extends Component {
  constructor() {
    super()
    this.state = {
      Person: {
        fullName: "Johnny Depp",
        bio: "John Christopher Depp II (born June 9, 1963) is an American actor, producer and musician. He is the recipient of multiple accolades, including a Golden Globe Award and a Screen Actors Guild Award, in addition to nominations for three Academy Awards and two BAFTA awards. ",
        imgSrc: "/images/jdepp.jpeg",
        profession: "Actor"
      },
      showMessage: false,
      time: 0
    }
  }
  onButtonClickHandler = () => {
    this.setState({ showMessage: !this.state.showMessage });
  };

  // useEffect(() => {
  //   setInterval(() => {
  //     this.setState({time:this.state.time + 1})
  //   }, 1000);
  // }, []);

render() {
  return (<div className="App">

    <button onClick={this.onButtonClickHandler}>Show/Hide</button>
    {this.state.showMessage && (
      <Profile
        fullName={this.state.Person.fullName}
        bio={this.state.Person.bio}
        profession={this.state.Person.profession}
      >
        <img src={this.state.Person.imgSrc} alt="profile pic" />
      </Profile>
    )}
    <h2>time interval since component was mounted : {this.state.time}</h2>
  </div>);

}
}

export default App;
