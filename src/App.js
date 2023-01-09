import './App.css';
import Movies from './componets/movies';
import { Route } from 'react-router-dom'; 


function App() {
  return (
    <main className='container'>
      <Movies />
      <div className='content'>
        <Route path="/products" components={Products} />
        <Route path="/posts" components={Posts} />
        <Route path="/admin" components={Dashboard} />
        <Route path="/" components={Home} />
      </div>
    </main>
  );
}

export default App;
