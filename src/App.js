import './App.scss';

import Header from 'layout/Header/Header';
import HeaderMenu from 'layout/headerMenu/headerMenu';
import Main from 'layout/Main/Main';
import Menu from 'layout/Menu/Menu';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
        <HeaderMenu />
      </header>

      <div className="App-body">
        <div className="Menu">
          <Menu />
        </div>
        <div className="Image-editor">
          <Main />
        </div>
        <div className="Right-menu" />
      </div>
    </div>
  );
}

export default App;
