// Bringing in the required import from 'react-router-dom'
import { Outlet } from 'react-router-dom';
import Nav from './components/Nav';
import Logo from './components/Logo';
import Footer from './components/footer';

function App() {
  // The Outlet component will conditionally swap between the different pages according to the URL
  return (
    <>
      <div className='header'>
        <Logo />
        <Nav />
      </div>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;

