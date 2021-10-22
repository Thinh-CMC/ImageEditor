import './App.scss';

import Header from 'layout/Header/Header';
import HeaderMenu from 'layout/headerMenu/headerMenu';
import LeftLayer from 'layout/LeftLayer/LeftLayer';
import Menu from 'layout/Menu/Menu';
import Main from 'layout/Main/Main';
import RightLayer from 'layout/RightLayer/RightLayer';
import axios from 'axios';
import { useState } from 'react';

function App() {
  const [arrTexts, setArrTexts] = useState([]);
  const textSelect = () => {
    axios
      .get('http://localhost:9000/testApi', {
        params: {
          imgSrc:
            'http://52.78.18.151:3000//ada3628a-da95-41e3-abab-33706a15af0c//scroll_001.jpg',
        },
      })
      .then((res) => {
        setArrTexts(res.data.description);
      });
  };
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <HeaderMenu />
      </header>
      <div className="App-body">
        <div className="Menu">
          <Menu onClick={textSelect} />
        </div>
        <div className="left-menu">
          <LeftLayer />
        </div>
        <div className="Image-editor">
          <Main />
        </div>
        <div className="right-menu">
          <RightLayer arrTexts={arrTexts} />
        </div>
      </div>
    </div>
  );
}

export default App;
