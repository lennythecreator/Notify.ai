import './App.css';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import Landing from './pages/landing';
import { Home } from './layouts/home';
import { Notes } from './layouts/notes';
import { Link } from 'react-router-dom';
import { Main } from './layouts/main';
import { Create } from './layouts/create';
import { Header } from './components/ui/Header';
import { Button } from './components/ui/button';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faClapperboard, faHome, faPencil, faStar } from '@fortawesome/free-solid-svg-icons';

function Sidebar() {
  return (
    <nav className='flex flex-col w-72 h-full bg-slate-50 p-4'>
      <ul className='text-left flex flex-col gap-4 h-full'>
        <li className='flex items-center gap-1 text-2xl font-bold mb-4'><FontAwesomeIcon icon={faPencil}/>Notify</li>
        <li><Link className='flex items-center gap-4' to='/home'><FontAwesomeIcon icon={faHome}/>Home</Link></li>
        <li><Link className='flex items-center text-center gap-4' to='/create'><FontAwesomeIcon icon={faClapperboard}/>Create</Link></li>
        <li><Link className='flex items-center text-center gap-4' to='/favs'><FontAwesomeIcon icon={faStar}/>Favs</Link></li>
        <li><Link className='flex items-center text-center gap-4' to='/shared'><FontAwesomeIcon icon={faHome}/>Shared</Link></li>
        <button className='mt-auto text-white font-bold'>Logout</button>
      </ul>

      
    </nav>
  );
}

function AppContent() {
  const location = useLocation();
  const showSidebar = location.pathname !== '/';

  return (
    <div className="App flex h-full">
      {/* <Landing/> */}
      {showSidebar && <Sidebar />}
      <div className='flex flex-col w-full'>
      <Header />
      <Main/>
      
      </div>
    </div>
  );
}

function App() {
  return (
    <Router>
      <AppContent />
    </Router>
  );
}

export default App;
