import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Outlet } from 'react-router';

const Root = () => {
    return (
        <>
          <Navbar></Navbar>
          <div className='min-h-[calc(100vh-200.5px)]'>
            <Outlet></Outlet>
          </div>
          <Footer></Footer>
        </>
    );
};

export default Root;