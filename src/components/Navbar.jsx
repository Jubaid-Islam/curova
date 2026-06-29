import { useState, useEffect } from "react";
import { NavLink } from 'react-router';
import logoImg from '../assets/logo.png';

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [show, setShow] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const toggleDropdown = () => setDropdownOpen(!dropdownOpen);
  const closeDropdown = () => setDropdownOpen(false);

  // scroll hide or show
  const controlNavbar = () => {
    if (window.scrollY > lastScrollY) {
      setShow(false);

    } else {
      setShow(true);
    }
    setLastScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", controlNavbar);
    return () => window.removeEventListener("scroll", controlNavbar);
  }, [lastScrollY]);

  return (
    <div
      className={`fixed top-0 left-0 w-full bg-white shadow-sm z-50 transition-transform duration-300 
        ${show ? "translate-y-0" : "-translate-y-full"
        }`
      }>


      <div className="navbar md:max-w-7xl mx-auto">

        <div className="navbar-start">

          {/* mobile */}
          <div className="relative lg:hidden">

            <button onClick={toggleDropdown} className="btn btn-ghost">

              <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
              </svg>

            </button>

            {
              dropdownOpen && (
                <ul className="absolute top-full left-0 menu menu-sm bg-white rounded-box shadow mt-5 w-30 p-2 z-50">
                  <li>
                    <NavLink onClick={closeDropdown} className={({ isActive }) => (isActive ? 'text-sky-600' : '')} to='/'>Home</NavLink>
                  </li>
                  <li>
                    <NavLink onClick={closeDropdown} className={({ isActive }) => (isActive ? 'text-sky-600' : '')} to='/bookings'>Bookings</NavLink>
                  </li>
                  <li>
                    <NavLink onClick={closeDropdown} className={({ isActive }) => (isActive ? 'text-sky-600' : '')} to='/blogs'>Blogs</NavLink>
                  </li>
                  <li>
                    <NavLink onClick={closeDropdown} className={({ isActive }) => (isActive ? 'text-sky-600' : '')} to='/contact'>Contact</NavLink>
                  </li>
                </ul>
              )
            }
          </div>


          {/* Logo */}
          <NavLink to={'/'}>

            <div className='flex gap-2 items-center'>

              <img className='w-9' src={logoImg} alt="Curova" />
              <h3 className='text-2xl cinzel'>Curova</h3>

            </div>
          </NavLink>

        </div>



        {/* navbar center */}
        <div className="navbar-center hidden lg:flex">

          <ul className="menu menu-horizontal px-1">
            <li><NavLink className={({ isActive }) => (isActive ? 'text-sky-600' : '')} to='/'>Home</NavLink></li>
            <li><NavLink className={({ isActive }) => (isActive ? 'text-sky-600' : '')} to='/bookings'>Bookings</NavLink></li>
            <li><NavLink className={({ isActive }) => (isActive ? 'text-sky-600' : '')} to='/blogs'>Blogs</NavLink></li>
            <li><NavLink className={({ isActive }) => (isActive ? 'text-sky-600' : '')} to='/contact'>Contact</NavLink></li>
          </ul>

        </div>


        {/* navbar end */}
        <div className="navbar-end">
          <NavLink to='/emergency' className="btn h-10 bg-gradient-to-r from-sky-400 to-sky-700
           hover:from-sky-700 hover:to-sky-400 transition duration-300 ease-in-out text-white rounded-3xl">
            Emergency
          </NavLink>
        </div>

      </div>
    </div>
  );
};

export default Navbar;
