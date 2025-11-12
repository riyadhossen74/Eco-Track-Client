
import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../Component/Navbar';
import Footer from '../Component/Footer';

const Layout = () => {
    return (
        <div className='flex flex-col min-h-screen'>
            <header className="sticky top-0 z-50 bg-white dark:bg-slate-800 shadow-lg">
                <Navbar></Navbar>
            </header>
            <main className='flex-1'>
                <Outlet></Outlet>
            </main>
            <Footer></Footer>
        </div>
    );
};

export default Layout;