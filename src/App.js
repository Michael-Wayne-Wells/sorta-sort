import React from 'react';
import Header from './components/Header';
import Body from './components/Body';
import SideBar from './components/SideBar';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div>
    <style jsx>{`
      .mainBody {
        display: grid;
        width: 75%;
        margin: 0 auto;
        grid-template-columns: 60% 40%;
      }
      `}
      </style>
      <Header/>
      <div className="mainBody">
        <Body/>
        <SideBar/>
      </div>
    </div>
  );
}

export default App;
