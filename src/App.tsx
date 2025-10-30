import { Link } from 'react-router-dom';
import './App.css';
import { AppRouter } from './routes/appRouter';

function App() {
  return (
    <>  
      <nav className='nav'>
          <Link to={'/login'}>Login</Link>
          <Link to={'/admin'}>Panel admin</Link>
          <Link to={'/home'}>Home</Link>
          <Link to={'/products'}>Products</Link>
      </nav>
     <AppRouter/>
    </>
  )
}

export default App
