import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { IoMdCloseCircleOutline } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';
import { links } from '../data';
import Logo from "../images/20231230_183001.png";

import './navbar.css';

const Navbar = () => {

    const [ isNavShowing, setIsNavShowing] = useState(false)

  return (
    <nav>
        <div className="container nav__container">
            
            {/* logo*/}
            <Link to="/" className='logo' onClick={() => setIsNavShowing(false)}>
                <img src={Logo} alt="Nav Logo"/>
            </Link>

            {/*Nav Links*/}
            <ul className={`nav__links ${isNavShowing ? 'show__nav' : 'hide__nav'}`}>
                {
                    links.map(({name, path}, index) => {
                        return (
                            <li key={index}>
                                <NavLink to={path} className={({isActive}) => isActive ? 'active-nav' :
                                ''} onClick={() => setIsNavShowing(prev => !prev)} >{name}</NavLink>
                            </li>
                        )
                    })
                }
            </ul>
            
            {/*Button*/}
            <button className="nav__toggle-btn" onClick={() => setIsNavShowing(prev => !prev)}>
                {
                    isNavShowing ? <IoMdCloseCircleOutline/> : <FaBars/>
                }
            </button>
        </div>
    </nav>
  )
}

export default Navbar