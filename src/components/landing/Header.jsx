import React, { useEffect, useState } from 'react'
import { FileText, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import ProfileDropdown from '../layout/ProfileDropdown';

const Header = () => {

    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
    const isAuthenticated = true;
    const user = { name: "John Doe", email: "user@gmail.com" };

    const logout = () => { }

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, [])

    return (
        <header className='fixed top-0 w-full z-50 transition-all duration-300 bg-gray-100 ${isScrolled ? "bg-white/95 backdrop-blur-sm shadow-lg" : bg-white/0}'>
            <div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex items-center justify-between h-16 lg:h-20'>
                    <div className='flex items-center space-x-2'>
                        <div className='w-8 h-8 bg-blue-900 rouneded-md flex items-center justify-center rounded-sm'>
                            <FileText className='w-4 h-4 text-white' />
                        </div>
                        <span className='text-xl font-bold text-gray-900'>
                            AI Invoice Generator
                        </span>
                    </div>
                    <div className='hidden lg:flex lg:space-x-8 lg:items-center'>
                        <a href="features" className='text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black after:transition:all hover:after:w-full'>Features</a>
                        <a href="testimonials" className='text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black after:transition:all hover:after:w-full'>Testimonials</a>
                        <a href="faq" className='text-gray-600 hover:text-gray-900 font-medium transition-colors duration-200 relative after:absolute after:bottom-0 after:left-0 after:w-0 after:h-0.5 after:bg-black after:transition:all hover:after:w-full'>FAQ</a>
                    </div>
                    <div className='hidden lg:flex items-center space-x-4'>
                        {isAuthenticated ? <ProfileDropdown
                            isOpen={profileDropdownOpen}
                            onToggle={(e) => { e.stopPropagation(); setProfileDropdownOpen(!profileDropdownOpen) }}
                            avatar={user?.avatar || ""}
                            companyName={user?.name || ""}
                            email={user?.email || ""}
                            onLogout={logout}
                        /> : <> <Link to={'/login'} className='text-black hover:text-gray-900 font-medium transition-colors duration-200'>Login</Link>
                            <Link to={'/signup'} className='bg-gradient-to-r from-blue-950 to-blue-900 hover:bg-gray-800 text-white px-6 py-2.5 rounded-lg font-medium transition-all duration-200 hover:scale-105 hover:shadow-lg'>Sign up</Link></>}
                    </div>
                    <div className='lg:hidden'>
                        <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='p-2 rounded-lg text-gray-600 hover:text-gray-900 hover-bg-gray:100 transition-colors duration-200'>
                            {isMenuOpen ? <X className='w-6 h-6' /> : <Menu className='w-6 h-6' />}
                        </button>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header
