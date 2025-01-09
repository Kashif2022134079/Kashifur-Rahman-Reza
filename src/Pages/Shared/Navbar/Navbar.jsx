import { useEffect, useRef, useState } from "react";
import { IoMdClose } from "react-icons/io";
import { IoMenu } from "react-icons/io5";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  let links = [
    { name: 'Home', link: '/'},
    { name: 'Skills', link: '/skills' },
    { name: 'Projects', link: '/projects' },
    { name: 'Education', link: '/education' }
  ];


  let [open, setOpen] = useState(false);

  // ----------------------------------------------------------------------------------------------------------
  const menuRef = useRef(null); 
  const menuButtonRef = useRef(null); 

  useEffect(() => {
    
    const handleClickOutside = (event) => {
      if (
        menuRef.current && !menuRef.current.contains(event.target) &&
        menuButtonRef.current && !menuButtonRef.current.contains(event.target)
      ) {
        setOpen(false); 
      }
    };

    
    document.addEventListener("mousedown", handleClickOutside);

    
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // ------------------------------------------------------------------------------------------------------------
  return (
    <div className="w-full top-0 left-0 border-b">
      <div className="md:flex bg-white items-center gap-x-16 py-6">
        <Link to="/">
          <div className="font-semibold md:ml-3 text-xl md:text-2xl cursor-pointer text-gray-600 items-center hover:text-gray-400 duration-500">
            Kashifur Rahman Reza
          </div>
        </Link>
        <div
        ref={menuButtonRef}
          onClick={() => setOpen(!open)}
          className="text-3xl absolute right-8 top-6 cursor-pointer md:hidden">
          {
            open ? <IoMdClose /> : <IoMenu />
          }

        </div>
        <div ref={menuRef}>
          <ul className={`md:flex md:items-center md:pb-0 pb-8 absolute md:static md:z-auto z-50 shadow-md md:shadow-none right-5 w-[220px] md:w-auto 
          md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20' : 'top-[-500px] '} opacity-100 bg-white border md:border-0
          shadow-stone-600`}>
            {
              links.map((link) => (
                <li key={link.name} className="md:ml-8 text-xl md:my-0 my-7">
                <NavLink
                  to={link.link}
                  className={({ isActive }) => 
                    isActive ? " underline" : "text-gray-800 hover:text-green-400"
                  } // Dynamic class based on active status
                >
                  {link.name}
                </NavLink>
              </li>
              ))
            }
          </ul>
        </div>
      </div>
    </div>
  )
}
export default Navbar;