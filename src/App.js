
import { Redirect, Router } from 'react-router';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import history from './routes/history.js';
import Routes from './routes/index.js';




function App() {
  
  return (
    <div className="App">
      {/* Content */}
      < Header/>
      {/* Routing */}

      
          <Routes />
      

      {/* End routing */}
      
      <Footer/>
      {/* End content */}

      

      
    </div>
  );
}

export default App;
