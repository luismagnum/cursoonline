import React, { useState } from 'react';
import {Link} from "react-scroll";
import { IoClose } from "react-icons/io5";
import { TiThMenu } from "react-icons/ti";
import curso from '../../assets/curso.png';

const Navbar = () => {
  const [menu, setMenu] = useState(false);

  const handleChange = () =>{
    setMenu(!menu);
  }

  const closeMenu = () =>{
    setMenu(false);
  }
  return (
    <div className='w-full z-50'>
      <div>
        <div className='flex flex-row justify-between p-2 md:p-4 md:px-32 px-5 bg-transparent shadow-[0_3px_10px_rgba(0,0,0,0.2)]'>
            <div className='flex flex-row items-center cursor-pointer'>
                <span>
                    <img src={curso} alt='' width={45}/>
                </span>
                <h1 className='text-sky-900 text-xl font-bold ml-6'>ON LINE</h1>
            </div>
            <nav className='hidden md:flex flex-row items-center text-sky-900 text-xl ml-60 font-bold gap-6'>
                <Link
                 to='home'
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-teal-500 transition-all cursor-pointer'>
                 Home
                 </Link>
                <Link 
                 to='idiomas' 
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-teal-500 transition-all cursor-pointer'>
                 Cursos
                 </Link>
                <Link 
                 to='modalidad'
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-teal-500 transition-all cursor-pointer'>
                 Nosotros
                </Link>
                <Link 
                 to='planes' 
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-teal-500 transition-all cursor-pointer'>
                 Planes
                </Link>
                <Link 
                 to='footer' 
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-teal-500 transition-all cursor-pointer'>
                 Contacto
                </Link>

            </nav>
            <div className='md:hidden flex items-center'>
                {menu ? (
                    <IoClose size={25} onClick={handleChange} className='cursor-pointer'/>
                ):(
                    <TiThMenu size={25} onClick={handleChange} className='cursor-pointer'/>
                )}
            </div>
        </div>
        <div className={`${menu ? "translate-x-0" : "-translate-x-full"} lg:hidden flex flex-col absolute bg-white text-sky-900 left-0 top-10 font-semibold text-2xl text-center pt-8 pb-6 gap-1 w-full h-60 transition-transform duration-300 z-50`}>
        <Link
                 to='home'
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-teal-500 transition-all cursor-pointer'
                 onClick={closeMenu}>
                 Home
                 </Link>
                 <Link 
                 to='idiomas' 
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-teal-500 transition-all cursor-pointer'
                 onClick={closeMenu}>
                 Cursos
                 </Link>
                <Link 
                 to='modalidad'
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-teal-500 transition-all cursor-pointer'
                 onClick={closeMenu}>
                 Nosotros
                </Link>
                <Link 
                 to='planes' 
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-teal-500 transition-all cursor-pointer'
                 onClick={closeMenu}>
                 Planes
                </Link>
                <Link 
                 to='footer' 
                 spy={true} 
                 smooth={true} 
                 duration={500} 
                 className='hover:text-teal-500 transition-all cursor-pointer'
                 onClick={closeMenu}>
                  Contacto
                </Link>
        </div>
      </div>
    </div>
  )
}

export default Navbar