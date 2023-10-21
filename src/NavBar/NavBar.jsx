
import { Link, NavLink } from 'react-router-dom';
import profileLogo from '../assets/user.png'
import { useContext } from 'react';
import { AuthContext } from '../Providers/AuthProvider';


const NavBar = () => {
    const { user, logOut } = useContext(AuthContext);

    const handleSignOut = () => {
        logOut()
            .then()
            .catch()
    }



    const navLinks = <>
        <li className=' text-xl font-bold text-white'><NavLink to='/'>Home</NavLink></li>




        <li className=' text-xl font-bold text-white'><NavLink to='/addproducts'>Add Products</NavLink></li>
        <li className=' text-xl font-bold text-white'><NavLink to='/allproducts'>All Products</NavLink></li>
        <li className=' text-xl font-bold text-white'><NavLink to='/contact'>Contact</NavLink></li>
        <li className=' text-xl font-bold text-white border border-1'><NavLink to='/mycart'>My Cart</NavLink></li>

    </>

    return (
        <div className="navbar bg-base-100 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500">
            <div className="navbar-start">
                <div className="dropdown ">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-box w-52">
                        {navLinks}
                    </ul>
                </div>

                <Link to='/'><a className="btn btn-ghost normal-case text-base lg:text-2xl font-extrabold  text-white border border-white bg-purple-500">Twizz-Fashion</a></Link>

            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    {navLinks}
                </ul>
            </div>

            <div className="navbar-end">
                <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
                    <div className="w-10 rounded-full">
                        {
                            user ? <img src={profileLogo} />
                                : <img className='hidden' src={profileLogo} />
                        }

                    </div>
                </label>

                {
                    user ? <button onClick={handleSignOut} className='btn'>Sign Out</button>
                        : <Link to={'/login'}>
                            <button className='btn'>Login</button>
                        </Link>
                }



            </div>
        </div>
    );
};

export default NavBar;