 import React, {Component} from 'react';
 import { Route } from 'react-router-dom';
 import './App.css';
 import Movies from './componets/movies';
 import Rentals from './componets/common/rentals';
 import NotFound from './componets/notFound';



 function App() {
  return (
    <main className='container'>
       <Route path="/movies" component={Movies}></Route> 
       <Route path="/customers" component={Customers}></Route>
       <Route path="/rentals" component={Rentals}></Route>
      <Route path="/not-found" component={NotFound}></Route>   
    </main>
   );
 }

 export default App;




