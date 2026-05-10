import { Outlet } from 'react-router';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer';
import './App.css';


function App() {
  const main_wrapper_style = "w-full max-w-screen min-h-screen relative bg-white"; 

  return (
    <main className={main_wrapper_style}>
      <Navbar />
      <Outlet />
      <Footer />
    </main>
  );
}


export default App;