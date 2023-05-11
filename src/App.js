
import './App.css';
import 'primereact/resources/themes/saga-blue/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import Home from './component/common/home';
import Headers from './component/common/header';
import Footer from './component/common/footer';
import About from './component/pages/about';
function App() {
  return (
    
    <div className="App">
    <Headers/>
    <Home/>
    <About/>
    <Footer/>
      {/* <header className="App-header">
      <ParticleComponent></ParticleComponent>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <div className="card flex justify-content-center">
            <Button label="Check" icon="pi pi-check" />
        </div>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
