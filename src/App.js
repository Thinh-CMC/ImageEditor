import './App.scss';

import Header from 'layout/Header/Header';
import HeaderMenu from 'layout/headerMenu/headerMenu';
import LeftLayer from 'layout/LeftLayer/LeftLayer';
import Menu from 'layout/Menu/Menu';
import Main from 'layout/Main/Main';
import RightLayer from 'layout/RightLayer/RightLayer';
import axios from 'axios';
import { useState, useEffect } from 'react';

function App() {
  const [arrTexts, setArrTexts] = useState([]);
  const [imgSrc, setstate] = useState([]);
  const textSelect = () => {
    axios
      .get('http://localhost:9000/textDetect', {
        params: {
          imgSrc: imgSrc[2],
        },
      })
      .then((res) => {
        setArrTexts(res.data.data);
      });
  };

  useEffect(() => {
    axios
      .get(
        'http://52.78.18.151:8001/tool_episode/ada3628a-da95-41e3-abab-33706a15af0c',
        {
          headers: {
            Authorization:
              'Bearer eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoiNWNhZTY1YmItOWY1Mi00NWRhLWI4YzQtMGUwODBhYmEzZjY5IiwiYXVkIjoiZmFzdGFwaS11c2VyczphdXRoIiwiZXhwIjoxNjM1NDI5OTUyfQ.CLieLM0oEvi97OraFIORa2YtBfT1QOiGETCyXUzeb4A',
          },
        },
      )
      .then((res) => {
        setstate(res.data.data[0].image_list);
      });
  }, []);

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
          <Main imgSrc={imgSrc} />
        </div>
        <div className="right-menu">
          <RightLayer arrTexts={arrTexts} />
        </div>
      </div>
    </div>
  );
}

export default App;
