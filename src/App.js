import './App.css';
import AuthProvider from './context/AuthProvider';
import {
  BrowserRouter as Router,
  Switch,
  Route
}from "react-router-dom";
import Navigation from './pages/Navigation/Navigation';
import AddCourse from './pages/AddCourse/AddCourse';
import Course from './pages/Course/Course';
import UpdateCourse from './pages/UpdateCourse/UpdateCourse';
import LiveClass from './pages/LiveClass/LiveClass';
import Login from './pages/Login/Login/Login';


function App() {
  return (
    <AuthProvider>
      <Router>
        <Switch>
          <Route exact path='/'>
            <Navigation></Navigation>
            <LiveClass></LiveClass>
            <Course></Course>
            <Login></Login>
          </Route>
          <Route path='/addcourse'>
            <Navigation></Navigation>
            <AddCourse></AddCourse>
          </Route>
          <Route path='/update/:id'>
            <Navigation></Navigation>
            <UpdateCourse></UpdateCourse>
          </Route>
        </Switch>
      </Router>
      
    </AuthProvider>
  );
}

export default App;
