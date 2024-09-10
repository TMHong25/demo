import logo from './logo.svg';
import './App.scss';
import MyComponent from './Example/MyComponent';



const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          helu, xin chào!!!
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <a href="src/views/form.js">
        Form
        </a>
        <MyComponent/> 
        
      </header>
    </div>
  );
}

export default App;
