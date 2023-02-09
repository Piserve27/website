
import Nav from './components/Header/Nav';
import React ,{ Component } from 'react';
import Feed from './components/Feed/feed';
import Footer from './components/Footer/footer';




class App extends Component{
  render(){
    return (
      <div className="App">
       <Nav />
       <Feed />
       <Footer />
      </div>
    );
  }
}

export default App;
