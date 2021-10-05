import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import './App.css';
import Courses from './components/Courses/Courses';
import NotFound from './components/NotFound/NotFound';
import Student from './components/Students/Student';
import Home from './components/Home/Home';
import About from './components/About/About';

function App() {
  return (
    <div className="App">
      <Router>


        <Switch>
          
          <Route exact path='/'>
            <Home/>
          </Route>

          <Route path='/home'>
            <Home/>
          </Route>

          <Route path='/courses'>
            <Courses></Courses>
          </Route>

          <Route path='/student'>
            <Student></Student>
          </Route>

          <Route path='/about'>
            <About/>
          </Route>

          <Route path='/contact'>
            <NotFound/>
          </Route>
          <Route path='*'>
            <NotFound></NotFound>
          </Route>

        </Switch>
        
      </Router>
    </div>
  );
}

export default App;
