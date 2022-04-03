import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <div className='flex justify-between items-center m-5'>
            <p className='text-5xl font-semibold'>The <span className='text-amber-500'>Relevant</span> Reviews</p>
            <div>

                <NavLink className={ ({isActive}) => isActive ? 'text-2xl font-semibold p-4 underline underline-offset-4 decoration-sky-500 text-red-500' : 'text-2xl font-semibold p-4'} to='/home'>Home</NavLink>
                <NavLink className={ ({isActive}) => isActive ? 'text-2xl font-semibold p-4 underline underline-offset-4 decoration-sky-500 text-red-500' : 'text-2xl font-semibold p-4'} to='/reviews'>Reviews</NavLink>
                <NavLink className={ ({isActive}) => isActive ? 'text-2xl font-semibold p-4 underline underline-offset-4 decoration-sky-500 text-red-500' : 'text-2xl font-semibold p-4'} to='/dashboard'>Dashboard</NavLink>
                <NavLink className={ ({isActive}) => isActive ? 'text-2xl font-semibold p-4 underline underline-offset-4 decoration-sky-500 text-red-500' : 'text-2xl font-semibold p-4'} to='/blogs'>Blogs</NavLink>
                <NavLink className={ ({isActive}) => isActive ? 'text-2xl font-semibold p-4 underline underline-offset-4 decoration-sky-500 text-red-500' : 'text-2xl font-semibold p-4'} to='/about'>About</NavLink>
            </div>
        </div>
    );
};

export default Navbar;