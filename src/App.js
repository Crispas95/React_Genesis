 import React, {Component} from 'react';
 import { Route, Redirect,Switch } from 'react-router-dom';
 import Movies from './componets/movies';
 import Rentals from './componets/common/rentals';
 import NotFound from './componets/notFound';
 import Customers from './componets/customers';
 import NavBar from './componets/navbar';
import MoviesForm from './componets/moviesForm';
import LoginForm from './componets/loginForm';
import './App.css';



 function App() {
  return (
    <React.Fragment>
    <NavBar />
    <main className='container'>
      <Switch>
      <Route path="/login" component ={LoginForm} />
      <Route path="/movie/:id" component={MoviesForm} />
      <Route path="/movies" component={Movies}></Route> 
       <Route path="/customers" component={Customers}></Route>
       <Route path="/rentals" component={Rentals}></Route>
       <Route path="/not-found" component={NotFound}></Route>  
       <Redirect from="/"  exact to="/movies" /> 
       <Redirect to="/not-found" />
      </Switch>
    </main>
    </React.Fragment>
    
   );
 }

 export default App;




