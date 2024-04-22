import logo from './logo.svg';
import './App.css';
import Nav from './navigation/nav';
import Main from './layout/main';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Nav />
        <Main />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;