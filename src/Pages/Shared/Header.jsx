import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { AuthContext } from '../../Context/Authprovider';

const Header = () => {
    const { logOut, user} = useContext(AuthContext)
    function handleLogout(){
        logOut()
        .then(toast('successfully logout'))
    }
    return (
        <div className="navbar bg-base-100 shadow-lg">
            <div className="navbar-start">
                <div className="dropdown">
                    <label tabIndex={0} className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
                    </label>
                    <ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
                        <li><Link to={'/'}>Home</Link></li>
                        <li><Link to={'/services'} >Services  </Link></li>
                        <li tabIndex={0}>
                            {user?.uid ? '' : <Link to={'login'} className="justify-between">
                                Login
                            </Link>}
                         
                        </li>
                        <li><Link to={'/blog'}>Blog</Link></li>
                        <li tabIndex={0}>
                            {user?.uid ? <button onClick={handleLogout}>
                                Logout
                            </button> : ' '}

                        </li>
                    </ul>
                </div>
                <Link className="btn btn-ghost normal-case text-xl">Chicken House</Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li><Link to={'/'}>Home</Link></li>

                    <li><Link to={'/services'}>Services</Link></li>
                   
                    <li tabIndex={0}>
                        {user?.uid ? ' ' : <Link to={'login'} className="justify-between">
                            Login
                        </Link>}
                  
                    </li>
                    <li><Link to={'/myreviews'}>My Reviews </Link></li>
                    <li><Link to={'/blog'}>Blog</Link></li>
                    <li tabIndex={0}>
                        {user?.uid ? <button onClick={handleLogout}>
                            Logout
                        </button> :' '}
                    </li>
                </ul>
            </div>
            <div className="navbar-end">
                <div className="avatar">
                    <div className="w-20 rounded-full">
                        <img src="https://i.ibb.co/FqWkMvh/download.jpg" alt='sfs' />
                    </div>
                </div>
            </div>
        </div>   
         );
};

export default Header;