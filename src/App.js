
import { Redirect, Route } from 'react-router';
import { Switch } from "react-router-dom";
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import NotFound from './components/not_found';
import Courses from './feature/components/courses';
import Groups from './feature/components/groups';
import Home from './feature/components/home';


function App() {
  
  return (
    <div className="App">
      {/* Content */}
      < Header/>
      {/* Routing */}
      <Switch>
      <Redirect from='/' to='/home' exact /> {/*thay đổi url home thành / */}
        <Route path="/home" component={Home} />
        <Route path="/khoa-hoc" component={Courses}/>
        <Route path="/nhom" component={Groups}/>
        <Route component={NotFound} />
      </Switch>

      {/* End routing */}

      <Footer/>
      {/* End content */}

      

      
    </div>
  );
}

export default App;
